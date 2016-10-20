//! An analog of a Python list which contains elements of a single type, will accept an
//! undefined number of one (and just one) of any other supported type (including other
//! PyLists).
//!
//! PyList can be constructed from other iterable types as long as the inner type is
//! supported (a copy will be performed in case is necessary).
//!
//! ```
//! # use rustypy::PyList;
//! # use std::iter::FromIterator;
//! PyList::from_iter(vec![1u32; 3]); // copied
//! PyList::from(vec![1u32; 3]); // moved
//! ```
//!
//! You can also use the typical vector interfaces (push, pop, remove, etc.) as long as the
//! type is supported (check [PyArg](../rustypy/pytypes/enum.PyArg.html) variants).
//!
//! ```
//! # use rustypy::PyList;
//! let mut l = PyList::new();
//! for e in vec![0u32, 1, 3] {
//!     l.push(e);
//! }
//! ```
//!
//! When extracting in Python with the FFI, elements are moved, not copied
//! (except for PyTuples which require an extra copy)
//! and when free'd all the original elements are dropped.
//!
//! ## Unpacking PyList from Python
//! Is recommended to use the [unpack_pylist!](../../macro.unpack_pylist!.html) macro in order
//! to convert a PyList to a Rust native type. Check the macro documentation for more info.

use pytypes::PyArg;

use std::ops::{Index, IndexMut};
use std::iter::{FromIterator, IntoIterator};

/// An analog of a Python list which contains an undefined number of elements of
/// a single kind, of any [supported type](../../../rustypy/pytypes/enum.PyArg.html).
///
/// Read the [module docs](index.html) for more information.
#[derive(Clone, Debug, PartialEq)]
pub struct PyList {
    members: Vec<PyArg>,
}

impl PyList {
    pub fn new() -> PyList {
        PyList { members: Vec::new() }
    }
    pub fn remove(&mut self, index: usize) -> PyArg {
        self.members.remove(index)
    }
    pub fn pop(&mut self) -> Option<PyArg> {
        self.members.pop()
    }
    pub fn len(&self) -> usize {
        self.members.len()
    }
    pub fn push<T>(&mut self, a: T)
        where PyArg: From<T>
    {
        self.members.push(PyArg::from(a))
    }
    /// Get a PyList from a previously boxed raw pointer.
    pub unsafe fn from_ptr(ptr: *mut PyList) -> PyList {
        *(Box::from_raw(ptr))
    }
    /// Return a PyList as a raw pointer.
    pub fn as_ptr(self) -> *mut PyList {
        Box::into_raw(Box::new(self))
    }
}

impl<T> FromIterator<T> for PyList
    where PyArg: From<T>
{
    fn from_iter<I: IntoIterator<Item = T>>(iter: I) -> Self {
        let mut c = PyList::new();
        for e in iter {
            c.push(e);
        }
        c
    }
}

impl IntoIterator for PyList {
    type Item = PyArg;
    type IntoIter = ::std::vec::IntoIter<PyArg>;
    fn into_iter(self) -> Self::IntoIter {
        self.members.into_iter()
    }
}

impl<T> Into<Vec<T>> for PyList
    where PyArg: Into<T>
{
    fn into(mut self) -> Vec<T> {
        self.members.drain(..).map(|x| PyArg::into(x)).collect()
    }
}

impl<T> From<Vec<T>> for PyList
    where PyArg: From<T>
{
    fn from(mut v: Vec<T>) -> PyList {
        PyList { members: v.drain(..).map(|x| PyArg::from(x)).collect() }
    }
}

impl Index<usize> for PyList {
    type Output = PyArg;
    fn index(&self, index: usize) -> &PyArg {
        &(self.members[index])
    }
}

impl<'a> IndexMut<usize> for PyList {
    fn index_mut(&mut self, index: usize) -> &mut PyArg {
        &mut (self.members[index])
    }
}

/// Consumes a `Box<PyList<PyArg(T)>>` content and returns a `Vec<T>` from it, no copies
/// are performed in the process.
///
/// All inner elements are moved out of their containing PyArg enums, PyTuple
/// variants are destructured into Rust tuples which contain the appropiate Rust type
/// (valid syntax for [unpack_pytuple!](../rustypy/macro.unpack_pytuple!.html) macro must
/// be provided).
///
/// # Examples
///
/// A simple PyList which contains PyString types::
///
/// ```
/// # #[macro_use] extern crate rustypy;
/// # fn main(){
/// use rustypy::{PyList, PyString};
/// let string_list = Box::new(PyList::from(vec!["Python", "in", "Rust"]));
/// let unpacked = unpack_pylist!(string_list; PyList{PyString => PyString});
/// # }
/// ```
///
/// And an other with i32:
///
/// ```
/// # #[macro_use] extern crate rustypy;
/// # fn main(){
/// use rustypy::PyList;
/// let int_list = Box::new(PyList::from(vec![1i32; 5]));
/// let unpacked = unpack_pylist!(int_list; PyList{I32 => i32});
/// # }
/// ```
///
/// It can contain nested containers. A PyList which contains tuples which contain a list
/// of i64 tuples and a single f32:
///
/// ```
/// # #[macro_use] extern crate rustypy;
/// # fn main(){
/// #    use rustypy::{PyList, PyArg};
/// #    let list = PyList::from(vec![
/// #        pytuple!(PyArg::PyList(Box::new(PyList::from(vec![
/// #                    pytuple!(PyArg::I64(1), PyArg::I64(2), PyArg::I64(3))]))),
/// #                 PyArg::F32(0.1)),
/// #        pytuple!(PyArg::PyList(Box::new(PyList::from(vec![
/// #                    pytuple!(PyArg::I64(3), PyArg::I64(2), PyArg::I64(1))]))),
/// #                 PyArg::F32(0.2))
/// #        ]).as_ptr();
/// let list = unsafe { Box::new(PyList::from_ptr(list)) };
/// let unpacked = unpack_pylist!(list;
///     PyList{
///         PyTuple{(
///             {PyList{PyTuple{(I64, I64, I64,)}}}, F32,
///         )}
///     });
/// assert_eq!(vec![(vec![(1, 2, 3,)], 0.1), (vec![(3, 2, 1,)], 0.2)], unpacked);
/// # }
/// ```
///
#[macro_export]
macro_rules! unpack_pylist {
    ( $pylist:ident; PyList { $o:tt { $($t:tt)* } } ) => {{
        let mut unboxed = *($pylist);
        use std::collections::VecDeque;
        let mut list = VecDeque::with_capacity(unboxed.len());
        for _ in 0..unboxed.len() {
            match unboxed.pop() {
                Some(PyArg::$o(val)) => {
                    let inner = unpack_pylist!(val; $o { $($t)* });
                    list.push_front(inner);
                },
                Some(_) => _rustypy_abort_xtract_fail!("failed while converting pylist to vec"),
                None => {}
            }
        };
        Vec::from(list)
    }};
    ( $pytuple:ident; PyTuple { $t:tt } ) => {{
        let unboxed = *($pytuple);
        unpack_pytuple!(unboxed; $t)
    }};
    ( $pylist:ident; PyList{$t:tt => $type_:ty} ) => {{
        use rustypy::{PyList, PyArg};
        let mut unboxed = *($pylist);
        trait PyListPop {
            type Target;
            fn pop_t(&mut self) -> Option<Self::Target>;
        }
        impl PyListPop for PyList {
            type Target = $type_;
            fn pop_t(&mut self) -> Option<Self::Target> {
                let e = self.pop();
                match e {
                    Some(PyArg::$t(val)) => Some(val),
                    Some(_) => _rustypy_abort_xtract_fail!("failed while converting pylist to vec"),
                    None => None
                }
            }
        }
        use std::collections::VecDeque;
        let mut list = VecDeque::with_capacity(unboxed.len());
        for _ in 0..unboxed.len() {
            match unboxed.pop_t() {
                Some(v) => list.push_front(v),
                None => {}
            }
        };
        Vec::from(list)
    }};
}

#[no_mangle]
pub unsafe extern "C" fn pylist_new(len: usize) -> *mut PyList {
    let list = PyList { members: Vec::with_capacity(len) };
    list.as_ptr()
}

#[no_mangle]
pub unsafe extern "C" fn pylist_push(list: &mut PyList, e: *mut PyArg) {
    list.push(*(Box::from_raw(e)));
}

#[no_mangle]
pub unsafe extern "C" fn pylist_len(list: &mut PyList) -> usize {
    list.len()
}

#[no_mangle]
pub extern "C" fn pylist_free(ptr: *mut PyList) {
    if ptr.is_null() {
        return;
    }
    unsafe {
        Box::from_raw(ptr);
    }
}

#[no_mangle]
pub unsafe extern "C" fn pylist_get_element(ptr: *mut PyList, index: usize) -> *mut PyArg {
    let list = &mut *ptr;
    Box::into_raw(Box::new(PyList::remove(list, index)))
}

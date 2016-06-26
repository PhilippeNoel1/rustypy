
//! This file has been generated by rustypy and contains bindings for Python.
//! rustypy version: alpha
//! Python implementation build version: cpython-35

// IMPORTANT: This file will be replaced on new rustypy calls.
// Don't write on it directly, rather call functions from an other file.

#![allow(
    non_camel_case_types,
    non_snake_case,
    non_upper_case_globals,
    unused_imports,
    unused_variables)]

use libc::{c_long, c_double};
use cpython::{Python, ToPyObject, FromPyObject, ObjectProtocol,
              PythonObjectWithCheckedDowncast, PyObject, PyModule, PyErr,
              PyDict, NoArgs};
use std::collections::HashMap;

fn handle_import_error(err: PyErr) {
    println!("failed to load Python module, reason:
             {}", err.pvalue.unwrap());
}

/// Binds for Python module `primitives`
pub struct primitives {
    module: PyModule
}

impl primitives {
    /// Loads the module instance to the interpreter
    pub fn new(py: Python) -> Option<primitives> {
        let module = py.import("primitives");
        match module {
            Ok(m) => Some(
                primitives {
                    module: m,
                }),
            Err(exception) => {
                handle_import_error(exception);
                None
            }
        }
    }

    pub fn rust_bind_bool_func(&self, py: Python,
        bool_arg: bool
    ) -> bool {

        let func = self.module.get(py, "rust_bind_bool_func").unwrap();
        let bool_arg = bool_arg.to_py_object(py);
        let result = func.call(py, (bool_arg, ), None).unwrap();
        let GwbZQZ = result.extract::<bool>(py).unwrap();

        return GwbZQZ

    }

    pub fn rust_bind_int_func(&self, py: Python,
        int_arg: c_long
    ) -> c_long {

        let func = self.module.get(py, "rust_bind_int_func").unwrap();
        let int_arg = int_arg.to_py_object(py);
        let result = func.call(py, (int_arg, ), None).unwrap();
        let qOLkXY = result.extract::<c_long>(py).unwrap();

        return qOLkXY

    }

    pub fn rust_bind_str_func(&self, py: Python,
        str_arg: String
    ) -> String {

        let func = self.module.get(py, "rust_bind_str_func").unwrap();
        let str_arg = str_arg.to_py_object(py);
        let result = func.call(py, (str_arg, ), None).unwrap();
        let IpjVRz = result.extract::<String>(py).unwrap();

        return IpjVRz

    }

    pub fn rust_bind_tuple2(&self, py: Python,
        tup_arg: (String, bool)
    ) -> (String, bool) {

        let func = self.module.get(py, "rust_bind_tuple2").unwrap();
        let tup_arg = tup_arg.to_py_object(py);
        let result = func.call(py, (tup_arg, ), None).unwrap();
            let yndHLR = result.get_item(py,0).unwrap().extract::<String>(py).unwrap();
            let zBGwdB = result.get_item(py,1).unwrap().extract::<bool>(py).unwrap();

        return (yndHLR, zBGwdB)

    }

    pub fn rust_bind_tuple1(&self, py: Python,
        tup_arg: (String, c_long)
    ) -> (String, c_long) {

        let func = self.module.get(py, "rust_bind_tuple1").unwrap();
        let tup_arg = tup_arg.to_py_object(py);
        let result = func.call(py, (tup_arg, ), None).unwrap();
            let WqLezw = result.get_item(py,0).unwrap().extract::<String>(py).unwrap();
            let UvCYlz = result.get_item(py,1).unwrap().extract::<c_long>(py).unwrap();

        return (WqLezw, UvCYlz)

    }

    pub fn rust_bind_float_func(&self, py: Python,
        float_arg: c_double
    ) -> c_double {

        let func = self.module.get(py, "rust_bind_float_func").unwrap();
        let float_arg = float_arg.to_py_object(py);
        let result = func.call(py, (float_arg, ), None).unwrap();
        let rJcJcV = result.extract::<c_double>(py).unwrap();

        return rJcJcV

    }

    pub fn rust_bind_tuple3(&self, py: Python,
        tup_arg1: c_double,
        tup_arg2: bool
    ) -> (c_double, bool) {

        let func = self.module.get(py, "rust_bind_tuple3").unwrap();
        let tup_arg1 = tup_arg1.to_py_object(py);
        let tup_arg2 = tup_arg2.to_py_object(py);
        let result = func.call(py, (tup_arg1, tup_arg2, ), None).unwrap();
            let PycFkX = result.get_item(py,0).unwrap().extract::<c_double>(py).unwrap();
            let wWRVvZ = result.get_item(py,1).unwrap().extract::<bool>(py).unwrap();

        return (PycFkX, wWRVvZ)

    }

}

/// Python module manager
pub struct PyModules {
    pub primitives: primitives,

}

impl PyModules {
    pub fn new(py: Python) -> PyModules {
        PyModules {
            primitives: primitives::new(py).unwrap(),

        }
    }
}
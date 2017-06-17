var searchIndex = {};
searchIndex["rustypy"] = {"doc":"Binding Rust with Python, both ways!","items":[[0,"pytypes","rustypy","Types for interfacing with Python.",null,null],[4,"PyArg","rustypy::pytypes","Enum type used to construct PyTuple and PyList types. All the kinds supported in Python are included here.",null,null],[13,"I64","","",0,null],[13,"I32","","",0,null],[13,"I16","","",0,null],[13,"I8","","",0,null],[13,"U64","","",0,null],[13,"U32","","",0,null],[13,"U16","","",0,null],[13,"U8","","",0,null],[13,"F32","","",0,null],[13,"F64","","",0,null],[13,"PyBool","","",0,null],[13,"PyString","","",0,null],[13,"PyTuple","","",0,null],[13,"PyList","","",0,null],[13,"PyDict","","",0,null],[13,"None","","",0,null],[0,"pystring","","An analog of a Python String.",null,null],[3,"PyString","rustypy::pytypes::pystring","An analog of a Python string.",null,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"pystring"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"pystring"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"pystring"}],"output":{"name":"bool"}}],[11,"hash","","",1,null],[11,"from_ptr","","Get a PyString from a previously boxed raw pointer.",1,null],[11,"to_string","","Constructs an owned String from a PyString.",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"from_ptr_to_string","","Constructs an owned String from a raw pointer.",1,null],[11,"as_ptr","","Returns PyString as a raw pointer. Use this whenever you want to return a PyString to Python.",1,null],[11,"from_raw","","Return a PyString from a raw char pointer.",1,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","Copies a string slice to a PyString.",1,{"inputs":[{"name":"str"}],"output":{"name":"pystring"}}],[11,"from","","Copies a String to a PyString.",1,{"inputs":[{"name":"string"}],"output":{"name":"pystring"}}],[0,"pybool","rustypy::pytypes","Analog to a Python boolean type.",null,null],[3,"PyBool","rustypy::pytypes::pybool","Analog to a Python boolean type.",null,null],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"pybool"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"pybool"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"pybool"}],"output":{"name":"bool"}}],[11,"hash","","",2,null],[11,"from_ptr","","Get a PyBool from a previously boxed raw pointer.",2,null],[11,"from_ptr_into_bool","","Creates a bool from a raw pointer to a PyBool.",2,null],[11,"to_bool","","Conversion from PyBool to bool.",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_ptr","","Returns PyBool as a raw pointer. Use this whenever you want to return a PyBool to Python.",2,null],[11,"load","","Sets value of the underlying bool",2,{"inputs":[{"name":"self"},{"name":"bool"}],"output":null}],[11,"from","","",2,{"inputs":[{"name":"bool"}],"output":{"name":"pybool"}}],[11,"from","","",2,{"inputs":[{"name":"bool"}],"output":{"name":"pybool"}}],[11,"from","","",2,{"inputs":[{"name":"i8"}],"output":{"name":"pybool"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"bool"}}],[11,"not","","",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"bitand","","",2,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"bool"}}],[11,"bitand","","",2,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"bool"}}],[11,"bitor","","",2,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"bool"}}],[11,"bitor","","",2,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"bool"}}],[0,"pytuple","rustypy::pytypes","An analog of a Python tuple, will accept an undefined number of any other supported types.",null,null],[3,"PyTuple","rustypy::pytypes::pytuple","An analog of a Python tuple, will accept an undefined number of other supported types.",null,null],[12,"elem","","",3,null],[12,"idx","","",3,null],[12,"next","","",3,null],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"pytuple"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"pytuple"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"self"},{"name":"pytuple"}],"output":{"name":"bool"}}],[11,"from_ptr","","Get a PyTuple from a previously boxed raw pointer.",3,null],[11,"len","","Returns the length of the tuple.",3,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"as_ptr","","Returns self as raw pointer. Use this method when returning a PyTuple to Python.",3,null],[11,"deref","","",3,{"inputs":[{"name":"self"}],"output":{"name":"pyarg"}}],[0,"pylist","rustypy::pytypes","An analog of a Python list which contains elements of a single type, will accept an undefined number of one (and just one) of any other supported type (including other PyLists).",null,null],[3,"PyList","rustypy::pytypes::pylist","An analog of a Python list which contains an undefined number of elements of a single kind, of any supported type.",null,null],[3,"IntoIter","","",null,null],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"pylist"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"pylist"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"pylist"}],"output":{"name":"bool"}}],[11,"new","","Constructs a new, empty `PyList<T>`.",4,{"inputs":[],"output":{"name":"pylist"}}],[11,"remove","","Removes and returns the element at position `index` within the vector, shifting all elements after it to the left.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"t"}}],[11,"pop","","Removes the last element from a vector and returns it, or `None` if it is empty.",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"len","","Returns the number of elements in the PyList.",4,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"push","","Appends an element to the back of a collection.",4,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"from_ptr","","Get a PyList from a previously boxed raw pointer.",4,null],[11,"as_ptr","","Return a PyList as a raw pointer.",4,null],[11,"into_iter","","Consume self and turn it into an iterator.",4,{"inputs":[{"name":"self"}],"output":{"name":"intoiter"}}],[11,"from_iter","","",4,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"next","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"collect","","",5,{"inputs":[{"name":"self"}],"output":{"name":"b"}}],[11,"into","","",4,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"from","","",4,{"inputs":[{"name":"vec"}],"output":{"name":"pylist"}}],[11,"index","","",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"pyarg"}}],[11,"index_mut","","",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"pyarg"}}],[0,"pydict","rustypy::pytypes","An analog of a Python dict which contains pairs of (key, values) each of a single type, will accept an undefined number of one (and just one) of any other supported type (including other PyDict) as value and a corresponding key of a single supported hashable type (check PyDictK to see which ones are supported).",null,null],[3,"PyDict","rustypy::pytypes::pydict","",null,null],[3,"IntoIter","","",null,null],[4,"PyDictK","","Types allowed as PyDict key values.",null,null],[13,"I64","","",6,null],[13,"I32","","",6,null],[13,"I16","","",6,null],[13,"I8","","",6,null],[13,"U64","","",6,null],[13,"U32","","",6,null],[13,"U16","","",6,null],[13,"U8","","",6,null],[13,"PyBool","","",6,null],[13,"PyString","","",6,null],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"pydict"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"pydict"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"self"},{"name":"pydict"}],"output":{"name":"bool"}}],[11,"new","","Creates an empty PyDict.",7,{"inputs":[],"output":{"name":"pydict"}}],[11,"insert","","Inserts a key-value pair into the map.",7,{"inputs":[{"name":"self"},{"name":"k"},{"name":"v"}],"output":{"name":"option"}}],[11,"remove","","Removes a key from the map, returning the value at the key if the key was previously in the map.",7,{"inputs":[{"name":"self"},{"name":"k"}],"output":{"name":"option"}}],[11,"get","","Returns a reference to the value corresponding to the key.",7,{"inputs":[{"name":"self"},{"name":"k"}],"output":{"name":"option"}}],[11,"from_ptr","","Get a PyDict from a previously boxed PyDict.",7,null],[11,"as_ptr","","Returns self as raw pointer. Use this method when returning a PyDict to Python.",7,null],[11,"into_hashmap","","Consumes self and returns a HashMap, takes one type parameter and transforms inner content to that type.",7,{"inputs":[{"name":"self"}],"output":{"name":"hashmap"}}],[11,"into_iter","","Consume self and turn it into an iterator.",7,{"inputs":[{"name":"self"}],"output":{"name":"intoiter"}}],[11,"from_iter","","",7,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"from","","",7,{"inputs":[{"name":"hashmap"}],"output":{"name":"pydict"}}],[11,"next","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"collect","","",8,{"inputs":[{"name":"self"}],"output":{"name":"b"}}],[11,"clone","rustypy::pytypes","",0,{"inputs":[{"name":"self"}],"output":{"name":"pyarg"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"pyarg"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"pyarg"}],"output":{"name":"bool"}}],[11,"as_ptr","","",0,null],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"i8"}}],[11,"from","","",0,{"inputs":[{"name":"i8"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"i16"}}],[11,"from","","",0,{"inputs":[{"name":"i16"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"from","","",0,{"inputs":[{"name":"i32"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"i64"}}],[11,"from","","",0,{"inputs":[{"name":"i64"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"u8"}}],[11,"from","","",0,{"inputs":[{"name":"u8"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"u16"}}],[11,"from","","",0,{"inputs":[{"name":"u16"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"from","","",0,{"inputs":[{"name":"u32"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"from","","",0,{"inputs":[{"name":"u64"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"from","","",0,{"inputs":[{"name":"f32"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[11,"from","","",0,{"inputs":[{"name":"f64"}],"output":{"name":"pyarg"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"pybool"}}],[11,"from","","",0,{"inputs":[{"name":"pybool"}],"output":{"name":"pyarg"}}],[11,"from","rustypy::pytypes::pybool","",2,{"inputs":[{"name":"pyarg"}],"output":{"name":"pybool"}}],[11,"as_ref","rustypy::pytypes","",0,{"inputs":[{"name":"self"}],"output":{"name":"pystring"}}],[11,"from","","",0,{"inputs":[{"name":"pystring"}],"output":{"name":"pyarg"}}],[11,"from","rustypy::pytypes::pystring","",1,{"inputs":[{"name":"pyarg"}],"output":{"name":"pystring"}}],[11,"as_ref","rustypy::pytypes","",0,{"inputs":[{"name":"self"}],"output":{"name":"pytuple"}}],[11,"from","","",0,{"inputs":[{"name":"pytuple"}],"output":{"name":"pyarg"}}],[11,"from","rustypy::pytypes::pytuple","",3,{"inputs":[{"name":"pyarg"}],"output":{"name":"pytuple"}}],[11,"as_ref","rustypy::pytypes","",0,{"inputs":[{"name":"self"}],"output":{"name":"pylist"}}],[11,"from","","",0,{"inputs":[{"name":"pylist"}],"output":{"name":"pyarg"}}],[11,"from","rustypy::pytypes::pylist","",4,{"inputs":[{"name":"pyarg"}],"output":{"name":"pylist"}}],[11,"as_ref","rustypy::pytypes","",0,{"inputs":[{"name":"self"}],"output":{"name":"pydict"}}],[11,"from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"pyarg"}}],[11,"from","","",0,{"inputs":[{"name":"string"}],"output":{"name":"pyarg"}}],[11,"from","","",0,{"inputs":[{"name":"bool"}],"output":{"name":"pyarg"}}],[11,"from","","",0,{"inputs":[{"name":"bool"}],"output":{"name":"pyarg"}}],[11,"from","","",0,{"inputs":[{"name":"vec"}],"output":{"name":"pyarg"}}],[11,"from","","",0,{"inputs":[{"name":"pydict"}],"output":{"name":"pyarg"}}],[11,"from","","",0,{"inputs":[{"name":"hashmap"}],"output":{"name":"pyarg"}}],[11,"from","rustypy::pytypes::pydict","",7,{"inputs":[{"name":"pyarg"}],"output":{"name":"pydict"}}],[14,"pytuple","rustypy","This macro allows the construction of PyTuple types.",null,null],[14,"unpack_pytuple","","Iterates over a a PyTuple and returns a corresponding Rust tuple.",null,null],[14,"unpack_pylist","","Consumes a `Box<PyList<PyArg(T)>>` content and returns a `Vec<T>` from it, no copies are performed in the process.",null,null],[14,"unpack_pydict","","Consumes a `*mut PyDict<K, T> as *mut size_t` content and returns a `HashMap<K, T>` from it, no copies are performed in the process.",null,null]],"paths":[[4,"PyArg"],[3,"PyString"],[3,"PyBool"],[3,"PyTuple"],[3,"PyList"],[3,"IntoIter"],[4,"PyDictK"],[3,"PyDict"],[3,"IntoIter"]]};
initSearch(searchIndex);

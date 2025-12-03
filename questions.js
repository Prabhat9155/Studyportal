// Array of question objects
const questions = [
  // Easy Questions
  {
    id: 1,
    difficulty: "easy",
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    correct: 1,
    explanation: "Binary search has a time complexity of O(log n) because it divides the search space in half with each comparison."
  },
  {
    id: 2,
    difficulty: "easy",
    question: "Which data structure uses the LIFO (Last-In, First-Out) principle?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    correct: 1,
    explanation: "A stack is a linear data structure that follows the LIFO principle, where the last element added is the first one to be removed."
  },
  {
    id: 3,
    difficulty: "easy",
    question: "In C, which function is used to allocate dynamic memory?",
    options: ["malloc()", "calloc()", "realloc()", "all of the above"],
    correct: 3,
    explanation: "In C, `malloc()`, `calloc()`, and `realloc()` are all used to allocate dynamic memory."
  },
  {
    id: 4,
    difficulty: "easy",
    question: "What is the purpose of the `alt` attribute in an HTML `<img>` tag?",
    options: ["To provide an alternative text for the image", "To specify the image's URL", "To set the image's width and height", "To add a border to the image"],
    correct: 0,
    explanation: "The `alt` attribute provides an alternative text for an image, which is displayed if the image cannot be loaded. It is also used by screen readers to describe the image to visually impaired users."
  },
  {
    id: 5,
    difficulty: "easy",
    question: "Which of the following is not a valid CSS selector?",
    options: ["#my-id", ".my-class", "my-tag", "tag[attribute=value]"],
    correct: 2,
    explanation: "In CSS, `my-tag` is not a valid selector. Selectors can be based on IDs, classes, tags, attributes, and more, but `my-tag` does not follow the correct syntax for any of these."
  },
  {
    id: 6,
    difficulty: "easy",
    question: "What is the difference between `==` and `===` in JavaScript?",
    options: ["`==` compares values, while `===` compares both values and types", "`===` compares values, while `==` compares both values and types", "There is no difference", "Both are used for assignment"],
    correct: 0,
    explanation: "In JavaScript, `==` is the equality operator, which compares the values of two variables after performing type conversion if necessary. `===` is the strict equality operator, which compares both the values and the types of two variables."
  },
  {
    id: 7,
    difficulty: "easy",
    question: "Which of the following is not a primitive data type in JavaScript?",
    options: ["string", "number", "boolean", "object"],
    correct: 3,
    explanation: "In JavaScript, there are six primitive data types: string, number, boolean, null, undefined, and symbol. Object is a non-primitive data type."
  },
  {
    id: 8,
    difficulty: "easy",
    question: "What is the purpose of the `git clone` command?",
    options: ["To create a new branch", "To create a copy of a remote repository", "To commit changes to a repository", "To push changes to a remote repository"],
    correct: 1,
    explanation: "The `git clone` command is used to create a local copy of a remote Git repository."
  },
  {
    id: 9,
    difficulty: "easy",
    question: "Which of the following is not a valid HTTP method?",
    options: ["GET", "POST", "DELETE", "UPDATE"],
    correct: 3,
    explanation: "The most common HTTP methods are GET, POST, PUT, DELETE, and PATCH. UPDATE is not a valid HTTP method."
  },
  {
    id: 10,
    difficulty: "easy",
    question: "What is the purpose of a constructor in a class?",
    options: ["To create a new instance of the class", "To destroy an instance of the class", "To update the properties of an instance of the class", "To perform some action when an instance of the class is created"],
    correct: 3,
    explanation: "A constructor is a special method that is called when a new instance of a class is created. It is typically used to initialize the properties of the instance."
  },
  // Medium Questions
  {
    id: 11,
    difficulty: "medium",
    question: "What is the output of the following code snippet?\n```c\n#include <stdio.h>\n\nint main() {\n  int i = 5;\n  printf(\"%d %d %d\", i++, i, ++i);\n  return 0;\n}\n```",
    options: ["5 6 7", "7 6 5", "5 5 6", "6 6 7"],
    correct: 1,
    explanation: "The output of this code snippet is `7 6 5`. This is because the arguments to a function are evaluated from right to left. So, `++i` is evaluated first, which increments `i` to 6 and then returns 6. Then, `i` is evaluated, which is 6. Finally, `i++` is evaluated, which returns the current value of `i` (6) and then increments `i` to 7."
  },
  {
    id: 12,
    difficulty: "medium",
    question: "Which scheduling algorithm can cause starvation?",
    options: ["First-Come, First-Served (FCFS)", "Shortest Job First (SJF)", "Round Robin", "Priority Scheduling"],
    correct: 3,
    explanation: "Priority scheduling can cause starvation because a low-priority process may never get to run if there are always higher-priority processes in the ready queue."
  },
  {
    id: 13,
    difficulty: "medium",
    question: "What is the difference between DELETE and TRUNCATE in SQL?",
    options: ["DELETE is a DDL command, while TRUNCATE is a DML command", "DELETE removes all rows from a table, while TRUNCATE removes only some rows", "DELETE is faster than TRUNCATE", "DELETE is a DML command that removes rows one by one and can be rolled back, while TRUNCATE is a DDL command that removes all rows at once and cannot be rolled back"],
    correct: 3,
    explanation: "In SQL, `DELETE` is a DML command that removes rows from a table one by one. It can be rolled back, and it fires triggers. `TRUNCATE` is a DDL command that removes all rows from a table at once. It is faster than `DELETE` and cannot be rolled back."
  },
  {
    id: 14,
    difficulty: "medium",
    question: "What is the purpose of the `super` keyword in object-oriented programming?",
    options: ["To call a method of the superclass", "To create a new instance of the superclass", "To access a property of the superclass", "All of the above"],
    correct: 3,
    explanation: "The `super` keyword is used in object-oriented programming to call a method of the superclass, create a new instance of the superclass, and access a property of the superclass."
  },
  {
    id: 15,
    difficulty: "medium",
    question: "What is the difference between a process and a thread?",
    options: ["A process is a program in execution, while a thread is a lightweight process that can run in parallel with other threads in the same process", "A thread is a program in execution, while a process is a lightweight thread that can run in parallel with other processes in the same program", "There is no difference", "Both are used for the same purpose"],
    correct: 0,
    explanation: "A process is a program in execution, and it has its own memory space. A thread is a lightweight process that can run in parallel with other threads in the same process. Threads share the same memory space, which makes them more efficient than processes."
  },
  {
    id: 16,
    difficulty: "medium",
    question: "What is the Big-O notation for the time complexity of the following function?\n```python\ndef my_func(n):\n  for i in range(n):\n    for j in range(n):\n      print(i, j)\n```",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    correct: 1,
    explanation: "The time complexity of this function is O(n^2) because it has two nested loops that each iterate `n` times."
  },
  {
    id: 17,
    difficulty: "medium",
    question: "What is the purpose of the `finally` block in a `try-catch-finally` statement?",
    options: ["To execute code that should always be executed, regardless of whether an exception is thrown", "To catch and handle exceptions", "To throw an exception", "To specify the type of exception to be caught"],
    correct: 0,
    explanation: "The `finally` block in a `try-catch-finally` statement is used to execute code that should always be executed, regardless of whether an exception is thrown. This is useful for releasing resources, such as closing files or database connections."
  },
  {
    id: 18,
    difficulty: "medium",
    question: "What is the difference between a primary key and a unique key in a database?",
    options: ["A primary key can have duplicate values, while a unique key cannot", "A primary key cannot have null values, while a unique key can", "A primary key is used to uniquely identify a row in a table, while a unique key is used to enforce the uniqueness of a column or a set of columns", "All of the above"],
    correct: 3,
    explanation: "A primary key is a special type of unique key that is used to uniquely identify a row in a table. It cannot have null values, and a table can have only one primary key. A unique key is used to enforce the uniqueness of a column or a set of columns. It can have null values, and a table can have multiple unique keys."
  },
  {
    id: 19,
    difficulty: "medium",
    question: "What is the purpose of the `this` keyword in JavaScript?",
    options: ["To refer to the current object", "To refer to the global object", "To refer to the parent object", "To refer to the child object"],
    correct: 0,
    explanation: "The `this` keyword in JavaScript refers to the current object. The value of `this` is determined by how a function is called."
  },
  {
    id: 20,
    difficulty: "medium",
    question: "What is the difference between a `let` and a `const` in JavaScript?",
    options: ["`let` is used to declare variables that can be reassigned, while `const` is used to declare variables that cannot be reassigned", "`const` is used to declare variables that can be reassigned, while `let` is used to declare variables that cannot be reassigned", "There is no difference", "Both are used for the same purpose"],
    correct: 0,
    explanation: "In JavaScript, `let` and `const` are both used to declare variables. The difference is that `let` allows you to reassign the value of a variable, while `const` does not. However, it is important to note that `const` does not make an object immutable. You can still change the properties of an object that is declared with `const`."
  },
  // Hard Questions
  {
    id: 21,
    difficulty: "hard",
    question: "Design an algorithm to detect a cycle in a directed graph. What's its complexity?",
    options: ["Using Depth First Search (DFS) with a time complexity of O(V + E)", "Using Breadth First Search (BFS) with a time complexity of O(V + E)", "Using Dijkstra's algorithm with a time complexity of O(E log V)", "Using Bellman-Ford algorithm with a time complexity of O(VE)"],
    correct: 0,
    explanation: "A cycle in a directed graph can be detected using Depth First Search (DFS). The time complexity of this algorithm is O(V + E), where V is the number of vertices and E is the number of edges."
  },
  {
    id: 22,
    difficulty: "hard",
    question: "Analyze the time complexity of the following recursive function:\n```python\ndef my_func(n):\n  if n <= 1:\n    return 1\n  return my_func(n - 1) + my_func(n - 1)\n```",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(2^n)"],
    correct: 3,
    explanation: "The time complexity of this recursive function is O(2^n) because it makes two recursive calls for each input `n`. This results in an exponential growth of the number of function calls."
  },
  {
    id: 23,
    difficulty: "hard",
    question: "Which normal form eliminates transitive dependencies?",
    options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
    correct: 2,
    explanation: "Third Normal Form (3NF) eliminates transitive dependencies. A table is in 3NF if it is in 2NF and all of its non-key attributes are not transitively dependent on the primary key."
  },
  {
    id: 24,
    difficulty: "hard",
    question: "What is the purpose of the `volatile` keyword in Java?",
    options: ["To indicate that a variable's value may be changed by multiple threads simultaneously", "To make a variable's value constant", "To make a variable's value accessible only to the current thread", "To make a variable's value accessible only to the main thread"],
    correct: 0,
    explanation: "The `volatile` keyword in Java is used to indicate that a variable's value may be changed by multiple threads simultaneously. This ensures that the value of the variable is always read from and written to main memory, rather than from a thread's local cache."
  },
  {
    id: 25,
    difficulty: "hard",
    question: "What is the difference between a thread and a coroutine?",
    options: ["Threads are managed by the operating system, while coroutines are managed by the application", "Coroutines are more lightweight than threads", "Coroutines can be used to implement cooperative multitasking, while threads can be used to implement preemptive multitasking", "All of the above"],
    correct: 3,
    explanation: "Threads and coroutines are both used for concurrency, but they have some key differences. Threads are managed by the operating system, while coroutines are managed by the application. Coroutines are more lightweight than threads, and they can be used to implement cooperative multitasking, while threads can be used to implement preemptive multitasking."
  },
  {
    id: 26,
    difficulty: "hard",
    question: "What is the purpose of the `indexedDB` API in JavaScript?",
    options: ["To store large amounts of structured data on the client-side", "To make asynchronous HTTP requests", "To manipulate the DOM", "To draw graphics on a canvas"],
    correct: 0,
    explanation: "The `indexedDB` API in JavaScript is a low-level API for client-side storage of large amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data."
  },
  {
    id: 27,
    difficulty: "hard",
    question: "What is the difference between a Promise and an Observable in JavaScript?",
    options: ["A Promise can only emit one value, while an Observable can emit multiple values over time", "A Promise is not cancellable, while an Observable is cancellable", "A Promise is always asynchronous, while an Observable can be synchronous or asynchronous", "All of the above"],
    correct: 3,
    explanation: "Promises and Observables are both used for handling asynchronous operations in JavaScript, but they have some key differences. A Promise can only emit one value, while an Observable can emit multiple values over time. A Promise is not cancellable, while an Observable is cancellable. A Promise is always asynchronous, while an Observable can be synchronous or asynchronous."
  },
  {
    id: 28,
    difficulty: "hard",
    question: "What is the purpose of the `bind()` method in JavaScript?",
    options: ["To create a new function that, when called, has its `this` keyword set to a specific value", "To call a function with a specific `this` value and arguments", "To apply a function to a list of arguments", "To create a new function that is a copy of an existing function"],
    correct: 0,
    explanation: "The `bind()` method in JavaScript is used to create a new function that, when called, has its `this` keyword set to a specific value. This is useful for creating functions that can be passed as callbacks to other functions."
  },
  {
    id: 29,
    difficulty: "hard",
    question: "What is the difference between a `Map` and a `WeakMap` in JavaScript?",
    options: ["A `Map` can have any type of type, while a `WeakMap` can only have objects as keys", "A `Map` holds strong references to its keys, while a `WeakMap` holds weak references to its keys", "A `Map` is iterable, while a `WeakMap` is not iterable", "All of the above"],
    correct: 3,
    explanation: "Maps and WeakMaps are both used for storing key-value pairs in JavaScript, but they have some key differences. A `Map` can have any type of key, while a `WeakMap` can only have objects as keys. A `Map` holds strong references to its keys, while a `WeakMap` holds weak references to its keys. This means that if an object is used as a key in a `WeakMap` and there are no other references to that object, it can be garbage collected. A `Map` is iterable, while a `WeakMap` is not iterable."
  },
  {
    id: 30,
    difficulty: "hard",
    question: "What is the purpose of the `Proxy` object in JavaScript?",
    options: ["To create a proxy for another object, which can intercept and redefine fundamental operations for that object", "To create a new object that is a copy of an existing object", "To create a new object that inherits from an existing object", "To create a new object that is a combination of two or more existing objects"],
    correct: 0,
    explanation: "The `Proxy` object in JavaScript is used to create a proxy for another object, which can intercept and redefine fundamental operations for that object. This can be used for a variety of purposes, such as logging, validation, and security."
  }
];

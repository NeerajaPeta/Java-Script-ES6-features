# Java-Script-ES6-features
In ES5, we were able to declare variables using var only. But in ES6, we have three ways to declare variables in JavaScript: var, let and const. Here, we will explore the what, why, and how of var, let and const with examples.
var:
Scope of var is global or function level. Variable declared within a function has the function level scope otherwise global scope.
Can be re-declared multiple times using var key word and same variable name.
Value of variable declared using var can be updated anywhere within the scope.
let:
Scope of let is block level. Here block is confined to the curly braces ({ and } like function, if or for blocks etc.).
Variables declared within curly braces can not be accessed from outside the respective scopes.
Can not be re-declared multiple times using let keyword and same variable name.
Value of variables declared using let can also be updated anywhere within the scope.
const:
Scope of const is same as let, block level. Here block is confined to the curly braces ({ and }).
Variables declared within curly braces can not be accessed from outside the respective scopes.
Can not be re-declared multiple times using const keyword and same variable name.
Value can not be updated once value is assigned to a const. But properties can be updated.

"use strict";
const n = null;
const n1 = null;
function foo(values) {
    return values.toUpperCase();
    // остальная логика
}
// foo(null); // Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')

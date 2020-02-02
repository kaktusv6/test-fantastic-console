"use strict";

const console = require('fantastic-console');

function pow(val, power) {
    if (power < 0) {
        return 0;
    }

    if (power === 0) {
        return 1;
    }

    for (let i = 1; i < power; i++) {
        val *= val;
    }
    return val;
}

let val = 2;
let power = 2;
console.fl('index.js', 'pow', 'val', val);
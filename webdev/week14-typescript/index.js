"use strict";
function delayedCall(anotherFunction) {
    setTimeout(anotherFunction, 1000);
}
function delayedCall1(anotherFunction) {
    setTimeout(anotherFunction, 1000);
}
function log() {
    console.log("Hi There!");
    return 1;
}
function log1() {
    console.log("Hi There!");
}
delayedCall(log);
delayedCall1(log1);

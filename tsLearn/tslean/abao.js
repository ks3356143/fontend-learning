"use strict";
function invokeCallback(callback) {
    try {
        if (typeof callback === "function") {
            callback();
        }
    }
    catch (err) {
        console.log(err);
    }
}
invokeCallback(1);

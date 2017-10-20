'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _materializeDirective = require('./materialize-directive');

Object.defineProperty(exports, 'MaterializeDirective', {
    enumerable: true,
    get: function get() {
        return _materializeDirective.MaterializeDirective;
    }
});

var _materializeModule = require('./materialize-module');

Object.defineProperty(exports, 'MaterializeModule', {
    enumerable: true,
    get: function get() {
        return _materializeModule.MaterializeModule;
    }
});
exports.toast = toast;

if (typeof window !== "undefined" && !("Materialize" in window)) {
    throw new Error("Couldn't find Materialize object on window. It is created by the materialize-css library. Please import materialize-css before importing angular2-materialize.");
}
if (typeof window !== "undefined" &&  !("Waves" in window)) {
    throw new Error("Couldn't find Waves object on window. It is supposed to be created by the materialize-css library. Please import materialize-css before importing angular2-materialize.");
}
if(typeof Waves !== "undefined" )
    Waves.displayEffect();
/**
 * @param {...?} args
 * @return {?}
 */
function toast() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    Materialize.toast.apply(Materialize, args);
}
// polyfill remove any elem in DOM - https://github.com/InfomediaLtd/angular2-materialize/issues/377 (IE)
if (typeof Element !== "undefined" && !Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
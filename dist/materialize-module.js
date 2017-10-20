'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MaterializeModule = undefined;

var _core = require('@angular/core');

var _common = require('@angular/common');

var _materializeDirective = require('./materialize-directive');

var MaterializeModule = function () {
    function MaterializeModule() {}
    /**
     * @return {?}
     */
    MaterializeModule.forRoot = function () {
        return {
            ngModule: MaterializeModule
        };
    };
    return MaterializeModule;
}();
exports.MaterializeModule = MaterializeModule;

MaterializeModule.decorators = [{ type: _core.NgModule, args: [{
        declarations: [_materializeDirective.MaterializeDirective],
        imports: [_common.CommonModule],
        exports: [_materializeDirective.MaterializeDirective]
    }] }];
/**
 * @nocollapse
 */
MaterializeModule.ctorParameters = function () {
    return [];
};
function MaterializeModule_tsickle_Closure_declarations() {
    /** @type {?} */
    MaterializeModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MaterializeModule.ctorParameters;
}
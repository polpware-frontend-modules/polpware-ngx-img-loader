(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-img-loader', ['exports'], factory) :
    (factory((global.polpware = global.polpware || {}, global.polpware['ngx-img-loader'] = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?=} imageBound
     * @return {?}
     */
    function lazyLoadImageDecorator(imageBound) {
        if (imageBound === void 0) {
            imageBound = 180;
        }
        return function (constructor) {
            return /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @param {?} evt
                 * @return {?}
                 */
                class_1.prototype.onImageLoaded = /**
                 * @param {?} evt
                 * @return {?}
                 */
                    function (evt) {
                        /** @type {?} */
                        var elem = evt.element.nativeElement;
                        if (elem.naturalHeight < imageBound && elem.naturalWidth < imageBound) {
                            return;
                        }
                        if (elem.naturalHeight > elem.naturalWidth) {
                            elem.height = imageBound;
                            elem.width = elem.naturalWidth * imageBound / elem.naturalHeight;
                        }
                        else {
                            elem.width = imageBound;
                            elem.height = elem.naturalHeight * imageBound / elem.naturalWidth;
                        }
                    };
                return class_1;
            }(constructor));
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.lazyLoadImageDecorator = lazyLoadImageDecorator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=polpware-ngx-img-loader.umd.js.map
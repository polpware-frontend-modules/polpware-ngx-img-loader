import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} imageBound
 * @return {?}
 */
function lazyLoadImageDecorator(imageBound) {
    if (imageBound === void 0) { imageBound = 180; }
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

export { lazyLoadImageDecorator };

//# sourceMappingURL=polpware-ngx-img-loader.js.map
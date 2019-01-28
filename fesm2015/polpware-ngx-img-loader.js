/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} imageBound
 * @return {?}
 */
function lazyLoadImageDecorator(imageBound = 180) {
    return function (constructor) {
        return class extends constructor {
            /**
             * @param {?} evt
             * @return {?}
             */
            onImageLoaded(evt) {
                /** @type {?} */
                const elem = evt.element.nativeElement;
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
            }
        };
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
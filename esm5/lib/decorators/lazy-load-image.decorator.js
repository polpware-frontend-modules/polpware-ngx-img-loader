/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?=} imageBound
 * @return {?}
 */
export function lazyLoadImageDecorator(imageBound) {
    if (imageBound === void 0) { imageBound = 180; }
    return function (constructor) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLWltYWdlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtaW1nLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzL2xhenktbG9hZC1pbWFnZS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFVBQXdCO0lBQXhCLDJCQUFBLEVBQUEsZ0JBQXdCO0lBQzNELE9BQU8sVUFBaUQsV0FBYztRQUNsRTtZQUFxQixtQ0FBVztZQUF6Qjs7WUFnQlAsQ0FBQzs7Ozs7WUFmVSwrQkFBYTs7OztZQUFwQixVQUFxQixHQUFHOztvQkFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhO2dCQUV0QyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxFQUFFO29CQUNuRSxPQUFPO2lCQUNWO2dCQUVELElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNwRTtxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2lCQUNyRTtZQUNMLENBQUM7WUFDTCxjQUFDO1FBQUQsQ0FBQyxBQWhCTSxDQUFjLFdBQVcsR0FnQjlCO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsYXp5TG9hZEltYWdlRGVjb3JhdG9yKGltYWdlQm91bmQ6IG51bWJlciA9IDE4MCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiB7fSB9Pihjb25zdHJ1Y3RvcjogVCkge1xyXG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcclxuICAgICAgICAgICAgcHVibGljIG9uSW1hZ2VMb2FkZWQoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gZXZ0LmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5uYXR1cmFsSGVpZ2h0IDwgaW1hZ2VCb3VuZCAmJiBlbGVtLm5hdHVyYWxXaWR0aCA8IGltYWdlQm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0ubmF0dXJhbEhlaWdodCA+IGVsZW0ubmF0dXJhbFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5oZWlnaHQgPSBpbWFnZUJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ud2lkdGggPSBlbGVtLm5hdHVyYWxXaWR0aCAqIGltYWdlQm91bmQgLyBlbGVtLm5hdHVyYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ud2lkdGggPSBpbWFnZUJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaGVpZ2h0ID0gZWxlbS5uYXR1cmFsSGVpZ2h0ICogaW1hZ2VCb3VuZCAvIGVsZW0ubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxuIl19
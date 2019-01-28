/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} imageBound
 * @return {?}
 */
export function lazyLoadImageDecorator(imageBound = 180) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLWltYWdlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtaW1nLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzL2xhenktbG9hZC1pbWFnZS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsc0JBQXNCLENBQUMsYUFBcUIsR0FBRztJQUMzRCxPQUFPLFVBQWlELFdBQWM7UUFDbEUsT0FBTyxLQUFNLFNBQVEsV0FBVzs7Ozs7WUFDckIsYUFBYSxDQUFDLEdBQUc7O3NCQUNkLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBRXRDLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLEVBQUU7b0JBQ25FLE9BQU87aUJBQ1Y7Z0JBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO29CQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7aUJBQ3BFO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO29CQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7aUJBQ3JFO1lBQ0wsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VEZWNvcmF0b3IoaW1hZ2VCb3VuZDogbnVtYmVyID0gMTgwKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gPFQgZXh0ZW5kcyB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xyXG4gICAgICAgICAgICBwdWJsaWMgb25JbWFnZUxvYWRlZChldnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBldnQuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLm5hdHVyYWxIZWlnaHQgPCBpbWFnZUJvdW5kICYmIGVsZW0ubmF0dXJhbFdpZHRoIDwgaW1hZ2VCb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5uYXR1cmFsSGVpZ2h0ID4gZWxlbS5uYXR1cmFsV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLmhlaWdodCA9IGltYWdlQm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS53aWR0aCA9IGVsZW0ubmF0dXJhbFdpZHRoICogaW1hZ2VCb3VuZCAvIGVsZW0ubmF0dXJhbEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS53aWR0aCA9IGltYWdlQm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5oZWlnaHQgPSBlbGVtLm5hdHVyYWxIZWlnaHQgKiBpbWFnZUJvdW5kIC8gZWxlbS5uYXR1cmFsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG4iXX0=
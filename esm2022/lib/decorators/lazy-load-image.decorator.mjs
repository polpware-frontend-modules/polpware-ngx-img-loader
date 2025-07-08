export function lazyLoadImageDecorator(imageBound = 180) {
    return function (constructor) {
        return class extends constructor {
            onImageLoaded(evt) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLWltYWdlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1pbWctbG9hZGVyL3NyYy9saWIvZGVjb3JhdG9ycy9sYXp5LWxvYWQtaW1hZ2UuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxhQUFxQixHQUFHO0lBQzNELE9BQU8sVUFBaUQsV0FBYztRQUNsRSxPQUFPLEtBQU0sU0FBUSxXQUFXO1lBQ3JCLGFBQWEsQ0FBQyxHQUFHO2dCQUNwQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztnQkFFdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsRUFBRTtvQkFDbkUsT0FBTztpQkFDVjtnQkFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEU7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDckU7WUFDTCxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbGF6eUxvYWRJbWFnZURlY29yYXRvcihpbWFnZUJvdW5kOiBudW1iZXIgPSAxODApIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIHsgbmV3KC4uLmFyZ3M6IGFueVtdKToge30gfT4oY29uc3RydWN0b3I6IFQpIHtcclxuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBvbkltYWdlTG9hZGVkKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IGV2dC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0ubmF0dXJhbEhlaWdodCA8IGltYWdlQm91bmQgJiYgZWxlbS5uYXR1cmFsV2lkdGggPCBpbWFnZUJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLm5hdHVyYWxIZWlnaHQgPiBlbGVtLm5hdHVyYWxXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaGVpZ2h0ID0gaW1hZ2VCb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLndpZHRoID0gZWxlbS5uYXR1cmFsV2lkdGggKiBpbWFnZUJvdW5kIC8gZWxlbS5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLndpZHRoID0gaW1hZ2VCb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLmhlaWdodCA9IGVsZW0ubmF0dXJhbEhlaWdodCAqIGltYWdlQm91bmQgLyBlbGVtLm5hdHVyYWxXaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==
function lazyLoadImageDecorator(imageBound = 180) {
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

/*
 * Public API Surface of ngx-img-loader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { lazyLoadImageDecorator };
//# sourceMappingURL=polpware-ngx-img-loader.mjs.map

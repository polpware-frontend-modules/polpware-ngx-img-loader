export declare function lazyLoadImageDecorator(imageBound?: number): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {
        onImageLoaded(evt: any): void;
    };
} & T;

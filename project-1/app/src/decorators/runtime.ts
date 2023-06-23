export function runtime(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let divider = 1;
      let unit = "miliseconds";
      if (inSeconds) {
        divider = 1000;
        unit = "seconds";
      }
      const t1 = performance.now();
      const result = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(
        `Runtime of ${propertyKey} is ${(t2 - t1) / divider} ${unit}.`
      );
      return result;
    };
    return descriptor;
  };
}

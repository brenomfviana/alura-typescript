export function runtime(inSeconds = false) {
  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
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

export function runtime() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const result = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`Runtime of ${propertyKey} is ${(t2 - t1) / 1000} seconds.`);
      return result;
    };
    return descriptor;
  };
}

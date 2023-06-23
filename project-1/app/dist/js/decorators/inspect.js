export function inspect(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`--- Method ${propertyKey}`);
    console.log(`------ params: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`------ return: ${JSON.stringify(result)}`);
    return result;
  };
  return descriptor;
}

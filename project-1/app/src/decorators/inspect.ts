export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`--- Method ${propertyKey}`);
    console.log(`------ params: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`------ return: ${JSON.stringify(result)}`);
    return result;
  };
  return descriptor;
}

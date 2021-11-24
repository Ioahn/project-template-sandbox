export const memo = <T>(fn: (...args: any[]) => T): ((...args: any[]) => T) => {
  let cache: T;

  return (...args) => {
    if (cache) return cache;

    cache = fn(...args);

    return cache;
  };
};

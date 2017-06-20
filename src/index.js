// @flow
/*
 * When we compose functions, we want to maintain the identity
 * to prevent react from re-rendering
 */
const composeMap : WeakMap<Function, WeakMap<Function, Function>> = new WeakMap();
export function compose<T1, T2, T3>(
  fn1: (arg: T1) => T2,
  fn2: (arg: T2) => T3
): (arg: T1) => T3 {
  const firstLevelCacheHit = composeMap.get(fn1);
  if (firstLevelCacheHit) {
    const secondLevelCacheHit = firstLevelCacheHit.get(fn2);
    if (secondLevelCacheHit) {
      return secondLevelCacheHit;
    }
    const composedFn = (arg) => fn2(fn1(arg));
    firstLevelCacheHit.set(fn2, composedFn);
    return composedFn;
  }

  const composedFn = (arg) => fn2(fn1(arg));
  const secondLevelCache = new WeakMap();
  secondLevelCache.set(fn2, composedFn);
  composeMap.set(fn1, secondLevelCache);
  return composedFn;
}

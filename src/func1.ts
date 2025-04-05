/**
 * Adds two numbers together async.
 *
 * @example
 *
 * ```js
 * add1(1, 2); // 3
 * ```
 */
export const add1 = async (a: number, b: number) => {
  await Promise.resolve(a + b);
}

// /**
//  * Adds two numbers together async.
//  *
//  * @example
//  *
//  * ```js
//  * add1(1, 2); // 3
//  * ```
//  */
// const add2 = async (a: number, b: number) => {
//   await Promise.resolve(a + b);
// }

/**
 * Adds two numbers together async.
 *
 * @example
 *
 * ```js
 * add3(1, 2); // 3
 * ```
 */
export const add3 = (a: number, b: number) => {
  return a + b;
}

/**
 * Adds two numbers together async.
 *
 * @example
 *
 * ```js
 * add4(1, 2); // 3
 * ```
 */
const add4 = (a: number, b: number) => {
  return a + b;
}

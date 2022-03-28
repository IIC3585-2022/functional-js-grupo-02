/**
 * @template T
 * @callback Effect
 * @returns {T}
 */

/**
 * @template T
 */
export class IOMonad {
  /** @type {Effect<T>} */
  #effect;

  /**
   * @param {Effect<T>} effect
   */
  constructor(effect) {
    this.#effect = effect;
  }

  /**
   * @template A
   * @param {A} value
   * @returns {IOMonad<A>}
   */
  static of(value) {
    return new IOMonad(() => value);
  }

  /**
   * @template A
   * @param {(value: T) => A} f
   * @returns {IOMonad<A>}
   */
  map(f) {
    return new IOMonad(() => f(this.eval()));
  }

  /**
   * @template A
   * @param {(value: T) => IOMonad<A>} f
   * @returns {IOMonad<A>}
   */
  chain(f) {
    return new IOMonad(() => f(this.eval()).eval());
  }

  /**
   * @returns {T}
   */
  eval() {
    return this.#effect();
  }
}

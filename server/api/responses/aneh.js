/**
 * aneh.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.aneh();
 *     // -or-
 *     return res.aneh(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'aneh'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function aneh(optionalData) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  return res.json({ status: 'gagal', msg: optionalData });
};

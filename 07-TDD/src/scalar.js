/**
 * Created by Ryan on 23.11.2015.
 */
module.exports = function(n) {
  if (typeof n === "number") {
    return n
  }
  if (typeof n === "string")
  {
    return n
  }
  if (typeof n === 'boolean')
  {
    return n
  }
  throw new Error ('Only accepts scalar inputs')
}

/**
 * Created by Ryan on 23.11.2015.
 */
module.exports = function(n) {
  if (n instanceof Number) {
    return n
  }
  if (n instanceof String)
  {
    return n
  }
  if (n instanceof Boolean)
  {
    return n
  }
  throw new Error ('Only accepts scalar inputs')
}

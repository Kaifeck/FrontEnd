/**
 * Created by Ryan on 30.11.2015.
 */
module.exports = function n (array, whatToDo) {
  if(whatToDo === 'add')
  {
    array.push(5)
    return array
  }
  if(whatToDo === 'remove')
  {
    return array.shift()
  }
  throw new Error ('Needs correct (arrayToChange, whatToDo) parameters!')
}

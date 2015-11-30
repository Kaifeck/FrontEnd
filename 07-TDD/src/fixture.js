/**
 * Created by Ryan on 30.11.2015.
 */
module.exports.changeTitle = function changeTitle (artist, newTitle) {
  return artist.title = newTitle
}

module.exports.changeArtist = function changeArtist (artist, newName) {
  return artist.name = newName
}

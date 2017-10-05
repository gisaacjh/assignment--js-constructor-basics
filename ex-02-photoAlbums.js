/**
 * Write two functions:
 *
 *     [1]. PhotoAlbum
 *     [2]. Photo
 *
 * `PhotoAlbum` should contain the next structure:
 *
 *     [1]. a function called `addPicture(photo)`: it should save the photo (input) in an Array
 *     [2]. a function called `showPictures(filter)`: it should look for the filter specified and
 *          save each "Photo Title" in a new array, finally return that array.
 *          (don't forget to iterate)
 *
 * `Photo` should contain the next two functions:
 *     When creating the instance, should accept one param, the photo name
 *
 *     [1]. `tag(nameTag)`: save the nameTag in a collection (Array)
 *     [2]. `showTags`: return all tags from the current photo in a string
 */
 function PhotoAlbum() {
     this.photos = []
 }

 PhotoAlbum.prototype.addPicture = function (photo) {
   this.photos.push(photo);
 };

 PhotoAlbum.prototype.showPictures = function (filter) {
   var photoTitle = []
   for (i = 0; i < this.photos.length; i++) {
     var photo = this.photos[i]
     if (photo.tags.indexOf(filter) !== -1) {
       photoTitle.push(photo.name)
     }
   }
   return photoTitle;
 };

 function Photo(name) {
   this.tags = []
   this.name = name
 }

 Photo.prototype.tag = function (nameTag) {
   this.tags.push(nameTag)
 };

 Photo.prototype.showTags = function () {
   return this.tags.join(', ')
 };


 //--------------------
 var album = new PhotoAlbum();
 var p1, p2, p3;

 p1 = new Photo("Paris Trip 1");
 p1.tag("Jimmy");
 p1.tag("Jane");
 p1.tag("Jeff");

 album.addPicture(p1);

 p2 = new Photo("Look the Eiffel");
 p2.tag("Jimmy");
 p2.tag("Max");
 album.addPicture(p2);

 p3 = new Photo("OMG it's so high");
 p3.tag("Jimmy");
 p3.tag("Jane");

 album.addPicture(p3);










console.log("[1] Check that `PhotoAlbum` is a function ")
console.assert( typeof PhotoAlbum === 'function' )
console.log("[1] ==================================================")
console.log()

console.log("[2] Check that `album` is an instance of `PhotoAlbum` ")
console.assert( album instanceof PhotoAlbum )
console.log("[2] ==================================================")
console.log()

console.log("[3] Check that `PhotoAlbum.addPicture` is a function ")
console.assert( typeof album.addPicture === 'function' )
console.log("[3] ==================================================")
console.log()

console.log("[4] Check that `PhotoAlbum.showPictures` is a function ")
console.assert( typeof album.showPictures === 'function' )
console.log("[4] ==================================================")
console.log()

console.log("[5] Check that `Photo` is a function ")
console.assert( typeof Photo === 'function' )
console.log("[5] ==================================================")
console.log()

console.log("[6] Check that `p1, p2, p3` are instances of `Photo` ")
console.assert( p1 instanceof Photo )
console.assert( p2 instanceof Photo )
console.assert( p3 instanceof Photo )
console.log("[6] ==================================================")
console.log()

console.log("[7] Check that `Photo.tag` is a function ")
console.assert( typeof album.showPictures === 'function' )
console.log("[7] ==================================================")
console.log()

console.log("[8] Check that `Photo.showTags` is a function ")
console.assert( typeof album.showPictures === 'function' )
console.log("[8] ==================================================")
console.log()

console.log("[9] Tags from p1 should be Jimmy, Jane, Jeff ")
console.assert( p1.showTags() === "Jimmy, Jane, Jeff" )
console.log("[9] ==================================================")
console.log()

console.log("[10] Should return 3 pictures when looking for 'Jimmy' ")
console.assert( album.showPictures("Jimmy").length === 3 )
console.log("[10] =================================================")
console.log()

console.log("[11] Should return 1 picture when looking for 'Jeff' ")
console.assert( album.showPictures("Jeff").length === 1 )
console.log("[11] =================================================")
console.log()

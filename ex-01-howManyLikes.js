/**
 * Write a function called `Facebook` and shoud have two main functions:
 *
 *     [1]. howManyLikes: should return the likes number
 *     [2]. like: should increment the likes counting by one 
 */

// function Facebook() {
//   this.likes = 20;
// }

// Facebook.prototype.howManyLikes = function() {
//   return this.likes
// }

// Facebook.prototype.like = function() {
//   this.likes++;
// }


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var theFacebook = new Facebook();

console.log("[0] Check if `theFacebook` is an instance of `Facebook` ")
console.assert( theFacebook instanceof Facebook )
console.log("[0] ==================================================")
console.log()

console.log("[1] Check if `howManyLikes` is a function ")
console.assert( typeof  theFacebook.howManyLikes === 'function' )
console.log("[1] ==================================================")
console.log()

console.log("[2] Check if `like` is a function")
console.assert( typeof  theFacebook.like === 'function' )
console.log("[2] ==================================================")
console.log()

// Calling the function to increment by one
theFacebook.like()

console.log("[3] Check if the return counter is correct ")
console.assert (theFacebook.howManyLikes() === 21)
console.log("[3] ==================================================")

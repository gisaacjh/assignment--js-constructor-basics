/**
 * Write a function called `Rectangle`, it should have two main functions:
 *
 *     [1]. `area`, formula to calculate it: L x L
 *     [2]. `perimeter`: formula to calculate it: L + L + L + L
 */
 function Rectangle(ancho, largo) {
     this.ancho = ancho
     this.largo = largo
 }

  Rectangle.prototype.area = function () {
     var areas = this.ancho * this.largo
     return areas
  };

  Rectangle.prototype.perimeter = function () {
    var perimetrs = (this.largo + this.ancho) * 2
    return perimetrs
  };






var r = new Rectangle(7, 3);

console.log("[1] Check if `Rectangle` is a function")
console.assert( typeof Rectangle === 'function' )
console.log("[1] ==================================================")
console.log()

console.log("[2] Check if `r` is an instance of Rectangle")
console.assert( r instanceof Rectangle )
console.log("[2] ==================================================")
console.log()

console.log("[3] Check if `r.area()` is a function ")
console.assert( typeof r.area === 'function' )
console.log("[3] ==================================================")
console.log()

console.log("[4] Check if `r.perimeter()` is a function ")
console.assert( typeof r.perimeter === 'function' )
console.log("[4] ==================================================")
console.log()

console.log("[5] Should return 21 when asking `area()`")
console.assert( r.area() === 21 )
console.log("[5] ==================================================")
console.log()

console.log("[6] Should return 20 when asking `perimeter()`")
console.assert( r.perimeter() === 20 )
console.log("[6] ==================================================")
console.log()

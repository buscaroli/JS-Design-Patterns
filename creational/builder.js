/* The Builder Design Pattern 
 *
 * It is used to help the construction of complex objects, objects that on 
 *   creation are called with many arguments.
 * 
 * It involves the use of:
 *  - a Base class that contains the business logic
 *  - different Builder classes/objects which are responsible for constructing
 *    the object and that are responsible for defining the steps to construct 
 *    the complex objects
 *  - can have a Director class that defines methods to ensure the objects are 
 *    build by following specific steps
 * 
 * The example in this file comes from:
 * https://enmascript.com/articles/2019/03/18/building-objects-progressively-with-the-builder-pattern-in-javascript
 * 
*/


/* Example of the Builder Pattern used to implement a Menu */
class Profile {
  // Receives the Builder(s) and assigns the profiles
  constructor(builder) {
    this.menuLocation = builder.menuLocation
    this.borders = builder.borders
    this.theme = builder.theme
    this.color = builder.color
    this.backgroundColor = builder.backgroundColor
    this.menuColor = builder.menuColor
    this.font = builder.font 
  }
}

class ProfileBuilder {
  constructor () {}
  
  // We define the steps needed to build the profile of the menu
  setLocation(position) {
    this.menuLocation = position 
    return this // we return this to allow method chaining!!
  }

  setBorders(style) {
    this.borders = style 
    return this
  }

  setTheme(style) {
    this.theme = style 
    return this
  }

  setColor(color) {
    this.color = color 
    return this
  }

  setBackgroundColor(color) {
    this.backgroundColor = color
    return this
  }

  setMenuColor(color) {
    this.menuColor = color 
    return this
  }

  setFont(font) {
    this.font = font 
    return this
  }

  build() {
    return new Profile(this)
  }
}

/* TESTING */
function main() {
  let myMenu = new ProfileBuilder()
  .setLocation('top')
  .setBorders('single')
  .setTheme('light')
  .setColor('black')
  .setBackgroundColor('lightgrey')
  .setMenuColor('teal')
  .setFont('Courier')
  .build()

  console.log(myMenu)
}

main()

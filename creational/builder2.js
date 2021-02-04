/* Adding a Director class to the example in builder.js 
 *
 * The Director class allows for the creation of Default Menus.
 * 
*/

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


// NEW -------------

class ProfileDirector {
  constructor(builder) {
    this.builder = builder
  }

  // Method that can be called to implement a generic Profile.
  createDefaultProfile() {
    return this.builder
    .setLocation('fullscreen')
    .setBorders('single')
    .setTheme('light')
    .setColor('black')
    .setBackgroundColor('white')
    .setMenuColor('blue')
    .setFont('monospace')
    .build()   
  }
}

// TESTING 
function main () {
  const builder = new ProfileBuilder()
  const director = new ProfileDirector(builder)
  console.log(director.createDefaultProfile())
}

main()
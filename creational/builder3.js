/* using the Builder Pattern to implement a complex objects 
 * through two separate Builder classes. 
 *
 * We have a class called Person that contains details about a person.
 * We have personal details and details related to the person's job and
 * they are so many that we decide to keep them separate to make it easy
 * to build the object.
 * 
 *    - Base Class: Person
 *    - Builder Classes:
 *        - PersonBuilder
 *        - PersonPrivateBuilder
 *        - PersonJobBuilder
 * 
 */

class Person {
  constructor() {
    // Private details
    this.name = 'Anonymous'
    this.address = ''
    this.country = ''
    this.age = ''
    this.weight = ''
    this.height = ''
    this.sex = ''

    // Job details
    this.workplace = 'nowhere at the moment'
    this.role = 'unemployed'
    this.hasCompanyCar = 'no'
    this.hasCompanyMobile = 'no'
    this.income = 0
  }

  toString() {
    return `${this.name} is ${this.age} years old, lives in ${this.country} and works at ${this.workplace} as a ${this.role}.`
  }
}

class PersonBuilder {
  // We want to keep all of his details in PersonBuilder so they can be
  // accessed by PersonPrivateBuilder and PersonJobBuilder
  constructor(person = new Person()) {
    this.person = person
  }

  get lives() {
    return new PersonPrivateBuilder(this.person)
  }

  get works() {
    return new PersonJobBuilder(this.person)
  }

  build() {
    return this.person
  }
}

// By extending the class we make the properties of the Person class
// accessible through 'this'
class PersonPrivateBuilder extends PersonBuilder{ 
  constructor(person) {
    super(person)
  }

  who(name) {
    this.person.name = name
    return this
  }

  age(years) {
    this.person.age = years
    return this
  }

  is(sex) {
    this.person.sex = sex
    return this
  }

  atAddress(location) {
    this.person.address = location
    return this
  }

  in(country) {
    this.person.country = country
    return this
  }

  weights(kg) {
    this.person.weight = kg
    return this
  }

  isTall(cm) {
    this.person.height = cm
    return this
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person)
  }

  atCompany(company) {
    this.person.workplace = company
    return this
  }

  as(role) {
    this.person.role = role
    return this
  }

  hasCar(has) {
    this.person.hasCompanyCar = has
    return this
  }

  hasMobile(has) {
    this.person.hasCompanyMobile = has
    return this
  }

  earns(wage) {
    this.person.income = wage
    return this
  }
}

// TESTING
const pb = new PersonBuilder()
let matt = pb
  .lives.who('Matt').age(42).atAddress('13, High Street, LondonTown').in('UK').weights(65)
  .works.atCompany('Goooogle').as('seatWarmer').earns(200000).build()

console.log(matt.toString())

// --
const john = new PersonBuilder()
  .lives.who('John Smith').age(64).atAddress('1 Commercial Rd').in('ROI')
  .works.earns(15000).build()

console.log(john.toString())
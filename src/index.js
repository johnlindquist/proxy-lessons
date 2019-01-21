"use strict"

let person = {
  name: "John"
}

let handler = {
  get(target, key) {
    if (key === "name") {
      return "Mindy"
    }

    if (Reflect.has(target, key)) {
      return Reflect.get(target, key)
    }

    return "You tried to access something undefined"
  }
}

person = new Proxy(person, handler)

console.log(person.name)
console.log(person.age)

"use strict"

let person = {
  name: "John"
}

let handler = {
  set(target, key, value) {
    console.log(`${key}: ${target[key]} -> ${value}`)
    return Reflect.set(target, key, value)
  }
}

person = new Proxy(person, handler)

person.name = "Mindy"
person.name = "Ben"
console.log(person.name)

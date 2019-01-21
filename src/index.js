"use strict"

let person = {}
Object.seal(person)
Reflect.set(person, "name", "John") /*?*/

console.log(person.name)

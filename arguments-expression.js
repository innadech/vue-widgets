let fruit = 'Banana'
let localFruit = 'Orange'

let result = (42, (localFruit = fruit), 21)

console.log(result)

console.log(localFruit)

// v-on:keydown.esc=";(localFruit = fruit), (isEditing = false)"

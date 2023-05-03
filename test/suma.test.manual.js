import { suma } from '../src/suma.js'

let testTotal = 4
let testPassed = 0

console.log('-------------------------------------------------------')
console.log('Test 1.- Must return null if any params is not a number')
const resultTest1 = suma("2", 4)
if ((resultTest1 === null)) {
    console.log('\tTest 1: ✔️ PASS')
    testPassed++
} else {
    console.log(`\tTest 1: ❌ FAILS. result is ${resultTest1}`)
}
console.log('-------------------------------------------------------')

console.log('-------------------------------------------------------')
console.log('Test 2.- Must return 0 if there is no params')
const resultTest2 = suma()
if ((resultTest2 === 0)) {
    console.log('\tTest 2: ✔️ PASS')
    testPassed++
} else {
    console.log(`\tTest 2: ❌ FAILS. result is ${resultTest1}`)
}
console.log('-------------------------------------------------------')

console.log('-------------------------------------------------------')
console.log('Test 3.- The sum must be correct')
const resultTest3 = suma(3, 4)
if ((resultTest3 === 7)) {
    console.log('\tTest 3: ✔️ PASS')
    testPassed++
} else {
    console.log(`\tTest 3: ❌ FAILS. result is ${resultTest1}`)
}
console.log('-------------------------------------------------------')

console.log('-------------------------------------------------------')
console.log('Test 4.- The sum must be correct with many params')
const resultTest4 = suma(1, 2, 3, 4, 10)
if ((resultTest4 === 20)) {
    console.log('\tTest 4: ✔️ PASS')
    testPassed++
} else {
    console.log(`\tTest 4: ❌ FAILS. result is ${resultTest1}`)
}
console.log('-------------------------------------------------------')
console.log(`Total test passed: ${testPassed} of ${testTotal}`)
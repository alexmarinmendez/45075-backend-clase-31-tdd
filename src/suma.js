export const suma = (...nums) => {
    if (nums.length === 0) return 0

    // let validNumber = true
    // for (let index = 0; index < nums.length; index++) {
    //     if (typeof nums[index] !== "number") validNumber = false
    // }
    // if(!validNumber) return null
    if (nums.some(num => typeof num !== "number")) return null

    // let result = 0
    // for (let index = 0; index < nums.length; index++) {
    //     result += nums[index]
    // }
    return nums.reduce((suma, num) => suma + num)
}
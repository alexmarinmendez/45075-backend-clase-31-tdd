export const suma = (num1, num2) => {
    if (!num1 || !num2) return 0
    if (typeof num1 !== "number" || typeof num2 !== "number") return null
    const result = num1 + num2
    return result
}
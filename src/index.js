module.exports = function reverse(n) {
    const numArr = Math.abs(n).toString().split("");
    const result = numArr.reverse().join("");
    return result;
}

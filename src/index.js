module.exports = function reverse(n) {
    let arr = n.toString().split('');
    return parseInt(arr.reverse().join(''));
}
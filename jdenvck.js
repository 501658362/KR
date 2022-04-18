cookies = ''
function concatCK(array) {
    return cookies.split('&&').concat(array)
}

module.exports = {
    concatCK
};
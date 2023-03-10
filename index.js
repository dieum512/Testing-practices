const stringLength = (string) => {
    if (string.length > 10) {
        throw new Error('string has more than 10 characters');
    } else if (string.length < 1) {
        throw new Error('string has less than 1 character');
    } return string.length;
}

module.exports = stringLength;
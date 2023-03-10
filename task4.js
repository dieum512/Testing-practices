const capitalize = (string) => {
    let splitString = string[0].toUpperCase() + string.slice(1);
    return splitString;
}

module.exports = capitalize
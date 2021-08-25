const checkType = (source) => {
    return Object.prototype.toString.call(source).slice(8, -1)
}

export {
    checkType
}
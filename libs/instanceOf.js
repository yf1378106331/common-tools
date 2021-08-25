const instanceOf = (target, source) => {
    let proto = target.__proto__
    
    while(true){
        if(proto === source.prototype){
            return true
        } else if(proto === null){
            return false
        } else {
            target = target.__proto__
        }
    }
}

export {
    instanceOf
}
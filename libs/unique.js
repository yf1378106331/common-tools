import { isArray } from './isArray'

const normalUnique = (array) => {
    if(!isArray(array)) return

    let result = []
    for(let i=0; i<array.length; i++){
        if(array.indexOf(array[i])===i){
            result.push(array[i])
        }
    }
    
    return result
}

const unique = (array) =>{
    if(!isArray(array)) return

    return array.filter((el, index, self) => {
        return self.indexOf(el) === index
    })
}

const setUnique = (array) => {
    if(!isArray(array)) return

    return [...new Set(array)]
}


export {
    normalUnique,
    unique,
    setUnique
}
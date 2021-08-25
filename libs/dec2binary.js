import { Stack } from "./stack"

export const dec2binary = (num) => {
    let binaryString = ''
    let stack = new Stack()

    while(num>0){
       let remainer = num % 2
       stack.push(remainer)
       num = Math.floor(num/2)
    }

    while(!stack.isEmpty()){
        binaryString += stack.pop()
    }

    return binaryString
}
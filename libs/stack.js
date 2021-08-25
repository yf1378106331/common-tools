export class Stack{ // 函数调用栈
    constructor(){
        this.items = []
    }

    // 入栈，添加到栈顶
    push(val){
        this.items.push(val)
    }
    // 出栈，并返回栈顶元素
    pop(){
        return this.items.pop()
    }
    // 返回栈顶元素
    peek(){
        if(this.isEmpty()){ return null }
        return  this.items[this.items.lenght-1]
    }
    // 判断栈是否为空
    isEmpty(){
        return this.items.length === 0
    }
    // 返回栈长度
    size(){
        return this.items.length
    }
    toString(){
        return this.items.join('')
    }
}
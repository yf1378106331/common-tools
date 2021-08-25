export class Queue{
    constructor(){
        this.items = []
    }
    // 入队
    equeue(val){
        this.items.push(val)
    }
    // 出队
    dequeue(){
        return this.items.shift()
    }
    // 返回队头
    front(){
        if(this.isEmpty()){ return null }
        return this.items[0]
    }
    // 判断是否为空
    isEmpty(){
        return this.items.length === 0
    }
    // 返回队长度
    size(){
        return this.items.length
    }
    toString(){
        return this.items.join('')
    }
}
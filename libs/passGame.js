import { Queue } from "./queue"

export const passGame = (list, num) => {// 击鼓传花，数到某个数字的出队
    let queue = new Queue()
    list.forEach(element => {
        queue.equeue(element)
    });

    while(queue.size() > 1){
        for (let n = 1; n < num ; n++) {
            queue.equeue(queue.dequeue())
        }
        queue.dequeue()
    }

    return queue.front()
}
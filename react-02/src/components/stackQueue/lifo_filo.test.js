import {Stack, Queue} from "./lifo_filo"

test("test stack methods", () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.stack).toEqual([1])
    stack.push(2)
    expect(stack.stack).toEqual([1,2])
    expect(stack.pop()).toEqual(2)
    expect(stack.stack).toEqual([1])
    expect(stack.peek()).toEqual(1)
    expect(stack.isEmpty()).toEqual(false)
})

test("test queue methods", () => {
    const q = new Queue()
    q.enqueue(1)
    expect(q.queue).toEqual([1])
    q.enqueue(2)
    expect(q.queue).toEqual([1,2])
    expect(q.dequeue()).toEqual(1)
    expect(q.peek()).toEqual(2)
    expect(q.isEmpty()).toEqual(false)
})
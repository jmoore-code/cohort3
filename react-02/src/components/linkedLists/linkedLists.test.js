import {ListNode, LinkedList} from "./linkedLists"

test("test ListNode and show", () => {
   const n1 = new ListNode("Bob", 10)
   expect(n1.amount).toEqual(10)
   expect(n1.subject).toEqual("Bob")
   expect(n1.next).toEqual(null)
   expect(n1.show()).toEqual("Bob, 10")
    
})

test("test first node method", () => {
    const ll = new LinkedList();
    ll.position = 3
    ll.first();
    expect(ll.position).toEqual(0)
})

test("test insert method", () => {
    const ll = new LinkedList();
    ll.insert("John", 100)
    expect(ll.head.subject).toEqual("John");
    ll.insert("Bob", 20)
    expect(ll.head.subject).toEqual("Bob")
    ll.position = 1;
    ll.insert("Cam", 30)
    expect(ll.head.next.subject).toEqual("Cam")
})

test("test last node method", () => {
    const ll = new LinkedList();
    ll.last()
    expect(ll.position).toEqual(0)
    ll.insert("Bob", 20)
    ll.insert("Cam", 30)
    expect(ll.head.next.subject).toEqual("Bob")
    ll.last();
    expect(ll.position).toEqual(1)
    ll.insert("Joe", 40)
    ll.last()
    expect(ll.position).toEqual(2)

})

test("test next and previous node methods", () => {
    const ll = new LinkedList();
    ll.insert("Bob", 20)
    ll.insert("Cam", 30)
    expect(ll.position).toEqual(0)
    ll.next()
    expect(ll.position).toEqual(1)
    ll.previous()
    expect(ll.position).toEqual(0)
    ll.previous()
    expect(ll.position).toEqual(1)

})

test("test delete method", () => {
    const ll = new LinkedList();
    ll.insert("Bob", 20)
    ll.insert("Cam", 30)
    ll.next()
    expect(ll.position).toEqual(1)
    ll.delete()
    expect(ll.head.next).toEqual(null)
    expect(ll.position).toEqual(0)

})


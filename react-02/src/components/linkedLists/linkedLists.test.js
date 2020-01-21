import {ListNode, LinkedList} from "./linkedLists"

test("test ListNode and show", () => {
   const n1 = new ListNode("Bob", 10)
   expect(n1.amount).toEqual(10)
   expect(n1.subject).toEqual("Bob")
   expect(n1.next).toEqual(null)
   expect(n1.prev).toEqual(null)
   expect(n1.show()).toEqual("Bob, 10")
})


test("test insert and first method", () => {
    const ll = new LinkedList();
    ll.first()
    expect(ll.message).toEqual("There is no position to go to, please create a node.")
    ll.insert("John", 100)
    expect(ll.head.subject).toEqual("John");
    ll.insert("Bob", 20)
    expect(ll.head.next.subject).toEqual("Bob")
    expect(ll.current.prev.subject).toEqual("John")
    ll.insert("Cam", 30)
    expect(ll.head.next.next.subject).toEqual("Cam")
    expect(ll.current.prev.subject).toEqual("Bob")
    ll.first()
    expect(ll.current.subject).toEqual("John")
    ll.insert("Nate", 50)
    expect(ll.head.next.subject).toEqual("Nate")
})

test("test last node method", () => {
    const ll = new LinkedList();
    ll.last()
    expect(ll.message).toEqual("There is no position to go to, please create a node.")
    ll.insert("Bob", 20)
    ll.insert("Cam", 30)
    expect(ll.head.next.subject).toEqual("Cam")
    ll.first()
    expect(ll.current.subject).toEqual("Bob")
    ll.last();
    expect(ll.current.subject).toEqual("Cam")
 
})

test("test next and previous node methods", () => {
    const ll = new LinkedList();
    ll.next()
    expect(ll.message).toEqual("There is no position to go to, please create a node.")
    ll.insert("Bob", 20)
    ll.insert("Cam", 30)
    expect(ll.current.subject).toEqual("Cam")
    ll.next()
    expect(ll.message).toEqual("You are at the end of the list.")
    ll.first()
    ll.next()
    expect(ll.current.subject).toEqual("Cam")
    ll.previous()
    expect(ll.current.subject).toEqual("Bob")
    ll.previous()
    expect(ll.message).toEqual("You are at the start of the list.")
})

test("test delete method", () => {
    const ll = new LinkedList();
    ll.insert("Bob", 20)
    ll.insert("Cam", 30)
    expect(ll.current.subject).toEqual("Cam")
    ll.delete()
    expect(ll.head.next).toEqual(null)
    expect(ll.current.subject).toEqual("Bob")
    ll.delete()
    expect(ll.head).toEqual(null)
})



test("test sum method", () => {
    const ll = new LinkedList();
    ll.insert("John", 100)
    ll.insert("Bob", 20)
    expect(ll.sumAmount()).toEqual(120)
    ll.insert("Gary", 20)
    expect(ll.sumAmount()).toEqual(140)
})




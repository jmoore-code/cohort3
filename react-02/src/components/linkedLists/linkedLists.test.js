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
    //set up initial list with two entries
    const ll = new LinkedList();
    ll.insert("John", 100)
    expect(ll.head.subject).toEqual("John");
    ll.insert("Bob", 20)
    expect(ll.head.subject).toEqual("Bob")
    ll.position = 1;
    ll.insert("Cam", 30)
    expect(ll.head.next.subject).toEqual("Cam")


//     ll.insertLast("Bob", 20)
//     expect(ll.head).toEqual({amount: 100, subject: 'John', next: {amount: 20, subject: "Bob", next: null }})
//    // insert at the beginning
//     ll.insertAt("Cam", 50, 0)
//     expect(ll.head.subject).toEqual("Cam")
//     // insert at index 1
//     ll.insertAt("Dan", 70, 1)
//     expect(ll.head.next.subject).toEqual("Dan")
//     // stop insert at index which isn't there
//     ll.insertAt("Joe", 10, 4)
//     expect(ll.head.next.next.next.next).toEqual(null)
})
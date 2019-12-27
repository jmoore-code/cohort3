import {ListNode, LinkedList} from "./linkedPSC"

test("test ListNode and show", () => {
   const n1 = new ListNode("Bob", 10)
   expect(n1.amount).toEqual(10)
   expect(n1.subject).toEqual("Bob")
   expect(n1.next).toEqual(null)
   expect(n1.show()).toEqual("Bob, 10")
    
})

test("test insert first method", () => {
    const ll = new LinkedList();
    ll.insertFirst("John", 100)
    expect(ll.head).toEqual({ amount: 100, subject: 'John', next: null })
    ll.insertFirst("Bob", 20)
    expect(ll.head).toEqual({amount: 20, subject: "Bob", next: { amount: 100, subject: 'John', next: null } })
})

test("test get list data method", () => {
    const ll = new LinkedList();
    ll.insertFirst("John", 100)
    expect(ll.getListData()).toEqual([{amount: 100, subject: 'John', next: null}])
    ll.insertFirst("Bob", 30)
    expect(ll.getListData()).toEqual([
        {amount: 30, subject: 'Bob', next: {amount: 100, subject: 'John', next: null}},
        {amount: 100, subject: 'John', next: null}
    ])
})



test("test insert last method", () => {
    const ll = new LinkedList();
    ll.insertFirst("John", 100)
    ll.insertLast("Bob", 20)
    expect(ll.head.next).toEqual({amount: 20, subject: "Bob", next: null });
    ll.insertLast("Cam", 50)
    expect(ll.head.next.next).toEqual({amount: 50, subject: "Cam", next: null });

})


test("test insert at index method", () => {
    //set up initial list with two entries
    const ll = new LinkedList();
    ll.insertFirst("John", 100)
    ll.insertLast("Bob", 20)
    expect(ll.head).toEqual({amount: 100, subject: 'John', next: {amount: 20, subject: "Bob", next: null }})
   // insert at the beginning
    ll.insertAt("Cam", 50, 0)
    expect(ll.head.subject).toEqual("Cam")
    // insert at index 1
    ll.insertAt("Dan", 70, 1)
    expect(ll.head.next.subject).toEqual("Dan")
    // stop insert at index which isn't there
    ll.insertAt("Joe", 10, 4)
    expect(ll.head.next.next.next.next).toEqual(null)
})

test("test get at index method", () => {
    const ll = new LinkedList();
    ll.insertFirst("John", 100)
    ll.insertLast("Bob", 20)
    expect(ll.getAt(1).subject).toEqual("Bob")
    expect(ll.getAt(0).subject).toEqual("John")
    // stop get at index which doesn't exist
    ll.getAt(3)
    expect(ll.message).toEqual("That index doesn't exist")
})

test("test remove at index method", () => {
    const ll = new LinkedList();
    ll.insertFirst("John", 100)
    ll.insertLast("Bob", 20)
    ll.removeAt(1)
    expect(ll.head.next).toEqual(null)
    ll.removeAt(0)
    expect(ll.head).toEqual(null)
})

test("test clear list method", () => {
    const ll = new LinkedList();
    ll.insertFirst("John", 100);
    ll.clearList();
    expect(ll.head).toEqual(null)
})
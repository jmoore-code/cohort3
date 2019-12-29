class ListNode {
    constructor(subject, amount, next = null) {
      this.amount = amount;
      this.subject = subject;
      this.next = next;
    }
  
    show() {
        return `${this.subject}, ${this.amount}`
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
        this.position = 0;
        this.message = "";
        this.size = 0
    }

    insert(subject, amount) {
        if (this.position === 0) {
            this.head = new ListNode(subject, amount, this.head)
            this.size++
            return;
        }

        const node = new ListNode(subject, amount);
        let current, previous;
        // set current to first
        current = this.head;
        let count = 0;

        while(count < this.position) {
            previous = current; //Node before index
            count++;
            current = current.next; //Node after index
        }
        
        node.next = current;
        previous.next = node;
        this.size++
       
    }

    first() {
        this.position = 0;
    }

    last() {
        if(this.size === 0) {
            this.position = 0
            return;
        }
        this.position = this.size -1
    }

    next() {
        this.position++
    }

    previous() {
        if(this.size > 0 && this.position === 0) {
            this.position = this.size -1
            return;
        }
        this.position = this.position -1
    }

    delete() {
        let current = this.head;
        let count = 0;
        let previous;

        if(this.position === 0) {
            this.head = current.next;
        } else {
            while(count < this.position) {
                count++;
                previous = current;
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
        if(this.position === this.size) {
            this.position = this.position -1
        }
    }
}

  export {ListNode, LinkedList}
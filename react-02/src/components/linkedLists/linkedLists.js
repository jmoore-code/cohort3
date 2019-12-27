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
    }

    insert(subject, amount) {
        if (this.position === 0) {
            this.head = new ListNode(subject, amount, this.head)
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
       
    }

    first() {
        this.position = 0;
    }
}

  export {ListNode, LinkedList}
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
            this.message = `Created node at position ${this.position}`
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
        this.message = `Created node at position ${this.position}`
       
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
        if(this.size === 0) {
            this.message = "There is no position to go to, please create a node."
            return;
        }
        if( this.size > 0 && this.position === (this.size -1)) {
            this.position = 0
            return;
        }
        this.position++
    }

    previous() {
        if(this.size === 0) {
            this.message = "There is no position to go to, please create a node."
            return;
        }
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

        if(this.size === 0) {
            this.message = "There are no nodes to delete."
            return;
        }
        if(this.position === 0) {
            this.head = current.next;
            this.message = `Deleted node at position ${this.position}`
        } else {
            while(count < this.position) {
                count++;
                previous = current;
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
        this.message = `Deleted node at position ${this.position}`
        //logic to change position if at the last node
        if(this.size > 0 && this.position === this.size) {
            this.position = this.position -1
        }
    }
    
    sumAmount() {
        let current = this.head;
        let total = 0;
    
        while(current) {
            total += current.amount
            current = current.next
        }
        return total;
    }
    
        clearList() {
            this.head = null;
            this.size = 0;
        }
}



  export {ListNode, LinkedList}
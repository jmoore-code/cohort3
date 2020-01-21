class ListNode {
    constructor(subject, amount) {
      this.amount = amount;
      this.subject = subject;
      this.next = null;
      this.prev = null;
    }
  
    show() {
        return `${this.subject}, ${this.amount}`
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.message = "";
        this.size = 0;
    }

    insert(subject, value){
        let node = new ListNode(subject, value);
        if (!this.current) {
            this.head = node;
            this.tail = node;
            this.current = node;
            this.size++
            return node;
        } else if ( this.current === this.tail) {
            this.current.next = node;
            node.prev = this.current;
            this.tail = node;
            this.current = node
            node.next = null;
            this.size++
            return node;
        } else {
            node.prev = this.current;
            node.next = this.current.next;
            this.current.next = node;
            node.next.prev = node;
            this.current = node;
            this.size++
            return node;
        }
    }



    first() {
        if (!this.head) {
            this.message = "There is no position to go to, please create a node."
            return;
        }
        this.current = this.head;
        return this.head
    }

    last() {
        if(!this.tail) {
            this.message = "There is no position to go to, please create a node."
            return;
        }
        this.current = this.tail;
        return;
    }

    next() {
        if (!this.tail) {
            this.message = "There is no position to go to, please create a node."
            return;
        } else if (this.current.next === null) {
            this.message = "You are at the end of the list."
            return;
        } else {
            let nextNode = this.current.next;
            this.current = nextNode;
            return;
        }
    }

    previous() {
       if (!this.head) {
        this.message = "There is no position to go to, please create a node."
        return;
       } else if (this.current.prev === null) {
        this.message = "You are at the start of the list."
        return;
    } else {
        let prevNode = this.current.prev
        this.current = prevNode;
        return;
    }
    }

    delete() {
        if ( this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.current = null;
            this.size--
            return;
        }
        if (this.current === this.head) {
            this.head = this.current.next;
            this.head.prev = null;
            this.current = this.head;
            this.size--
            return;
        }
        if (this.current === this.tail) {
            this.tail = this.current.prev;
            this.tail.next = null;
            this.current = this.tail;
            this.size--
            return;
        }
        else {
            let currentNode = this.current.prev;
            currentNode.next = this.current.next;
            this.current.prev = currentNode;
            this.current = currentNode
            this.size--
            return;
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
    

 
}



  export {ListNode, LinkedList}
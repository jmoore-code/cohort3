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
    this.size = 0;
    this.message = "";
  }

  // Insert first node
insertFirst(subject, amount) {
    this.head = new ListNode(subject, amount, this.head)
    this.size++
}

// Insert last node
insertLast(subject, amount) {
 
 let node = new ListNode(subject, amount);
 let current;

 // If empty, make head
 if(!this.head) {
     this.head = node;
 } else {
     current = this.head;

     while(current.next) {
         current = current.next;
     }
     current.next = node;
 }
 this.size++;
}

// Get list data
getListData() {
    let current = this.head;
    let list = [];


    while(current) {
        list.push(current);
        current = current.next
    }
    return list; 
}

// Insert at index
insertAt(subject, amount, index) {

    // If index is out of range
    if(index > 0 && index > this.size) {       
        return;
    }
    //If first index
    if(index === 0) {
        this.head = new ListNode(subject, amount, this.head);
        return;
    }

    const node = new ListNode(subject, amount);
    let current, previous;
    // set current to first
    current = this.head;
    let count = 0;

    while(count < index) {
        previous = current; //Node before index
        count++;
        current = current.next; //Node after index
    }
    
    node.next = current;
    previous.next = node;
    
    this.size++
}

// Get at index
getAt(index) {
    let current = this.head;
    let count = 0;

    if(index > 0 && index > this.size) {
        this.message = "That index doesn't exist"
        return;
    }

    while(current) {
        if (count === index) {
            return current;
        }
        count++;
        current = current.next;
    }

    return;
}

// Remove at index
removeAt(index) {
    let current = this.head;
    let count = 0;
    let previous;

    if(index > 0 && index > this.size) {
        this.message = "That index doesn't exist"
        return;
    }

    //Remove first
    if(index === 0) {
        this.head = current.next
    } else {
        while(count < index) {
            count++;
            previous = current;
            current = current.next
        }

        previous.next = current.next
    }
    this.size--
  
    }

// Sum of list node amounts
sumAmount() {
    let current = this.head;
    let total = 0;

    while(current) {
        total += current.amount
        current = current.next
    }
    return total;
}

// CLear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

// Print list data
printListData() {
    let current = this.head;

    while(current) {
        console.log(`${current.subject}, ${current.amount}`)
        current = current.next
    }
}

}



export {ListNode, LinkedList}


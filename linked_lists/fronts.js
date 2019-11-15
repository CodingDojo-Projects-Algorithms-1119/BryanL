class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
    }
    addFront(value) {
        const node = new Node(value);

        node.next = this.head; 

        this.head = node;

        return this;
    }

    removeFront() {
        const node = this.head;

        if (node) {
            this.head = node.next;
        }    
        return this;
    }
}

// function removeFront(head) {

// }

const list = new List();

const node = new Node (7);
// const node1 = new Node (11);

// node.next = node1;

console.log();

// list.head = node;
list.addFront(11).addFront(9).addFront(15).addFront(99)

console.log("before", list);
list.removeFront();

console.log("after", list);
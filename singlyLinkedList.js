class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head=null){
        this.head = head;
        this.tail = null;
    }

    addToFront(nodeToAdd){
        if(this.head===null){
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            nodeToAdd.next = this.head;
            this.head = nodeToAdd;
        }
    }

    addToEnd(nodeToAdd) {
        if(this.head===null){
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            this.tail.next = nodeToAdd;
            this.tail = nodeToAdd
        }
    }
    addAtIndex(index, nodeToAdd){
        //if index out of range
        if(index>0 && index>this.size){
            return;
        }
        //if first index
        if(index===0){
            this.head = new Node(nodeToAdd, this.head);
            return;
        }
        const node = new Node(nodeToAdd)
        let current;
        let previous;

        //set current to first
        current = this.head;
        let count=0;

        while(count<index){
            previous = current;//node before index
            count++;
            current = current.next;//node after index
        }
        node.next = current;
        previous.next = node;
    }
    size() {
        let count = 0;
        let node = this.head;
        while(node!=null){
            count++;
            node = node.next;
        }
        return count;
    }

    getLast(){
        return this.tail;
    }

    getFirst(){
        return this.head;
    }

    isEmpty(){
        // return this.head ===null;
        return this.size === 0;
    }
}

// let node1 = new Node('Vinson');
// let node2 = new Node('Paul');
// let node3 = new Node('Asel');
// let node4 = new Node('Hatice');
// node1.next = node2;
// node1.next.next = node3; 
// // node2.next = node3;
// node1.next.next.next = node4;

// let mySLL = new LinkedList(node1);
// mySLL.tail = node4;
let mySLL = new LinkedList();

mySLL.addToEnd(new Node('Vinson'))
mySLL.addToEnd(new Node('Paul'))
mySLL.addToEnd(new Node('Asel'))
mySLL.addToEnd(new Node('Hatice'))
mySLL.addToEnd(new Node('Eric'))
mySLL.addToFront(new Node('The Real DJ'))
mySLL.addAtIndex(3, new Node('Taryn'))
console.log(mySLL);
mySLL.addToEnd('Eric')

console.log(mySLL.size())
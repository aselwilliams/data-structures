class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = null;
    }

    addToFront(nodeToAdd){
        if(this.head === null){
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            nodeToAdd.next = this.head;
            this.head = nodeToAdd;
        }
    }

    addToEnd(nodeToAdd){
        if(this.head === null){
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            this.tail.next = nodeToAdd;
            this.tail = nodeToAdd;
        }
    }

    addAtIndex(index, nodeToAdd){
      // ***** your code goes here *****
    }
    

    size(){
        let count = 0;
        let node = this.head;
        while(node != null){
            count++;
            node = node.next;
        }
        return count;
    }
    getFirst(){
        return this.head;
    }

    getLast(){
        return this.tail;
    }

    isEmpty(){
        return this.head === null;
    }
}
let mySLL = new LinkedList();

mySLL.addToEnd(new Node('vinson'));
mySLL.addToEnd(new Node('Paul'));
mySLL.addToEnd(new Node('Asel'));
mySLL.addToEnd(new Node('Hatice'));
mySLL.addToEnd(new Node('Leah'));
mySLL.addToEnd(new Node('Eric'));
mySLL.addToFront(new Node('The Real DJ'))
mySLL.addAtIndex(5, new Node('Richa'));

console.log(mySLL.size());
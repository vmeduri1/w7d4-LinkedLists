// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor(head = null, tail = null, length = 0) {
        this.head = head;
        this.tail = tail;
        this.length = length;
    }

    // TODO: Implement the addToTail method here
    addToTail(value) {
        const node = new Node (value, null);
        if (this.length === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) {
            return undefined;
        }
        const oldTail = this.get(this.length - 1);
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.get(this.length - 2).next = null;
            this.tail = this.get(this.length - 2);
        }
        this.length -= 1;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const node = new Node(val, this.head);
        this.head = node;
        if (this.length === 0) {
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) {
            return undefined;
        }
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length -= 1;
        return oldHead;

    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while(currentNode !== null) {
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length - 1) {
            return null;
        }
        let currentNode = this.head;
        while(index > 0) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (!this.get(index)) {
            return false;
        }
        this.get(index).value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(!this.get(index)) {
            return false;
        }
        const node = new Node (val, this.get(index))
        this.get(index - 1).next = node;
        this.length += 1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (!this.get(index)) {
            return undefined;
        }
        const oldNode = this.get(index)
        this.get(index - 1).next = this.get(index + 1)
        this.length -= 1;
        return oldNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

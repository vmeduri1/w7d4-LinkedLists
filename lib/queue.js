// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor(front, back, length = 0) {
        this.front = front;
        this.back = back;
        this.length = length;
    }

    enqueue(input) {
        const node = new Node(input)
        if (this.length === 0) {
            this.front = node;
            this.back = node;
        } else {
            const oldBack = this.back;
            oldBack.next = node;
            this.back = node;
        }
        this.length += 1;
        return this.length;
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }
        const oldFront = this.front;

        if (this.length === 1) {
            this.front = null;
            this.back = null;
        } else {
            this.front = oldFront.next;
        }
        this.length -= 1;
        return oldFront.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;

// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
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
class Stack {
    constructor (top, length = 0) {
        this.top = top;
        this.length = length;
    }
    push(input) {
        // const oldTop = this.top;
        const node = new Node(input, this.top);
        this.top = node;
        this.length += 1;
        return this.length;
    }
    pop() {
        if (!this.length) {
            return null;
        }
        const currentTop = this.top;
        if (!this.top.next) {
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        this.length -= 1;
        return currentTop.value;
    }
    size() {
        return this.length;
    }
}
exports.Node = Node;
exports.Stack = Stack;

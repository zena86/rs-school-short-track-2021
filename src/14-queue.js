const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize () {
    return this.size;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    const cur = this.head;
    this.head = this.head.next;
    this.size--;
    return cur.value;
  }
}

module.exports = Queue;

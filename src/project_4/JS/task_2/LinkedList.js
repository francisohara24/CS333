/**
 * @file   LinkedList.js
 * @brief  Implementation of a LinkedList in JavaScript.
 * @author Francis O'Hara
 * @date   5/7/25
 */

/**
 * Class for representing the Node of a LinkedList.
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class for representing a LinkedList.
 * Has 1 attribute `head` which is the `Node` object serving as the head of the LinkedList.
 *
 */
class LinkedList {

    constructor() {
        this.head = null;
    }

    /**
     * Adds a node to the front of the list, storing the given `data` value in the new node.
     *
     * @param data The value stored in the node to be added to the front of the LinkedList.
     */
    push(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * Removes the node at the front of the list and returns the associated data.
     *
     * @return The data value of the node to be removed from the front of the LinkedList.
     */
    pop() {
        if (this.head === null) {
            return null;
        } else {
            let data = this.head.data;
            this.head = this.head.next;
            return data;
        }
    }

    /**
     * Adds a node to the end of the list, storing the given data in the node.
     *
     * @param data The data value of the Node to be added to the end of the list.
     */
    append(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let currentNode = this.head;
            while (true) {
                if (currentNode.next === null) {
                    currentNode.next = new Node(data);
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }


    /**
     * Removes the first node in the list whose data value matches the value `target` given the comparisonFunction `compFunc`
     * and returns its value.
     *
     * @param target The target value to be searched for in the LinkedList
     * @param compFunc The comparator function for comparing node data with the target value.
     *                 The function must accept two input arguments and return `true` if the arguments are equal or `false` otherwise.
     */
    remove(target, compFunc) {
        let result = null;

        if (this.head === null) {
            return null;
        } else if (compFunc(this.head.data, target)) {
            result = this.head.data;
            this.head = this.head.next;
        } else {
            let currentNode = this.head;

            while (currentNode.next !== null) {
                if (compFunc(currentNode.next.data, target)) {
                    result = currentNode.next.data;
                    currentNode.next = currentNode.next.next;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
        return result;
    }


    /**
     * Finds and returns the first node in the list whose data matches the `target` value given the comparison function `compFunc`
     *
     * @param target The target value to be searched for in the LinkedList
     * @param compFunc The comparator function for comparing node data with the target value.
     *                 The function must accept two input arguments and return `true` if the arguments are equal or `false` otherwise.
     */
    find(target, compFunc) {
        let currentNode = this.head;

        if (this.head === null) {
            return null;
        }

        while (currentNode !== null) {
            if (compFunc(currentNode.data, target)) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }

        return null;
    }


    /**
     * Returns the size of the LinkedList
     *
     * @return The size of the LinkedList as a Number.
     */
    size() {
        let listSize = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            listSize++;
            currentNode = currentNode.next;
        }

        return listSize;
    }


    /**
     * Removes all nodes from the LinkedList.
     */
    clear() {
        this.head = null;
    }


    /**
     * Traverses the LinkedList and applies the given function to the data at each node in the list.
     *
     * @param mapFunc The function to be applied to the data at each node of the LinkedList.
     */
    map(mapFunc) {
        let currentNode = this.head;

        while (currentNode !== null) {
            mapFunc(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

module.exports = {
    LinkedList: LinkedList
};

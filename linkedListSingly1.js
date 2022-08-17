// node class
class Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

const node1 = new Node('Irene')
const node2 = new Node('Kasem')
const node3 = new Node('Amanda')


node1.next = node3
node3.next = node2
node2.next = null

console.log(node1)
console.log(node2)

//singly linkedList class
class SinglyLinkedList {
    constructor(head) {
        this.head = head
        this.tail = tail
    }
    setHead(data) {
        // check to see if there is an existing head
        if(!this.head) {
            this.head = new Node(data)
            return
        } else {
            //redefine the head and the references
            let tempHead = this.head
            this.head = new Node(data)
            // define the new head's next reference to the oldhead
            this.head.next = tempHead
            return
        }
        }
    }
// we want to see what the SLL looks like
const sLL = new SinglyLinkedList('Irene')


//create a function that console logs every node

//create a function that sets the tail

//findNode
//
setTail(data) {
    //check to see if there is an existing head
    if(!this.tail) {
        this.tail = new Node(data)
        this.tail.next = null
        return this.tail
    } else {
        //redefine the head and the references
        let tempTail = this.tail
        //set the new head
        this.tail = new Node(data)
        //define the new heads next reference to the oldhead
        this.tail.next = null
        return this.tail
    }
}
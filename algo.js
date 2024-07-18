// 24. Swap Nodes in Pairs



// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes (i.e. only nodes themselves may be changed.)








/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    

    function swap(node){

                // Base case: Check if node or node.next is null
        if (node == null || node.next == null) {
            return;
        }

        // Correctly access node.next and swap values
        let temp = node.val;
        node.val = node.next.val;
        node.next.val = temp;

        // Recursive call to swap the next pair
        swap(node.next.next);
    }

    swap(head)

    return head
};
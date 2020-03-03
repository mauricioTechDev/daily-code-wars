Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.





var sumOfLeftLeaves = function(root) {
    if(root == null){
        return 0
    } else if (root.left !== null && root.left.left == null && root.left.right == null){
        return root.left.val + sumOfLeftLeaves(root.right);
    } else {
        return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
    }
};

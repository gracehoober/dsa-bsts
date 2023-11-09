"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (val === this.val){
      return this;
    }

    if (val > this.val){
      //go right
      if (this.right){
        return this.right.findRecursively(val);
      } else {
        return;
      }
    }

    if (val < this.val){
      //go left
      if (this.left){
        return this.left.findRecursively(val);
      } else {
        return;
      }
    }

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (val > this.val){
      //going right
      if (!this.right){
        this.right = newNode;
        return newNode;
      } else {
        return this.right.insertRecursively(val);
      }
    }
    if (val < this.val){
      //going left
      if (!this.left){
        this.left = newNode;
        return newNode;
      } else {
        return this.left.insertRecursively(val);
      }
    }
    if (val === this.val){
      //shoudn't need this
      return newNode;
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    visitedNodes.push(this.val);
    if (this.left){
      visitedNodes = visitedNodes.concat(this.left.dfsPreOrder());
    }
    if(this.right){
      visitedNodes = visitedNodes.concat(this.right.dfsPreOrder());
    }

    return visitedNodes;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];

    if (this.left){
      visitedNodes = visitedNodes.concat(this.left.dfsInOrder());
    }

    visitedNodes.push(this.val);

    if(this.right){
      visitedNodes = visitedNodes.concat(this.right.dfsInOrder());
    }

    return visitedNodes;
  }


  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];

    if (this.left){
      visitedNodes = visitedNodes.concat(this.left.dfsPostOrder());
    }

    if(this.right){
      visitedNodes = visitedNodes.concat(this.right.dfsPostOrder());
    }

    visitedNodes.push(this.val);

    return visitedNodes;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    const node = new Node(val)
    if(!this.root){
      this.root = node;
      return this;
    }
    let current = this.root
    while(current){
      if(val > current.val){
        if(current.right){
          current = current.right
        }else{
          current.right = node
          return this;
        }
      } else if(current.left){
        current = current.left
      }else{
        current.left = node;
        return this;
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root){
      this.root = new Node(val);
      return this;
    }

    this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root){
      return;
    }
    let current = this.root;
    while(current){
      if (val === current.val){
        return current;
      }

      if (val > current.val){
        //go right
        if(current.right){
          current = current.right;
        } else {
          return;
        }
      }

      if (val < current.val){
        //go left
        if (current.left){
          current = current.left;
        } else {
          return;
        }
      }
    }

  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root){
      return;
    }

    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    if(!this.root){
      return visitedNodes;
    }
    visitedNodes = visitedNodes.concat(this.root.dfsPreOrder());
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];
    if(!this.root){
      return visitedNodes;
    }
    visitedNodes = visitedNodes.concat(this.root.dfsInOrder());
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];
    if(!this.root){
      return visitedNodes;
    }
    visitedNodes = visitedNodes.concat(this.root.dfsPostOrder());
    return visitedNodes;
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    let visitedNodes = [];

    if (!this.root){
      return visitedNodes;
    }

    let queue = [this.root];
    while (queue.length){
      let current = queue.shift();
      visitedNodes.push(current.val);
      if (current.left){
        queue.push(current.left);
      }
      if (current.right){
        queue.push(current.right);
      }

    }

    return visitedNodes;

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};

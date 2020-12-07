const BinarySearchTree = require('./bst')

//DRILL 3
function main(){
    const BST = new BinarySearchTree();
    // BST.insert(3);
    // BST.insert(1);
    // BST.insert(4);
    // BST.insert(6);
    // BST.insert(9);
    // BST.insert(2);
    // BST.insert(5);
    // BST.insert(7);
    
    BST.insert('E');
    BST.insert('A');
    BST.insert('S');
    BST.insert('Y');
    BST.insert('Q');
    BST.insert('U');
    BST.insert('E');
    BST.insert('S');
    BST.insert('T');
    BST.insert('I');
    BST.insert('O');
    BST.insert('N');
  
    console.log(BST);
  }
  
  main()

  //DRILL 4
  function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
//This function returns the sum of all values in the tree. o(n)

//DRILL 5
function bstHeight(bst) {
    if(!bst) {
      return null
    }
    let countL = bstHeight(bst.left)
    let countR = bstHeight(bst.right)
    //add one each recursion
    if(countL > countR){
      return countL + 1
    } else {
      return countR + 1
    }
  }
  
  console.log(bstHeight(BST))

  //DRILL 6
  function bstCheck(bst) {
    if(!bst) {
      return true
    }
    if(bst.right !== null && bst.right.key < bst.key) {
      return false
    }
    if(bst.left !== null && bst.left.key > bst.key) {
      return false
    }
    const bstL = bstCheck(bst.left)
    const bstR = bstCheck(bst.right)
    if(bstL && bstR) {
      return true
    } else {
      return false
    }
  }
  
  console.log(bstCheck(BST))

  //DRILL 7
  function findLargest(bst) {
    if(bst.right === null) {
      return bst
    }
    return findLargest(bst.right)
  }
  
  function thirdLargest(bst) {
    let largest = findLargest(bst)
    if (largest.left) {
      if (largest.left.right) {
        return largest.left.right
      }
      if (largest.left.left) {
        return largest.left.left
      } else {
        return largest.parent
      }
    } else {
      if(largest.parent &&largest.parent.left){
        return largest.parent.left
      } else {
        return largest.parent.parent
      }
    }
  }
  
  console.log(thirdLargest(BST))
  
  //DRILL 8

  function isBalanced(t, top=true) { //top=true tells us its the first iteration
    if (!t) {
      return 0 //base case is 0
    }
    let countR = isBalanced(t.right, false) //calling function for left and right
    let countL = isBalanced(t.left, false) //we specifiy top=false because it's not the first iteration
    if (countL === false|| countR === false) { //if we have found the tree to be unbalanced at any level, it will return false
      return false                             //so if line 204 is ever true, 201 will evaluate true every loop after
    }
    if (countL > countR+1 || countR > countL+1) {//checks if the tree is unbalanced
      return false
    }
    if (top === true) return true //if we are in the first iteration of the function, and the tree was never found to be unbalanced, we return true
    if (countL > countR) { //returning the height of the tree
      return countL + 1
    } else {
      return countR + 1
    }
  }
  
  console.log(isBalanced(BST))

  //DRILL 9

  function sameBST(arr1, arr2){
    //base case 0 length must be same
    if(arr1.length === 0 || arr2.length === 0) {
      return true
    }
    //if diff length must be diff
    if(arr1.length !== arr2.length){
      return false
    }
    let root1 = arr1[0]
    let root2 = arr2[0]
    //if roots diff must be diff
    if(root1 !== root2){
      return false
    }
    let higherNums1 = []
    let higherNums2 = []
    let lowerNums1 = []
    let lowerNums2 = []
    for(let i = 1; i < arr1.length; i++){
      if(arr1[i] > root1){
        higherNums1.push(arr1[i])
        //push nums > root to one array
      }
      if(arr1[i] < root1){
        lowerNums1.push(arr1[i])
        //push nums < root to one array
      }
    }
    for(let i = 0; i < arr2.length; i++) {
      if(arr2[i] > root2){
        higherNums2.push(arr2[i])
        //push nums > root to one array
      }
      if(arr2[i] < root2){
        lowerNums2.push(arr2[i])
      }
    }
    const higherCheck = sameBST(higherNums1, higherNums2)
    const lowerCheck = sameBST(lowerNums1, lowerNums2)
    if(higherCheck === true && lowerCheck === true){
      return true
    }
    return false
  }
  
  console.log(sameBST([3, 5, 4, 6, 1, 0, 2 ], [3, 1, 5, 2, 4, 6, 0]))
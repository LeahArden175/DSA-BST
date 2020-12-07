class BinarySearchTree {
    //key = null represents an empty tree
    //parent = null represents the root node
    constructor( key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null
    }

    insert(key, value) {
        //if the tree is empty then this key being inserted if the root node of the tree
        if(this.key == null) {
            this.key = key;
            this.value = value;
        }
        /*if the tree already exits, then start at the root,
        and compare it ot the key you want to insert.
        If the new key if less than the node's ket then the new node
        needs to live in the left-hand branch */
        else if (key < this.key) {
            /*If the existing node does not have a left child, meaning
            that if the left pointer is empty, then we can just instantiate
            and insert the new node as the left child of that node, passing this as the parent */
            if(this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /*if the node has an existing left child, the we recursively call the
            'insert' method so the node is added further down the tree */
            else {
                this.left.insert(key, value)
            }
        }
        /*Similarly if the new key is greater add to left */
        else {
            if(this.right == null) {
                this.right = new BinarySearchTree(kay, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }

    find(key) {
        //if the item is found at the root then return value
        if(this.key == key) {
            return this.value;
        }
        /*If the item you are looking for is less than the root
        then follow the left child  and recursively check for the item*/
        else if (key < this,ket && this.left) {
            return this.left.find(key)
        }
        /*do same with right */
        else if(key > this.key && this.right) {
            return this.right.find(key)
        }
        //throw error if item is not found
        else {
            throw new Error('Key Error')
        }
    }
    remove(key) {
        if(this.key == key) {
            if(this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key)
            }
            /*If the node only had a left child
            then you replace the node with its left child */
            else if(this.left) {
                this._replaceWith(this,left)
            }
            /*do same with right */
            else if(this.right) {
                this._replaceWith(this.right)
            }
            /*if node has no children then remove it and any references
            to it */
            else {
                this._replaceWith(null)
            }
        }
        else if(key < this.key && this.left) {
            this.left.remove(key)
        }
        else if(key > this.key && this.right) {
            thir.right.remove(key)
        } else {
            throw new Error('Key Error')
        }
    }
    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node
            } else if( this == this.parent.right) {
                this.parent.right = node
            }
            if(node) {
                node.parent = this.parent
            }
        } else {
            if(node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else {
                this.key = null;
                this.value = null;
                this.leftv= null;
                this.right = null
            }
        }
    }
    _findMin() {
        if(!this.left) {
            return this;
        }
        return this.left._findMin()
    }
}

module.export = BinarySearchTree
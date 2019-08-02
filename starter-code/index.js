class SortedList {
    constructor(items, length) {
      this.items = [],
      this.length = 0;
    }
    add(x) {
      this.items.push(x);
      this.length ++
    }
    get(pos) {
      if(pos < this.length){
          return this.items[pos]
      } else throw new Error("OutOfBounds")

       
    }
    max() {
      if(0 < this.length){
        return this.items[pos]
    } else throw new Error("EmptySortedList")
    }
    min() {
      
    }
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;



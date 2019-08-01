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
      if(pos < this.length.length){
          return this.items[pos]
      } else throw new Error("OutOfBounds")

       
    }
    max() {

    }
    min() {
      
    }
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;
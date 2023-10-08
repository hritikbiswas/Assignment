function CustomArray() {
    // Set the size property based on the number of arguments
    this.size = arguments.length;
  
    // Add the arguments as key-value pairs in the Array object
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
  
  // Define custom methods using the prototype property
  CustomArray.prototype = {
    push: function (element) {
      this[this.size] = element;
      this.size++;
    },
    pop: function () {
      if (this.size === 0) return undefined;
      const poppedElement = this[this.size - 1];
      delete this[this.size - 1];
      this.size--;
      return poppedElement;
    },
    top: function () {
      if (this.size === 0) return undefined;
      return this[this.size - 1];
    },
    print: function () {
      const elements = [];
      for (let i = 0; i < this.size; i++) {
        elements.push(this[i]);
      }
      console.log(`[${elements.join(',')}]`);
    },
    printReverse: function () {
      const elements = [];
      for (let i = this.size - 1; i >= 0; i--) {
        elements.push(this[i]);
      }
      console.log(`[${elements.join(',')}]`);
    }
  };
  
  // Example usage:
  const customArray = new CustomArray(1, 2, 3, 4);
  customArray.push(5);
  customArray.print(); // Output: [1,2,3,4,5]
  console.log(customArray.size); // Output: 5
  console.log(customArray.pop()); // Output: 5
  customArray.printReverse(); // Output: [4,3,2,1]
  
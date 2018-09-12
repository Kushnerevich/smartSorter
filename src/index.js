class Sorter {

  constructor() {
      this.elem = [];
      this.compFunc = function(a, b) {
        return a - b
      };
  }

  add(element) {
      this.elem.push(element);
  }

  at(index) {
    return this.elem[index];
  }

  get length() {
    return this.elem.length;
  }

  toArray() {
    return this.elem;
  }

  sort(indices) {
    debugger;
    let arrayOfElem = this.elem;
    let sortVar = [];
    indices.sort();
    indices.forEach(function (element) {
      sortVar.push(arrayOfElem[element])
    });
    sortVar.sort(this.compFunc);
    let counter = 0;
    indices.forEach(function (element) {
        arrayOfElem[element] = sortVar[counter];
        counter++
    });
    this.elem = arrayOfElem;
  }

  setComparator(compareFunction) {
    this.compFunc = compareFunction;
  }
}

module.exports = Sorter;

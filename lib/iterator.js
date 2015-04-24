module.exports = Iterator;

function Iterator(items) {
  this.index = -1;
  this.items = items;
}

Iterator.prototype.next = function() {
  if (!this.items.hasOwnProperty(++this.index)) {
    return { value: null, done: true};
  } else {
    return { value: this.items[this.index], done: false};
  }
}

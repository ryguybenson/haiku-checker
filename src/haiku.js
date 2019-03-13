


export function Haiku(first, second, third) {
  this.first = first;
  this.second = second;
  this.third = third;
}

Haiku.prototype.checkWords = function() {
  if (this.first === "cat") {
      return true
  } else {
      return false;
  }
}
Haiku.prototype.checkWordss = function() {
  if (this.second === "cat") {
      return true
  } else {
      return false;
  }
}

module.exports = Phrase;

// Adds a `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.letters().toLowerCase();
  }

  // Returns the letters inthe content.
  this.letters = function() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function () {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns the content in ALL CAPS.
  this.louder = function () {
    return content.toUpperCase();
  }
}
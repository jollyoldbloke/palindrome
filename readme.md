# Phrase object (with palindrome detector)

This module can be used as follows:

```
$ npm install --global jollyoldbloke-palindrome
$ vim test.js
let Phrase = require("jollyoldbloke-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
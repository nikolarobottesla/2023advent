
const fs = require('fs');
const { wordsToNumbers } = require('words-to-numbers');
const WordsNinjaPack = require('wordsninja');
const WordsNinja = new WordsNinjaPack();

// Read the file
var filename = "d1p1_input.txt";
var longString = fs.readFileSync(filename).toString();
var lines = longString.split(String.fromCharCode(10));

var sum = 0;
var calVal = 0;
(async () => {
  await WordsNinja.loadDictionary(); // First load dictionary
  for (const line of lines) {
    spacedLine = WordsNinja.splitSentence(line, {joinWords: true});
    // for (const num of arrayLine) {
    //   num
    // }
    numberizedLine = wordsToNumbers(spacedLine)
    digits = numberizedLine.match(/\d+/g);
    first_digit = Number(digits[0][0]);
    last_digit = digits[digits.length - 1];
    last_digit = Number(last_digit[last_digit.length - 1]);
    //TODO add debug if value is >99
    calVal = first_digit * 10 + last_digit
    if (calVal >  99) {
      console.log("issue with line: " + line)
      console.log("calVal: " + calVal)
    }
    sum += calVal;
  }
  console.log("sum of calibration values: " + sum);
})();


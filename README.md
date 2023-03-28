// where our pseudocode goes: //

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code: wordCounter()
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2
____________________________________

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
_________________________________________________

Describe: omitOffensiveWord()
(4 words to omit = zoinks, muppeteer, biffaroni, loopdaloop)

Test: "It should return the string in the stringParam parameters"
Code: function wordTest(stringParam) {
  return stringParam;
}
const text = "string test"
const word = 
omitOffensiveWord("string test")
Expected Output: "string test"

Test: "It should omit the offensive word zoinks"
Code: function wordTest(stringParam) {
  let emptyWord = " ";
  const badWord = "zoinks";
  if (word === "zoinks") {
    return emptyWord;
  } else {
    return word;
  }
}
const text = "zoinks"
const word = "zoinks"
omitOffensiveWord()
Expected Output: " "

Test: "It should omit the word from the string if the string includes the word "zoinks"
Code: function wordTest(stringParam) {
  let emptyWord = " ";
  const badWord = "zoinks";
  if (stringParam.includes(badWord)) {
    return emptyWord;
  } else {
    return stringParam;
  }
}
const text = "hello zoinks"
const word = "zoinks"
omitOffensiveWord()
Expected Output: " "

******** break up into an array, omit the word from the array, and the join it back together as a string without the word

Test: "It should break the string into an array
Code: function wordTest(stringParam) {
  const textArray = stringParam.split(' ');
  return textArray; 
}
const text = "test one two"
const word = 
omitOffensiveWord()
Expected Output: ["test","one","two]; 


Test: "it should replace the bad words with the word " "
Code: 
function wordTest(stringParam) {
  let newSentence = stringParam;
  const badWord = "zoinks";
  if (stringParam.includes(badWord)) {
    return newSentence.replace("zoinks", " ");
  }
}
const text = "hello zoinks"
const word = "zoinks"
omitOffensiveWord()
Expected Output: "hello "


Test: "it should replace any of the bad words in the array with the word " "
Code: 
function wordTest(stringParam) {
  const badWordArray = ["zoinks","muppeteer","loopdaloop","biffaroni"];
  badWordArray.forEach(function(element) {
    if (stringParam.includes(element)) {
      return stringParam.replace(element, " ");
      console.log("hello there");
    }
    return stringParam;
  });
}
const text = "hello zoinks"
const word = 
omitOffensiveWord();
Expected Output: "hello "

RETURNS UNDEFINED
function wordTest(stringParam) {
  const badWordArray = ["zoinks","mupp"];
  badWordArray.forEach(function(element){
    if (stringParam.includes(element)){
      stringParam.replace(element," ");
    }
  })
}
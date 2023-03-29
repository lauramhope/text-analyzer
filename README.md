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
Code: function numberOfOccurrencesInText(word, text) {
  if (word === text) {
    return 1;
  }
  return 0;
}
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

Test: "If an empty string is passed in as a word, it should return 0."
Code:
if (word.trim().length === 0) {
  return 0;
}
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0
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


Test: "it should replace any of the bad words in the array with the word "****"
Code: 
function omitOffensiveWords(text) {
  let textArray = text.split(" ");
  let badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
  let badString = badWords.toString();
  let returnArray = [];

  textArray.forEach(element => {
    if (badString.toLowerCase().includes(element.toLowerCase())) {
      returnArray.push("******");
    } else {
      returnArray.push(element);
    }
  });
  return returnArray.toString(' ').replaceAll(',', ' '); 
}
const text = "hello zoinks"
const word = 
omitOffensiveWord();
Expected Output: "hello *****"

__________________________
Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code: function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
}
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code: function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  const p = document.createElement("p");
  p.append(text);
  return p;
}
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test: "It should return a matching word in a strong tag."
Code: function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  const p = document.createElement("p");
  if (word === text) {
    const bold = document.createElement("strong");
    bold.append(text);
    p.append(bold);
  } else {
    p.append(text);
  }
  return p;
}
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: "It should wrap words that match in strong tags but not words that don't."
Code: function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    p.append(" ");
  });
  return p;
}
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

___________________________
Describe: organizeCommonWords()

Test: "It should return 0 occurrences of a word for an empty string."
Code: function organizeCommonWords(text) {
  if (isEmpty(text)) {
    return 0;
  }
  }
const text = "";
const word = "";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code: function organizeCommonWords(word, text) {
  if (word === text) {
    return 1;
  }
  return 0;
}
const text = "hey";
const word = "hey";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code: same code as above
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code: function organizeCommonWords(word,text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (word === element) {
      wordCount++;
    }
  });
  return wordCount;
}
const text = "hi hey hi hi hey hi";
const word = "hi";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code: function organizeCommonWords(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}
const text = "hey HEY hi Hey HEY";
const word = "hey";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of punctuation."
Code: function organizeCommonWords(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should start recording number of common words for each word"
Code: let wordArray = [];
function organizeCommonWords(str) {
  if (isEmpty(str)) {
    return 0;
  }
  split = str.split(" ");

  for(let i=0; i<split.length; i++) {
    if (wordArray[split[i]] === undefined) {
      wordArray[split[i]] = 1;
    } else {
      wordArray[split[i]]++;
    }
  }
}
const text = "hey hey you there hey"
const word = n/a
Expected Output: hey:3, you:1, there:1; 
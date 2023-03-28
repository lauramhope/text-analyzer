// Business Logic -- good idea to set this up first
//if empty string, should return 0 // trim takes all the whitespace from both ends of a string
// starts at zero so the first word is "1" -- uses let because it will change
// splitting the string up to be stored in an array -- uses const because once a value is assigned to textArray, textArray will not change again
// count goes up by 1 each time the loop goes through
// once we are done looping, will return the value of wordcount
//Number() function returns a number, so if it's NaN it will be counted in the word count
//changed the callback function's parameter to element because it might not always be a word

function wordCounter(text) {
  if (text.trim().length === 0) { 
    return 0;
  }
  let wordCount = 0; 
  const textArray = text.split(" "); 
  textArray.forEach(function(element) { 
    if (!Number(element)){
      wordCount++; 
    }
  });
  return wordCount; 
}
// needs 2 parameters - one for the word we're looking for, and one for the whole text itself
function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount; 
}


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


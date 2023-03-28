// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});










// Business Logic -- good idea to set this up first
//if empty string, should return 0 // trim takes all the whitespace from both ends of a string
// starts at zero so the first word is "1" -- uses let because it will change
// splitting the string up to be stored in an array -- uses const because once a value is assigned to textArray, textArray will not change again
// count goes up by 1 each time the loop goes through
// once we are done looping, will return the value of wordcount
//Number() function returns a number, so if it's NaN it will be counted in the word count
//changed the callback function's parameter to element because it might not always be a word

// function wordCounter(text) {
//   if (text.trim().length === 0) { 
//     return 0;
//   }
//   let wordCount = 0; 
//   const textArray = text.split(" "); 
//   textArray.forEach(function(element) { 
//     if (!Number(element)){
//       wordCount++; 
//     }
//   });
//   return wordCount; 
// }
// // needs 2 parameters - one for the word we're looking for, and one for the whole text itself
// function numberOfOccurrencesInText(word, text) {
//   if (word.trim().length === 0) {
//     return 0;
//   }
//   const textArray = text.split(" ");
//   let wordCount = 0;
//   textArray.forEach(function(element) {
//     if (element.toLowerCase().includes(word.toLowerCase())) {
//       wordCount++;
//     }
//   });
//   return wordCount; 
// }


// function omitOffensiveWords(text) {
//   let textArray = text.split(" ");
//   let badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
//   let badString = badWords.toString();
//   let returnArray = [];

//   textArray.forEach(element => {
//     if (badString.toLowerCase().includes(element.toLowerCase())) {
//       returnArray.push("******");
//     } else {
//       returnArray.push(element);
//     }
//   });
//   return returnArray.toString(' ').replaceAll(',', ' '); 
// }

// function boldPassage(word, text) {
//   if ((text.trim().length === 0) || (word.trim().length === 0)) {
//     return null;
//   }
//   const p = document.createElement("p");
//   let textArray = text.split(" ");
//   textArray.forEach(function(element, index) {
//     if (word === element) {
//       const bold = document.createElement("strong");
//       bold.append(element);
//       p.append(bold);
//     } else {
//       p.append(element);
//     }
//     if (index !== (textArray.length - 1)) {
//       p.append(" ");
//     }
//   });
//   return p;
// }

// // UI LOGIC
// // all of the code that responds to the form submission into its own UI function called handleFormSubmission()
// function handleFormSubmission() {
//   event.preventDefault();
//   const passage = document.getElementById("text-passage").value;
//   const word = document.getElementById("word").value;
//   const wordCount = wordCounter(passage);
//   const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
//   document.getElementById("total-count").innerText = wordCount;
//   document.getElementById("selected-count").innerText = occurrencesOfWord;
//   // new lines here!
//   let boldedPassage = boldPassage(word, passage);
//   if (boldedPassage) {
//     document.querySelector("div#bolded-passage").append(boldedPassage);
//   } else {
//     document.querySelector("div#bolded-passage").innerText = null;
//   }
// }

// window.addEventListener("load", function() {
//   document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
// });
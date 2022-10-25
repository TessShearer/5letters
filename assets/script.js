// TO DO:
// add error messages for if user enters same letters in both boxes
// add ability to choose where the letters go in a word
// consider adding ability to choose where letters can't go...may be too messy to add though
// Adjust CSS so that everything looks more centered on the page, and when the wordbank is huge the page grows with it

var wordbankP = document.querySelector("#wordbank");
var wordbankText = wordbankP.innerText;
var finalWordbank = document.querySelector("#final-wordbank");
const words = wordbankText.split(" ");
var filterBtn = document.querySelector("#filter-btn");
var includedBox = document.querySelector("#included-box");
var excludedBox = document.querySelector("#not-included-box");
var restartBtn = document.querySelector("#restart-btn");

wordbankP.style.display = "none";

let includesArray = [];
let excludesArray = [];

// Checks Wordle For all letters that I know are included
function checkWordleIncludes(word) {
  
  for (let i = 0; i < includesArray.length; i++) {
    if (!word.includes(includesArray[i])) {
      return false;
    }
  };
  return true;
};

// Checks Wordle For all letters that I know are not included
function checkWordleExcludes(word) {
  
  for (let i = 0; i < excludesArray.length; i++) {
    if (word.includes(excludesArray[i])) {
      return false;
    }
  };
  return true;
};



// what happens when submit button is pressed!
filterBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
// fills both arrays with the letters the user typed in
  includesArray = (includedBox.value.split(""));
console.log(includesArray);
excludesArray = (excludedBox.value.split(""));
console.log(excludesArray);

// filters wordbank for letters that are included
  var lettersIncludedWordbank = words.filter(checkWordleIncludes);
console.log(lettersIncludedWordbank);

// filters remaining wordbank for letters that aren't included
 var lettersExcludedWordbank = lettersIncludedWordbank.filter(checkWordleExcludes);
 console.log(lettersExcludedWordbank);

//  produces visible wordbank for user
finalWordbank.innerText = lettersExcludedWordbank.join(", ");
});


// Resets the arrays and wordbank
restartBtn.addEventListener("click", function (event) {
  event.preventDefault();
finalWordbank.innerText = "";
includesArray = [];
excludesArray = [];
});

// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
// optionButtons should be all the elements within the "options" div
// explanation should be the "explanation" div
const statement = document.getElementById("statement");
const optionButtons = document.getElementById("options").children;
const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation
const fact = {
  statement: "js is oop",
  answer: true || false,
  explanation1: "da asa e",
  explanation2: "nup, mai incearca",
};
statement.textContent = fact.statement;
//console.log(optionButtons);

// TODO 3: Set the text of the statement element to the fact's statement
optionButtons.true.addEventListener("click", function () {
  console.log("apasare da");
  explanation.textContent = fact.explanation1;
});

optionButtons.false.addEventListener("click", function () {
  console.log("apasare nu ");
  explanation.textContent = fact.explanation2;
});

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""

const disable = (button) => {
  button.setAttribute("disabled", "");
};

// enable(button) should remove the attribute "disabled" from the button element
const enable = (button) => button.removeAttribute("disabled");

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) string should return true if the guess matches the fact's answer string

const isCorrect = (guessSring) => {
  console.log("true");
  return guessSring === fact.answer.toSring;
};

isCorrect(true);

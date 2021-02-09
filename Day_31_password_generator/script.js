// 4 functions returning 4 seperate chars
// we want to take char length input and return a random string of numbers letters and symbols.
// Create obj

const inputLength = document.getElementById('length');
const generateButton = document.getElementById('generate');
const resultEl = document.getElementById('result');
const numberEl = document.getElementById('number');
const uppercaseEl = document.getElementById('uppercase');
const symbolEl = document.getElementById('symbol');
const lowercaseEl = document.getElementById('lowercase');
const clipboardEl = document.getElementById('clipboard');
const keyEl = document.querySelector('.fa-key');

function getRandomLowercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
}

const randomFunc = {
  lower: getRandomLowercaseLetter,
  upper: getRandomUppercaseLetter,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const checkboxCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (checkboxCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += checkboxCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('password copied to clipboard');
});
generateButton.addEventListener('click', () => {
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  const lengthValue = +inputLength.value;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    lengthValue
  );
});

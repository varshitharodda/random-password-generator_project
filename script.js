const passwordDisplay = document.getElementById('passwordDisplay');
const copyBtn = document.getElementById('copyBtn');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const passwordLength = document.getElementById('passwordLength');
const generateBtn = document.getElementById('generateBtn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
  let availableChars = '';
  let password = '';

  if (includeUppercase.checked) {
    availableChars += uppercaseChars;
  }
  if (includeLowercase.checked) {
    availableChars += lowercaseChars;
  }
  if (includeNumbers.checked) {
    availableChars += numberChars;
  }
  if (includeSymbols.checked) {
    availableChars += symbolChars;
  }

  if (availableChars === '') {
    alert('Please select at least one character type.');
    return;
  }

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  passwordDisplay.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  if (passwordDisplay.value) {
    navigator.clipboard.writeText(passwordDisplay.value);
    alert('Password copied to clipboard!');
  }
});

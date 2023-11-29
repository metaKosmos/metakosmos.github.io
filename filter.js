const code = ``;

// Regular expressions to match the function calls
const showRegex = /\.show\((.*?)\)/g;
const hideRegex = /\.hide\((.*?)\)/g;

// Arrays to store the extracted strings
const showStrings = [];
const hideStrings = [];

// Extract strings between [] for .show calls
let match;
while ((match = showRegex.exec(code)) !== null) {
  const string = match[1].match(/\['(.*?)'\]/);
  if (string) {
    showStrings.push(string[1]);
  }
}

// Extract strings between [] for .hide calls
while ((match = hideRegex.exec(code)) !== null) {
  const string = match[1].match(/\['(.*?)'\]/);
  if (string) {
    hideStrings.push(string[1]);
  }
}

// Print the extracted strings
console.log('.show strings:', showStrings);
console.log('.hide strings:', hideStrings);
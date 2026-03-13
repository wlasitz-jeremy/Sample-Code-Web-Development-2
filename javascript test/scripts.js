// variable declaration: const variableName = "whatever the variable is equal to"
// camelCase
const userName = "Judit Polgar";

const pTag = document.getElementById("user-name");

// log in flag boolean variable
let isLoggedIn = true;

// standard conditional statement in JS
if (isLoggedIn === true) {
  pTag.textContent = userName;
} else {
  pTag.textContent = "User not logged in";
}

const a = "2";
const b = 5;

/*
DEBUGGING NOTES

console.log(typeof a, typeof b);


// loose Equality Example
if (a == 2) {
  document.getElementById("calculation").textContent = a + b;
  console.log(a + b);
} else {
  console.error(a, "is not a number")
  // document.getElementById("calculation").textContent = Number(a) + b;
}

// force string 2 to be number 2
const c = Number(a);
console.log(typeof a, String(a));
console.log(c, b, c + b);

*/
const calculationOutput = document.getElementById("calculation");
calculationOutput.textContent = Number(a) + Number(b);

// number declaration -- primitive
const meaningOfLife = 42;
// string declaration -- primitive
const hello = "Hello World";
// boolean declaration -- primitive
const bool = true;
// array declaration aka: a list -- complex
const primes = [2, 3, 5, 7, 11, 13];
// object declaration -- complex
const judit = {
  name: "Judit Polgar",
  profession: "Chess",
  age: 49,
  active: true,
  games: [{ title: "Polgar vs Kasparov", year: 2001 }],
};
const magnus = {
  name: "Magnus Carlsen",
  profession: "Chess",
  age: 35,
  active: true,
  games: [{ title: "Hikaru vs Carlsen" }],
};

console.log(judit);

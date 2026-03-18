// Adding text content to the page using JavaScript
const water = "Scuba Diving is the best sport ever!";
const message = `${water}`;
const element = document.getElementById("water");
element.textContent = message;

const land = "Rock Climbing is the best sport ever!";
const message2 = `${land}`;
const element2 = document.getElementById("land");
element2.textContent = message2;

// Using an array and an object to create a message
const list = ["Scuba Diving", "Rock Climbing", "Skydiving", "Skiing"];
const message3 = `My favorite sports are: ${list[0]}, ${list[1]}, ${list[2]}, and ${list[3]}.`;

const me = {
  name: "Jeremy Wlasitz",
  age: 25,
  favoriteSports: list,
  hobbies: ["hiking", "traveling", "motocycles"],
};
const message4 = `My name is ${me.name}, I am ${me.age} years old, my favorite sports are: ${me.favoriteSports[0]}, ${me.favoriteSports[1]}, ${me.favoriteSports[2]}, and ${me.favoriteSports[3]}. My hobbies include: ${me.hobbies[0]}, ${me.hobbies[1]}, and ${me.hobbies[2]}.`;

// Combining documentid and textcontent together
const trialerror = "This is a trial error message.";
const message5 = `${trialerror}`;
document.getElementById("test").textContent = message5;

// Using querySelectorAll to select multiple elements and change their text content
const trialerror2 = "This is another trial error message.";
const message6 = `${trialerror2}`;
const allthings = document.querySelectorAll(".list");
allthings[0].textContent = message6;
allthings[1].textContent = message6;
allthings[2].textContent = message6;
allthings[3].textContent = message6;
allthings[4].textContent = message6;

// Getting input from a user

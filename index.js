// welcome user

var readlineSync = require('readline-sync');
var chalk = require('chalk');

const userColor = chalk.cyanBright;
const queColor = chalk.yellow;
const ansColor = chalk.green;
const wrongAnswer = chalk.red;


var userName = readlineSync.question("What is your name? ");
console.clear();
console.log("Welcome " + userColor(userName.toUpperCase()) + " 💐 ,\n");
console.log("Let's see how much 'Do you know me ?' \n");
console.log("I will give you some questions and you have to write your answer");
console.log("If you give right Answer then you will awarded by +1 marks");
console.log("\n");


// quiz questions

question1 = {
  question: `what does everyone calls me at home ? 
  a. Niket
  b. Rahul
  c. Babu
  d. Prince`,
  answer: "d",
  full_answer: "Prince",
  explanation: "Everyone call me Prince at Home"
}

question2 = {
  question: `what do I want to become ? 
  a. Engineer
  b. Soldier
  c. Writer
  d. Artist`,
  answer: "b",
  full_answer: "Soldier",
  explanation: "I want to become a Soldier."
}

question3 = {
  question: `how many siblings I have ? 
  a. 2
  b. 4
  c. 3
  d. 5`,
  answer: "a",
  full_answer: "2",
  explanation: "I have two siblings."
}
question4 = {
  question: `what is my hometown ? 
  a. Ayodhya
  b. Mirzapur
  c. Varanasi
  d. Indore`,
  answer: "c",
  full_answer: "Varanasi",
  explanation: "My hometown is Varanasi."
}
question5 = {
  question: `what does I always prefer to eat ? 
  a. Paneer
  b. Chilli Potato
  c. Samosha
  d. Paratha`,
  answer: "c",
  full_answer: "Samosha",
  explanation: "I always prefer Samosha whenever I feels good or bad."
}
question6 = {
  question: `who is my best friend ? 
  a. Rahul
  b. Anuj
  c. Rahul
  d. Priyanshu`,
  answer: "b",
  full_answer: "Anuj",
  explanation: "I think best friend is the one with whom we can share all our thoughts without thinking that he/she will judge me so I thing Anuj is my Best Friend."
}

var questions = [question1, question2, question3, question4, question5, question6];

var score = 0;

function quiz() {
  // processing

  for (var i = 0; i < questions.length; i++) {
    console.log("--------------------------------\n");
    var cQuestion = questions[i];
    console.log((i + 1) + ". " + queColor(cQuestion.question))
    var userAnswer = readlineSync.question("\n\tYour Answer: ");
    console.log("\n");
    if (userAnswer.toUpperCase() === cQuestion.answer.toUpperCase() || userAnswer.toUpperCase() === cQuestion.full_answer.toUpperCase()) {
      console.log(ansColor("Wow! You are right 😀\n"));
      console.log("\t" + ansColor(cQuestion.explanation))
      score++;
    } else {
      console.log(wrongAnswer("No! Wrong Answer 😓"));
      console.log(`Correct Answer is : ${ansColor(cQuestion.answer)}`);
      console.log("\n\t" + ansColor(cQuestion.explanation))
    }
    console.log("\n--------------------------------\n");
  }


  // Final Score

  console.log("You have Scored: " + score + "/" + questions.length);
  console.log("\n Congrats 🎉🎉! well played \n");
  if (score == 0)
    console.log("\tYou didn't know me 🤨");
  else if (score == 1)
    console.log("\tNo! you also didn't know me 🙄");
  else if (score == 2)
    console.log("\tNah! you didn't know me well 😫");
  else if (score == 3)
    console.log("\tok! you know me little bit 🙂");
  else if (score == 4)
    console.log("\tYeah! you are near to know me 😊");
  else if (score == 5)
    console.log("\tWow! you know me well 🤗");
  else
    console.log("\tAmazing! You know me very well 😍");
}

var permission = readlineSync.question("press enter key to continue or Press e to exit: ");
console.log("\n");

if (permission === "e") {
  console.log("Bye! Have a nice day 👋");
} else
  quiz();
var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's Your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Amit ");
console.log("Type the appropriate option i.e a or b or c");
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
{
  console.log("You Are Right..!");
  score = score + 1;
}
else
{
  console.log("You Are Wrong..!");
}
console.log("Current score : ", score)
console.log("-------------------");
}
var questions =
[
  {
    question:"1. Whats amit's favourite color ? a. Black b. White c. Blue ",
    answer : "a"
  },
  {
    question : "2. What's amit's favourite food ?  a. Sandwich b. Panner c. Noodels ",
    answer : "b"
  },
  {
    question : "3. Which type of game does play a lot ? a. TPP Shooter Games b. Story Mode Game c. Card Games ",
    answer : "a"
  },
  {
    question : "4. Which is amit's favourite subject ? a. physics b. Computer c. Sanskrit ",
    answer : "b"
  },
  {
    question : "5. Amit's favourite hero would be ? a. Superman b. IronMan c. Spiderman ",
    answer : "b"
  },
  {
    question : "6. Amit's favourite writer would be ? a. Joseph Murphy b. Chethan Bhagat c. Ayn Rand ",
    answer : "b"
  },
  {
    question : "7. Which would Amit prefer to do among this ?, a. Coding b. Work-Out c. Gaming ",
    answer : "a"
  },
  {
    question : "8. Do Amit believe in god ?, a. Yes b. No c. Depend's on the situation ",
    answer : "c"
  },
  {
    question : "9. Among this movie's which movie does Amit hate the most ? a. Raabta b. Saakshyam c. Love aaj kal-2 ",
    answer : "b"
  },
  {
    question : "10. Who's philosophy inspire's Amit the most ? a. Ayn Rand's philosophy b. Murray Rothbard's philosophy c. Ron Paul's philosophy ",
    answer : "a"
  }
];
for (var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("There You go , You have scored : ", score);
console.log("Send a screen-shot of your score");
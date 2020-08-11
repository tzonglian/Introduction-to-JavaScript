/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge;

if (votingAge >=18 ) {
    console.log(true);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let weekend = 2;
const vacation_weekend = 3;
let vacation = true;

if (vacation){
    weekend = vacation_weekend;
}

//DO DIFFERENT

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");



//Task d: Write a function to multiply a*b 


const arrowFunction = (a,b) => {a * b};
   


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


const arrowFunction2 = (humanAge) => {humanAge * 7};
    



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
let dogAge;
let dogWeight;

function dogFeeder(dogAge,dogWeight) {
    if (dogAge >= 1 ){
        {
            if (dogWeight > 15){
                return dogWeight*.02;
            } else if (dogWeight >= 11){
                return dogWeight*.03;
            } else if (dogWeight >= 6){
                return dogWeight*.04;
            } else {
                return dogWeight*.05;
            }
        }
    } else {
            if (dogAge >= (7/12)){
                return dogWeight*.04;
            } else if (dogAge >= (4/12)){
                return dogWeight*.05;
            } else if (dogAge >= (2/12)){
                return dogWeight*.1;
            } else {
                return null;
            }
    }
    
}

console.log(dogFeeder(1,15));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


function compPlays(){
    let roboChoice = Math.random();

    if (roboChoice < .33) {
        roboChoice = "rock";
    } else if (roboChoice < .66 ) {
        roboChoice = "paper";
    } else {
        roboChoice = "scissors";
}
    return roboChoice;
}

function rockPaperScissors(choice) {
    const roboChoice = compPlays();

    if (choice === roboChoice){
        return "Tie."
    }
    else if (choice === "rock" && roboChoice === "scissors" ||
        choice === "scissors" && roboChoice === "paper" ||
        choice === "paper" && roboChoice === "rock") {
            return "You won.";
    } else {
        return "You lost.";
    }
}


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles



const arrowFunction3 = (distance) => distance * 0.62137119224;


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

const arrowFunction4 = (length) => length*30.48; 


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(bottleNum) {
    while (bottleNum > 0) {
        console.log(`${bottleNum} bottles of soda on the wall, ${bottleNum} bottles of soda, take one down pass it around ${bottleNum-1} bottles of soda on the wall`);
        bottleNum--;
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function letterGrade(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >=80){
        return "B";
    } else if (grade >=70){
        return "C";
    } else if (grade >=60){
        return "D";
    } else{
        return "F";
    }
}
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function compPlays(){
    let roboChoice = Math.random();

    if (roboChoice < .33) {
        roboChoice = "rock";
    } else if (roboChoice < .66 ) {
        roboChoice = "paper";
    } else {
        roboChoice = "scissors";
}
    return roboChoice;
}

let choice = prompt("Choose: rock, paper, or scissors");

function updated_rockPaperScissors(choice) {
    const roboChoice = compPlays();

    if (choice === roboChoice){
        return "Tie."
    }
    else if (choice === "rock" && roboChoice === "scissors" ||
        choice === "scissors" && roboChoice === "paper" ||
        choice === "paper" && roboChoice === "rock") {
            return "You won.";
    } else {
        return "You lost.";
    }
}

console.log(updated_rockPaperScissors(choice));




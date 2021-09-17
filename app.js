// use strict //

let userName = prompt('Welcome! Please Enter your Name');
function nameUser(userName) {
    alert('Welcome ' + userName + ' I hope you enjoy this "about me" guessing game I created!');
    console.log(userName);
}
nameUser(userName);

 let guessCount = 0;

 function favoriteDog(){
    let favoriteAnimal = prompt('Are dogs my favorite animal?');

    let fooanimal = favoriteAnimal.toLowerCase();

    console.log(fooanimal);

    if (fooanimal === 'yes' || fooanimal === 'y') {
        console.log("True");
        alert('That answer is correct!');
        guessCount += 1;
    } else if (fooanimal === 'no' || fooanimal === 'n') {
        alert("That answer is incorrect. Dogs are the best");
        console.log("False"); 
    } else {
        alert('Please enter a valid answer in the form of "Yes" or "No"');
}
 }
 favoriteDog();



function onlyChild(){
    let siblings = prompt("Am I an only child?");
    let foosiblings = siblings.toLowerCase();
    console.log(foosiblings);
    if (foosiblings === 'no' || foosiblings === 'n') {
        console.log("True");
        alert("That answer is correct!");
        guessCount += 1;
    } else if (foosiblings === 'yes' || foosiblings === 'y') {
        alert("That answer is incorrect. Do I seem entitled?");
        console.log("False"); 
    } else {
        alert('Please enter a valid answer in the form of "Yes" or "No"');
}
}
onlyChild();


function averageHeight(){
    let height = prompt("Am I slightly* shorter than average?");
    let fooheight = height.toLowerCase();
    console.log(fooheight);
    if (fooheight === 'no' || fooheight === 'n') {
        console.log("True");
        alert("That answer is correct!");
        guessCount += 1;
    }  else if (fooheight === 'yes' || fooheight === 'y') {
        alert("That answer is incorrect I'm 5 feet 19 inches tall");
        console.log("False"); 
    } else { 
        alert('Please enter a valid answer in the form of "Yes" or "No"');
    }  
}
averageHeight();

function codeBackground(){
    let codingBackground = prompt("Do I have a background in coding?");
    let fooCodingBackground = codingBackground.toLowerCase();
    console.log(fooCodingBackground);
        if (fooCodingBackground === 'no' || fooCodingBackground === 'n') {
            console.log("True");
            alert("That answer is correct!");
            guessCount += 1;
            console.log(fooCodingBackground);
        } else if (fooCodingBackground === 'yes' || fooCodingBackground === 'y') {
            console.log("False"); 
            alert("That answer is incorrect. Thanks for the confidence boost!");
        } else {
            alert('Please enter a valid answer in the form of "Yes" or "No"');
    }
}
codeBackground();


function skateBoardSkill(){
    let skateboarding = prompt("Am I good at skateboarding?");
    let fooSkateBoarding = skateboarding.toLowerCase();
    console.log(fooSkateBoarding);
        if (fooSkateBoarding === 'no' || fooSkateBoarding === 'n') {
            console.log("True");
            alert("That answer is correct! I am terrible at it.");
            guessCount += 1;
            console.log(fooSkateBoarding);
        } else if (fooSkateBoarding === 'yes' || fooSkateBoarding === 'y') {
            console.log("False"); 
            alert("That answer is incorrect. I would face plant 10/10");
        } else {
            alert('Please enter a valid answer in the form of "Yes" or "No"');
    }
}
skateBoardSkill();

function firstDog(userName){
    let correctAnswer = 14;
    let wannaPlay = prompt('Do you want to play a guessing game about me? (Yes or No)');
    console.log(wannaPlay);
    let wonTheGame = false;

    if (wannaPlay.toLowerCase() == 'yes'){
        let numberOfAttempts = 4;
        for (let i = 1; i <= numberOfAttempts; i++){
            let userAnswer = prompt("How old was I when I got my first dog?");
            console.log(i)
            if (userAnswer == correctAnswer){
                wonTheGame = true;
                alert ('You got it right!');
                guessCount += 1;
                break;
            }
            else {
                if(userAnswer < correctAnswer){
                    alert(`Your answer is too low. Try Again! You have ${numberOfAttempts -i} attempts left`);
                } else if (userAnswer > correctAnswer){
                    alert(`Your answer is too high. Try Again! You have ${numberOfAttempts -i} attempts left`);
                }
            }
        } 
    }
    if (wonTheGame){
        alert(`Thank you ${userName} for playing this guessing game. You won!`);
    }
    else {
        alert ('I was 14 when I got my first dog. He was a Whippet that I named Diesel');
        alert(`Thank you ${userName} for playing this guessing game.`);
    }
}
firstDog(userName);

function dogColor(){
    let multiChoiceGame = prompt('Do you want to play a multi-choice guessing game about me? (Yes or No)');
    let multiGame = multiChoiceGame.toLowerCase() == 'yes';
    console.log(multiChoiceGame);
    let wonThePet = false;
    if (multiGame){
        let answer = prompt('What color is one of my dogs?').toLowerCase();
        let correctAnswer = ['white', 'black'];
        let numberOfAttempts = 6;
        for(let i = 1; i < numberOfAttempts; i++){
                console.log("correct answer" , correctAnswer)
                console.log("your answer" , answer)
            if(correctAnswer[0] == answer || 
                correctAnswer[1] == answer){
                wonThePet = true;
                alert('You got it right!');
                guessCount += 1;
                break;
            } else { 
                alert('Incorrect, You have ' + (numberOfAttempts - i) + ' attempts left');
                }
                answer = prompt('What color is one of my dogs?').toLowerCase();
            }
    }
    if (wonThePet){
        alert(`Thank you ${userName} you are correct! My dogs are white, and black`)
    }
    else {
        alert('My dogs colors are black, and white.')
    }
    alert(`Hey ${userName} You got ${guessCount} out of 7 correct`);
}
dogColor();

// Function main2() {
    console.log('I had no partner')
// }
// main2();










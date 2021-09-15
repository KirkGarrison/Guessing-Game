// use strict //

 let userName = prompt('Welcome! Please Enter your Name'); {
      alert('Welcome ' + userName + ' I hope you enjoy this "about me" guessing game I created!');
    console.log(userName);
 }



let favoriteAnimal = prompt('Are dogs my favorite animal?');

let fooanimal = favoriteAnimal.toLowerCase();

console.log(fooanimal);

if (fooanimal === 'yes' || fooanimal === 'y') {
    console.log("True");
    alert('That answer is correct!');
} else if (fooanimal === 'no' || fooanimal === 'n') {
    alert("That answer is incorrect. Dogs are the best");
    console.log("False"); 
} else {
     alert('Please enter a valid answer in the form of "Yes" or "No"');
}





let siblings = prompt("Am I an only child?");

let foosiblings = siblings.toLowerCase();

console.log(foosiblings);

if (foosiblings === 'no' || foosiblings === 'n') {
    console.log("True");
    alert("That answer is correct!");
} else if (foosiblings === 'yes' || foosiblings === 'y') {
    alert("That answer is incorrect. Do I seem entitled?");
    console.log("False"); 
} else {
    alert('Please enter a valid answer in the form of "Yes" or "No"');
}



let height = prompt("Am I slightly* shorter than average?");

let fooheight = height.toLowerCase();

console.log(fooheight);

if (fooheight === 'no' || fooheight === 'n') {
    console.log("True");
    alert("That answer is correct!");
}  else if (fooheight === 'yes' || fooheight === 'y') {
    alert("That answer is incorrect I'm 5 feet 19 inches tall");
    console.log("False"); 
} else { 
    alert('Please enter a valid answer in the form of "Yes" or "No"');
}



let codingBackground = prompt("Do I have a background in coding?");

let fooCodingBackground = codingBackground.toLowerCase();

console.log(fooCodingBackground);

if (fooCodingBackground === 'no' || fooCodingBackground === 'n') {
    console.log("True");
    alert("That answer is correct!");
    console.log(fooCodingBackground);
} else if (fooCodingBackground === 'yes' || fooCodingBackground === 'y') {
    console.log("False"); 
    alert("That answer is incorrect. Thanks for the confidence boost!");
} else {
    alert('Please enter a valid answer in the form of "Yes" or "No"');
}






let skateboarding = prompt("Am I good at skateboarding?");

let fooSkateBoarding = skateboarding.toLowerCase();

console.log(fooSkateBoarding);

if (fooSkateBoarding === 'no' || fooSkateBoarding === 'n') {
    console.log("True");
    alert("That answer is correct! I am terrible at it.");
    console.log(fooSkateBoarding);
} else if (fooSkateBoarding === 'yes' || fooSkateBoarding === 'y') {
    console.log("False"); 
    alert("That answer is incorrect. I would face plant 10/10");
} else {
    alert('Please enter a valid answer in the form of "Yes" or "No"');
}


alert('Thank you ' + userName +' for playing my guessing game. I hope you have a wonderful day!')







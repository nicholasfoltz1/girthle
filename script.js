let idArray = [
  ["a1_hash","a1_1","a1_2","a1_3","a1_4","a1_5","a1_6"],
  ["a2_hash","a2_1","a2_2","a2_3","a2_4","a2_5","a2_6"],
  ["a3_hash","a3_1","a3_2","a3_3","a3_4","a3_5","a3_6"],
  ["a4_hash","a4_1","a4_2","a4_3","a4_4","a4_5","a4_6"],
  ["a5_hash","a5_1","a5_2","a5_3","a5_4","a5_5","a5_6"],
  ["a6_hash","a6_1","a6_2","a6_3","a6_4","a6_5","a6_6"]
];

var rowGuess = 0;
var guess = 1;
var red = 0;
var blue = 0;
var green = 0;
var secret = null;

function generateColor()
{
  red = (Math.floor(Math.random() * 255)).toString(16).toUpperCase();
  console.log(red)
  if(red.length == 1){
    red = "0"+red;
  }
  blue = (Math.floor(Math.random() * 255)).toString(16).toUpperCase();
  if(blue.length == 1){
    blue = "0"+blue;
  }
  green = (Math.floor(Math.random() * 255)).toString(16).toUpperCase();
  if(green.length == 1){
    green = "0"+green;
  }
  secret = "#" + red + green + blue;
  return("#" + red + green + blue);
}

function girthleLogo()
{
  const title = document.getElementById("title");
  title.style.color = generateColor();
}

function giveHint(userGuess, rowGuess)
{
  let text = userGuess.split("").splice(1,6);
  let secretText = secret.split("").splice(1,6);
  console.log(text[0] === secretText[1]);
  for(let i = 0; i < text.length; i++){
    if(text[i] === secretText[i]){
      document.getElementById(idArray[rowGuess-1][i+1]).style.backgroundColor = "#FFFF00";
      text[i] = "X";
      secretText[i] = "X";
    }
    for(let x = 0; x<text.length; x++){
      console.log(text[x]+ ","+secretText[i]);
      if(text[x] === secretText[i] && text[x] != "X"){
        let closeSquare = document.getElementById(idArray[rowGuess-1][x+1])
        if(i < 2){
          closeSquare.style.backgroundColor = "#FF0000";
        }
        else if(i < 4){
          closeSquare.style.backgroundColor = "#00FF00";
        }
        else{
          closeSquare.style.backgroundColor = "#0000FF";
        }
        text[x] == "X";
        secretText[i] == "X";
      }
      else{
        console.log(false);
      }
    }
    console.log(text);
    console.log(secretText);
  }
}

function makeGuess(x)
{
  let userGuess = "#";
  i = 1;
  while(i != 7){
    userGuess += (document.getElementById(idArray[x-1][i]).textContent);
    i++;
  }
  giveHint(userGuess, rowGuess);
  if (userGuess == secret){
    console.log("Cheater");
  }
  else{
    document.getElementById(idArray[x-1][0]).style.backgroundColor = userGuess;
  }
}

girthleLogo();

document.addEventListener('keydown', (event) => {
  if((guess == 7 && event.code == 'Enter') || event.code == 'Backspace'){
    if(event.code == 'Enter'){
      rowGuess++;
      guess = 1;
      makeGuess(rowGuess);
    }
    else if(event.code == 'Backspace' && guess > 1){
      guess--;
      document.getElementById(idArray[rowGuess][guess]).textContent = "";
    }
    else{
      console.log("Cannot Guess anymore characters for this attempt. Press Enter to continue.");
    }
  }
  else if(event.key == '0'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "0";
    guess++;
  }
  else if(event.key == '1'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "1";
    guess++;
  }
  else if(event.key == '2'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "2";
    guess++;
  }
  else if(event.key == '3'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "3";
    guess++;
  }
  else if(event.key == '4'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "4";
    guess++;
  }
  else if(event.key == '5'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "5";
    guess++;
  }
  else if(event.key == '6'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "6";
    guess++;
  }
  else if(event.key == '7'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "7";
    guess++;
  }
  else if(event.key == '8'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "8";
    guess++;
  }
  else if(event.key == '9'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "9";
    guess++;
  }
  else if(event.key == 'a'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "A";
    guess++;
  }
  else if(event.key == 'b'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "B";
    guess++;
  }
  else if(event.key == 'c'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "C";
    guess++;
  }
  else if(event.key == 'd'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "D";
    guess++;
  }
  else if(event.key == 'e'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "E";
    guess++;
  }
  else if(event.key == 'f'){
    document.getElementById(idArray[rowGuess][guess]).textContent = "F";
    guess++;
  }
  else{
    console.log("Not a vaild hexadecimal character. hexadecimal charaters are 0-9, and A-F");
  }
  
});
  
console.log(document.getElementById(idArray[0][0]).textContent);
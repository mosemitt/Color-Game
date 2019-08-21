var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay = document.querySelector("#massage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init() {
     setupModeButtons();
     setupSquares();
    reset();
}

function setupModeButtons() {
       // mode buttons
       for(i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
    
        });
    }
}

function setupSquares() {
    for(i = 0; i < squares.length; i++) {
        // add initial colors to squares
        // squares[i].style.backgroundColor = colors[i];
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor){
                massageDisplay.textContent = "Correct!"; 
                changeColor(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                massageDisplay.textContent = "Try Again";
                resetButton.textContent = "New Colors" 
            }
        });    
    }
}

function reset() {
     // generate all new colors
     colors = generateRandomColor(numSquares);

     massageDisplay.textContent = "";
     resetButton.textContent = "New Color";
 
     // pick a new random color from array
     pickedColor = pickColor();
     // change colorDisplay to match picked Color
     colorDisplay.textContent = pickedColor;
     // change colors of squares
     for(i = 0; i < squares.length; i++) {
         if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]
         }
         else {
             squares[i].style.display = "none"
         }
         
     }
     h1.style.backgroundColor = "steeleBlue";
}


// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected")
//     hardBtn.classList.remove("selected")
//     numSquares = 3;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(i = 0; i < squares.length; i++){
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected")
//     easyBtn.classList.remove("selected")
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// })



resetButton.addEventListener("click", function(){
   reset();
})

function changeColor(el) {
    squares.forEach(function(color){
        color.style.backgroundColor = pickedColor;
    });    
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr  = [];
    for(i = 0; i < num; i++){
        arr.push(randomColor())
    }  
    return arr;  
}

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

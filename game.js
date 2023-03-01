var gamePattern = [];
var userClickedPattern = [];
var buttonColour = ["red","blue","green","yellow"];
var gameStarted = false;
var randomNumber,randomChosenColour;
var level = 0;

$(document).keypress(function(){
    if (gameStarted == false)
    {
        gameStarted = true;
        nextSequence();
    }
    
})

$("#green").click(function(){
    var userChosenColour = "green";
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkResult(level);
})

$("#red").click(function(){
    var userChosenColour = "red";
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkResult(level);

})

$("#yellow").click(function(){
    var userChosenColour = "yellow";
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkResult(level);

})

$("#blue").click(function(){
    var userChosenColour = "blue";
    userClickedPattern.push(userChosenColour);
    playSound("blue");
    animatePress(userChosenColour);
    checkResult(level);

})


function nextSequence()
{
    randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);
    randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    $("#level-title").text("level "+level);
   // level = level + 1;

}

function playSound(colourSelect)
{
    if (colourSelect === 'red')
    {
        var audio = new Audio('sounds/red.mp3');
        audio.play();
    }
    else if (colourSelect === 'blue')
    {
        var audio = new Audio('sounds/blue.mp3');
        audio.play();
    }
    else if (colourSelect === 'green')
    {
        var audio = new Audio('sounds/green.mp3');
        audio.play();
    }
    else if (colourSelect === 'yellow')
    {
        var audio = new Audio('sounds/yellow.mp3');
        audio.play();
    }
    else
    {
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();  
    }

}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    var myTimeout = setTimeout(function(){
        $("#"+currentColour).removeClass("pressed") 
    },100);
}

function checkResult()
{
    if(userClickedPattern.length === gamePattern.length && gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1] ) 
    {
        var myTimeout1 = setTimeout(function(){
            userClickedPattern = [];
            level = level + 1;
            nextSequence();
        },1000);
    }

    if (gamePattern[userClickedPattern.length-1] !== userClickedPattern[userClickedPattern.length-1])
    {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");
        var myTimeout2 = setTimeout(function(){
            $("body").removeClass("game-over") 
        },200);
        gameStarted = false;
        level = 0;
        gamePattern = [];
        userClickedPattern = [];

    }


}


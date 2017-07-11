var wins = 0 ;
var loses = 0 ;
var left = 9 ;
var guesses = [] ;
var botChoice = "" ;
var playerChoice = "" 
var botMath = (Math.random());

// computer guess -- .038
 
        //console.log(botChoice)
        console.log(left);
// playerr choice 
document.onkeyup = function(event) {
         var userChoice = event.key;
         	playerChoice = userChoice ;
         	guesses = guesses  + userChoice + ", ";
         	left-- ;



        if (botMath < 0.038) {
            botChoice = "a";
            console.log("bot-a");
            
        } 
        else if (botMath < 0.076) {
            botChoice = "b";
            console.log("bot-b");
            
        } 
        else if (botMath < 0.114) {
            botChoice = "c";
            console.log("bot-c");
            
        } 
        else if (botMath < 0.152) {
            botChoice = "d";
            console.log("bot-d");
            
        } 
        else if (botMath < 0.19) {
            botChoice = "e";
            console.log("bot-e");
            
        } 
        else if (botMath < 0.228) {
            botChoice = "f";
            console.log("bot-f");
            
        } 
        else if (botMath < 0.266) {
            botChoice = "g";
            console.log("bot-g");
            
        } 
        else if (botMath < 0.304) {
            botChoice = "h";
            console.log("bot-h");
            
        } 
        else if (botMath < 0.342) {
            botChoice = "i";
            console.log("bot-i");
            
        } 
        else if (botMath < 0.38) {
            botChoice = "j";
            console.log("bot-j");
            
        } 
        else if (botMath < 0.418) {
            botChoice = "k";
            console.log("bot-k");
            
        } 
        else if (botMath < 0.456) {
            botChoice = "l";
            console.log("bot-l");
            
        } 
        else if (botMath < 0.494) {
            botChoice = "m";
            console.log("bot-m");
            
        } 
        else if (botMath < 0.532) {
            botChoice = "n";
            console.log("bot-n");
            
        } 
        else if (botMath < 0.57) {
            botChoice = "o";
            console.log("bot-o");
            
        } 
        else if (botMath < 0.608) {
            botChoice = "p";
            console.log("bot-p");
            
        } 
        else if (botMath < 0.646) {
            botChoice = "q";
            console.log("bot-q");
            
        } 
        else if (botMath < 0.684) {
            botChoice = "r";
            console.log("bot-r");
            
        } 
        else if (botMath < 0.722) {
            botChoice = "s";
            console.log("bot-s");
            
        } 
        else if (botMath < 0.76) {
            botChoice = "t";
            console.log("bot-t");
            
        } 
        else if (botMath < 0.798) {
            botChoice = "u";
            console.log("bot-u");
            
        } 
        else if (botMath < 0.836) {
            botChoice = "v";
            console.log("bot-v");
            
        } 
        else if (botMath < 0.874) {
            botChoice = "w";
            console.log("bot-w");
            
        } 
        else if (botMath < 0.912) {
            botChoice = "y";
            console.log("bot-y");
            
        } 
        else if (botMath < 0.95) {
            botChoice = "x";
            console.log("bot-x");
            
        } 
        else {
            botChoice = "z";
            console.log("bot-z");
            
        }

         	console.log(guesses);
         	//console.log(guesses.length);
         	//console.log(playerChoice);
         	console.log(left);
         	compare(playerChoice, botChoice);
if (left < 1) {
	loses++ ; 
	left = 9 ;
	guesses	= "" ;
	botMath = (Math.random()) ;
	console.log("_________________________");
	console.log("loses = " + loses);
}
document.getElementById('wins').innerHTML = "Wins : " + wins;
document.getElementById('loses').innerHTML = "Loses : " + loses;
document.getElementById('left').innerHTML = "Guesses Left : " + left;
document.getElementById('guesses').innerHTML = "Your Guesses so far : " + guesses;            
            };

// wins/lose

function compare(playerChoice, botChoice) {

            //if/else to determine player action/result//
            if (playerChoice == botChoice ) {
                
             botMath = (Math.random()) ;
                wins++ ;
                console.log("wins = " + wins);
                left = 9 ;
                guesses = "" ;
                console.log("||||||||||||||||||||||||||||||||")
            }
};

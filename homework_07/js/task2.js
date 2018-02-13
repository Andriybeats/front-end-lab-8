var max = 5;
var min = 0;
var total = 0;
var prize = 10;
var maxPrize = prize;
var checkGame = confirm("Do you want to play a game ?");
if (!checkGame) {
  console.log("You did not become a millionaire");
} else {
  while (checkGame) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num);
    for (var i = 3; i > 0; i--) {
      var choice = prompt(
        "Please enter a number from " + min + " to " + max + "\n" +
        "Attemts left: " + i + "\n" + "Total prize: " + total + "$\n" +
        "Possible prize in current attempt: " + maxPrize + "$");   
      if (choice == null) {
        checkGame = false;
        console.log("Thank you for a game. Your prize is: " + total + " $");
        break;
      } else if ( isNaN(choice) || choice % 1 != 0 || choice != num) {
        maxPrize = parseInt(maxPrize / 2);   
        if (i == 1) {
          console.log("Thank you for a game. Your prize is: " + total + " $");
          var playAgain = confirm("Do you want try again ?");
          if (playAgain == false) {
            checkGame = false;
            break;
          } else {
            i = i + 3;
            max = 5;
            total = 0;
            maxPrize = 10;
            break;
          }
        }
      } else if (choice == num) {
        total += maxPrize;
        var continueGame = confirm("Do you want to continue the game ?");
        if (continueGame == true) {
          max *= 2;
          prize *= 3;
          maxPrize = prize;
          i = 4;
          break;
        } else {
          console.log("Thank you for a game. Your prize is: " + total + " $");
          var playAgain = confirm("Do you want try again ?");
          if (playAgain == false) {
            checkGame = false;
            break;
          } else {
            i++;
            max = 5;
            total = 0;
            maxPrize = 10;
          }
        }
      } 
    }
  }
}
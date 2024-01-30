function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      } 
      printMessage('Nie znam ruchu ' + argMoveId + '.');
      return 'nieznany ruch';
    }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
    computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
}*/
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} */

printMessage('Twój ruch to: ' + argPlayerMove);

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja Wygrywam!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
        printMessage('Nieznany ruch więc ja wygrywam ;)');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
        printMessage('Nieznany ruch więc ja wygrywam ;)');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
        printMessage('Nieznany ruch więc ja wygrywam ;)');
    }
}

displayResult(argComputerMove, argPlayerMove);

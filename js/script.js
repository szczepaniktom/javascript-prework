{
const playGame = function(playerInput){
    clearMessages();
    
    const getMoveName = function(argMoveId){
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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);
    
    console.log('Gracz wpisał: ' + playerInput);
    const argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    const displayResult = function(argComputerMove, argPlayerMove){
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == argPlayerMove){
            printMessage('Remis!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Ja wygrywam!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ja Wygrywam!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Ja wygrywam!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
            printMessage('Nieznany ruch więc ja wygrywam ;)');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
            printMessage('Nieznany ruch więc ja wygrywam ;)');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
            printMessage('Nieznany ruch więc ja wygrywam ;)');
        }
    }

    displayResult(argComputerMove, argPlayerMove);
}


document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});
}


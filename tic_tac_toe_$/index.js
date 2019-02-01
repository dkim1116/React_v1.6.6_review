var currentPlayer = 'X';

$(document).ready(function(){
    var root = $('#board');
    var squares = $('td');

    $('td').click(function(e, i){
        var player = nextPlayer(currentPlayer);
        $(this).text(player);
        currentPlayer=player;
        validateBoard(squares);

        var validate = validateBoard(squares);

        if (validate) {
            computerMove(squares);
        } else {
            alert("FINISHED!")
        }
    });

});

function nextPlayer(current) {
    var player = current === 'X' ? 'O' : 'X';

    return player;
}

function computerMove(squares) {
    for (var i = 0; i < squares.length; i++) {
        if (!squares.eq(i).text()) {
            var player = nextPlayer(currentPlayer);
            squares.eq(i).text(player);
            currentPlayer = player;
            return;
        }
    }
}

function validateBoard(squares) {
    var horizontal = true;
    var vertical = true;
    var diagonal = true;

    var counter = 3;

    for (var row = 0; row < 3; row++) {
        if (squares.eq(row * counter).text()) {
            if (squares.eq(row * counter).text() === squares.eq(row * counter + 1).text() &&
            squares.eq(row * counter + 1).text() === squares.eq(row * counter + 2).text()) {
                horizontal = false;
            }
        }
    }

    for (var col = 0; col < 3; col++) {
        if (squares.eq(col * counter).text()) {
            if (squares.eq(col).text() === squares.eq(col + counter).text() &&
            squares.eq(col + counter).text() === squares.eq(col + (counter * 2)).text()) {
                vertical = false;
            }
        }
    }

    return horizontal && vertical;
}
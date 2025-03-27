const xButton = document.getElementById('X')
const oButton = document.getElementById('O')
const inputx = document.getElementById('inputx').value
const inputo = document.getElementById('inputo').value
const cancel = document.getElementById('cancel')
const table = document.getElementById("tic-tac-toe-board")

//Функция выбора игрока
document.addEventListener("DOMContentLoaded", function(){
    let currentPlayer =""
    xButton.addEventListener("click", function(){
        console.log(inputx, "Я нажал крестик")
        hideButton();
         currentPlayer="X"
    }); 
    oButton.addEventListener("click", function(){
        console.log(inputo, "Я нажал нолик")
        hideButton()
         currentPlayer="O"
    }); 
   cancel.addEventListener("click", function(){
        console.log(cancel, "Галя, отмена!")
        showButton()
    }); 

    function hideButton(){
        xButton.style.display="none"
        oButton.style.display="none"
        
    }




    function showButton(){
        xButton.style.display="block"
        oButton.style.display="block"
        
    }

    // Ходы
    let board=["","","",
               "","","",
               "","",""]
    
    
    function game(index){
        if(board[index]===""){
            board[index]=currentPlayer
            renderBoard()
            if(checkWin()){
                alert(currentPlayer + "Победител")
                resetGame()
            }else if(board.every(function(cell){
                return cell !== ""
            })){
                alert("Vi Pidori")
                resetGame()
            }else {
                currentPlayer=currentPlayer==="X"?"O":"X"
            }
        }
    }

    function renderBoard(){
        for (let i=0; i<board.length; i++){
            let button = document.getElementById(i+1)
            button.textContent=board[i]
        }
    }

    //
    function checkWin(){
        let winCombo=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        return winCombo.some(function(pattern){
            let a=pattern[0]
            let b=pattern[1]
            let c=pattern[2]
            return board[a] && board[a] === board[b] && board[a] === board[c] 
        })
    }

    let buttons = document.querySelectorAll(".cell button")
        for (let i=0; i<buttons.length; i++){
           ( function(index){
                buttons[index].addEventListener("click", function(){
                    game(index)
                })
            })(i)

        }

        function resetGame(){
            board.fill("")
            currentPlayer=""
            renderBoard()
            showButton()
        }
});

// мердж
// Вот тут какая то хуйня сделана
// жопа сосется жоска
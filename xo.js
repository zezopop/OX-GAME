                // SELECTing ELEMENTS
const selectBox = document.querySelector('.select-box');
const buttonX = selectBox.querySelector('.playerX');
const buttonO = selectBox.querySelector('.playerO');
const playBoard = document.querySelector('.play-board');
const players = document.querySelector('.players');
const allBoxes = document.querySelectorAll('.play-area section span');
const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const playAgainBtn = resultBox.querySelector("button");

window.onload = () => {
            // make loop in spans to add event onclick 
            for (let i = 0; i < allBoxes.length; i++){
                allBoxes[i].setAttribute("onclick","clickedBox(this)");
            };
            // Hiding select-box and showing play-board by clicking any button
        buttonX.onclick = () => {
            // adding class hide on select-box and show on play board when click on x
            selectBox.classList.add("hide");
            playBoard.classList.add("show");
        };
        buttonO.onclick = () => {
            // adding class hide on select-box and show on play board when click on O
            selectBox.classList.add("hide");
            playBoard.classList.add("show");
            players.setAttribute("class","players active player");
        };
};

        // user click function
const playerXIcon1 = "material-symbols-outlined";
const playerXIcon2 = "close";

// const playerOIcon = "fa-thin fa-circle";
const playerOIcon1 = "circle";
const playerOIcon2 = "material-symbols-outlined";

        // win / lose sign
    let playerSign = "x";
        // running bot
        let runBot = true;
            // Adding x / o when click
function clickedBox(element) {
    if (players.classList.contains("player")){

        element.classList.add(playerOIcon2);
        element.innerHTML = playerOIcon1;
        players.classList.add("active");
        playerSign = "o"
        element.setAttribute("id",playerSign);
        
    }else   {
        element.classList.add(playerXIcon1);
        element.innerHTML = playerXIcon2;
        players.classList.add("active");
        playerSign = "x"    
        element.setAttribute("id",playerSign);
    } 
    selectWinne();
    playBoard.style.pointerEvents = "none";
    element.style.pointerEvents = "none";
    const randomBotDelay = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(() => { 
    bot(runBot);
},randomBotDelay);
};

function bot (runBot) { 
    if (runBot ){
            // reset playerSign
        playerSign = "o";
            // loop on spans and find the empty
        const arr = [];
            for(let i = 0   ; i < allBoxes.length; i++){
            // check if span is empty or not 
            if (allBoxes[i].innerHTML === ""){
                arr.push(i);
            };
        };
            const randomBox = arr[Math.floor(Math.random() * arr.length)];
                if (arr.length > 0){

                if (players.classList.contains("player")){
            
                allBoxes[randomBox].classList.add(playerXIcon1);
                allBoxes[randomBox].innerHTML = playerXIcon2;
                players.classList.remove("active");
                playerSign = "x"
                allBoxes[randomBox].setAttribute("id",playerSign);
            
                }else   {
            
                allBoxes[randomBox].classList.add(playerOIcon2);
                allBoxes[randomBox].innerHTML = playerOIcon1;
                players.classList.remove("active");
                allBoxes[randomBox].setAttribute("id",playerSign);
            };
                selectWinne();
            };
        allBoxes[randomBox].style.pointerEvents = "none"
        playBoard.style.pointerEvents = "auto";
    }
};

function getId(idname){
    return document.querySelector(".box" + idname).id
};

function checkId(val1,val2,val3,sign){
    if(getId(val1) == sign && getId(val2) == sign && getId(val3) == sign){
        return true;
    };
};

function selectWinne(){
    if(checkId(1,2,3,playerSign)||checkId(4,5,6,playerSign)||checkId(7,8,9,playerSign)||checkId(1,4,7,playerSign)||checkId(2,5,8,playerSign)||checkId(3,6,9,playerSign)||checkId(1,5,9,playerSign)||checkId(3,5,7,playerSign)){
        // console.log(playerSign+" "+"is the winner");
        runBot = false;
        bot(runBot);
        setTimeout(() => {
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        }, 700);
        wonText.innerHTML = `Player ${playerSign} Won The Match`
    }else {
        if (getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != "" ){
            
            runBot = false;
            bot(runBot);
                setTimeout(() => {
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            }, 700);
            wonText.innerHTML = `Match Has Been drawn`
        }
    }
};

playAgainBtn.onclick = () => {
    window.location.reload();
}




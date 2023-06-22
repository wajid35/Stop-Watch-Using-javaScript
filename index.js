const timerEl = document.getElementById("timer")
const buttonsEl = document.getElementById("buttons")
const startButtonEl  = document.getElementById("start")
const stopButtonEl  = document.getElementById("stop")
const resetButtonEl  = document.getElementById("reset")


let startTime = 0;
let elapasedTime = 0;
let timerInterval;



startButtonEl.addEventListener("click", startTimer)
stopButtonEl.addEventListener("click", stopTimer)
resetButtonEl.addEventListener("click", resetTimer)




function startTimer(){
    console.log("Clicked?")
    startTime = Date.now() - elapasedTime;

    timerInterval = setInterval(()=>{
    elapasedTime = Date.now() - startTime;
    timerEl.textContent= formatTime(elapasedTime); 

    }, 10)

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

function formatTime(elapasedTime){
    const miliseconds = Math.floor((elapasedTime % 1000) / 10) ;
     
    const seconds = Math.floor((elapasedTime % (1000 *60)) / 1000) ;


    const minuts = Math.floor((elapasedTime % (1000 *60*60)) / (1000*60));

    const hours = Math.floor(elapasedTime / (1000 *60*60)) / (1000*60);



    return (


        (hours ? (hours > 9 ? hours : "0" + hours): "00") +

        ":" +

        (minuts ? (minuts > 9 ? minuts : "0" + minuts): "00") +

        ":" +

        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")+
        "." +

        (miliseconds > 9 ? miliseconds : "0" + miliseconds)
        
    );
}

function stopTimer(){
    console.log("stoped")

    clearInterval(timerInterval)
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}


function resetTimer(){
    clearInterval(timerInterval)
    console.log("reset?")

    elapasedTime = 0;
    timerEl.textContent= "00:00:00";
   
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}






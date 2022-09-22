let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let whoWins =  document.getElementById("who-wins")
let containerHome = document.getElementById("container-home")
let containerGuest = document.getElementById("container-guest")
let resetBtn = document.getElementById("reset-btn")

let scoreHome = 0
let scoreGuest = 0
let scoreWin = 15

function add1Home(){
    scoreHome = scoreHome +1
    homeScore.innerHTML = scoreHome

    if(scoreHome == scoreWin || scoreHome > scoreWin){
        containerHome.style.backgroundColor="#ABEBC6"
        homeScore.style.color="#17202A"
        whoWins.innerHTML="HOME TEAM WINS"
    }

}

function add2Home(){
    scoreHome = scoreHome +2
    homeScore.innerHTML = scoreHome

    if(scoreHome == scoreWin || scoreHome > scoreWin){
      containerHome.style.backgroundColor="#ABEBC6"
      homeScore.style.color="#17202A"
      whoWins.innerHTML="HOME TEAM WINS"
    }
}

function add3Home(){
    scoreHome = scoreHome +3
    homeScore.innerHTML = scoreHome

    if(scoreHome == scoreWin || scoreHome > scoreWin){
      containerHome.style.backgroundColor="#ABEBC6"
      homeScore.style.color="#17202A"
      whoWins.innerHTML="HOME TEAM WINS"
    }
}

function add1Guest(){
   scoreGuest = scoreGuest +1
    guestScore.innerHTML = scoreGuest

    if(scoreGuest == scoreWin || scoreGuest > scoreWin){
      containerGuest.style.backgroundColor="#ABEBC6"
      guestScore.style.color="#17202A"
      whoWins.innerHTML="GUEST TEAM WINS"
    }
}

function add2Guest(){
    scoreGuest = scoreGuest +2
    guestScore.innerHTML = scoreGuest

    if(scoreGuest == scoreWin || scoreGuest > scoreWin){
      containerGuest.style.backgroundColor="#ABEBC6"
      guestScore.style.color="#17202A"
      whoWins.innerHTML="GUEST TEAM WINS"
    }
}

function add3Guest(){
    scoreGuest = scoreGuest +3
    guestScore.innerHTML = scoreGuest

    if(scoreGuest == scoreWin || scoreGuest > scoreWin){
      containerGuest.style.backgroundColor="#ABEBC6"
      guestScore.style.color="#17202A"
      whoWins.innerHTML="GUEST TEAM WINS"
    }
}


resetBtn.addEventListener("click", function(){
  scoreHome = 0
  scoreGuest = 0
  homeScore.innerHTML = scoreHome
  guestScore.innerHTML = scoreGuest
  containerHome.style.backgroundColor=""
  containerGuest.style.backgroundColor=""
  whoWins.innerHTML=""

})

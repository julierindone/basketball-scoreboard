// javascript

let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

let homeLeadEl = document.getElementById("home-lead")
let guestLeadEl = document.getElementById("guest-lead")

function add(numPoints, team = "home") {
  if (team == "guest") {
    guestScore += numPoints
    guestScoreEl.textContent = guestScore
  }

  else {
    homeScore += numPoints
    homeScoreEl.textContent = homeScore
  }
  console.log(homeScore + " vs " + guestScore)

  lightBorder()
}

function lightBorder() {
  console.log("lightborder round: " + homeScore + " vs " + guestScore)

  let lightBorderStyle = "2px dotted #FBBF24"
  let noBorderStyle = "2px solid #080001"
  // let guestBorderStyle = "1px dotted red"

  if (homeScore > guestScore) {
    homeLeadEl.style.border = lightBorderStyle
    guestLeadEl.style.border = noBorderStyle

  }
  else if (guestScore > homeScore) {
    guestLeadEl.style.border = lightBorderStyle
    homeLeadEl.style.border = noBorderStyle

  }
  else {
    homeLeadEl.style.border = lightBorderStyle
    guestLeadEl.style.border = lightBorderStyle
  }
}
function resetScore() {
  homeScore = 0
  guestScore = 0

  homeScoreEl.textContent = homeScore
  guestScoreEl.textContent = guestScore
}

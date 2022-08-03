//------------------- Update text for last
var selectedTimeFrame = "weekly"
const cardLastTimeFrame = document.querySelectorAll(".last-time-frame");
function updateSelectedTimeFrame() {
    if (selectedTimeFrame == "weekly") {
        cardLastTimeFrame.forEach(element => {
            element.textContent = "Last Week";
        })
    }
    if (selectedTimeFrame == "daily") {
        cardLastTimeFrame.forEach(element => {
            element.textContent = "Yesterday";
        })
    }
    if (selectedTimeFrame == "monthly") {
        cardLastTimeFrame.forEach(element => {
            element.textContent = "Last Month";
        })
    }
}

//------------------- Menu buttons
const timeFrameButtons = document.querySelectorAll(".time-buttons > div")
timeFrameButtons.forEach (element => {
    element.addEventListener("click", updateTimeFrame);
})
function updateTimeFrame(event) {
    timeFrameButtons.forEach(element => {
        element.classList.remove("active");
    })
    event.target.classList.add("active");
    selectedTimeFrame = event.target.innerText.toLowerCase();
    updateSelectedTimeFrame();
    updateTimeValues();
}

//------------------- Update Values
const currentTimeValues = document.querySelectorAll(".time-val");
const lastTimeValues = document.querySelectorAll(".last-time");
console.log(currentTimeValues[0]);
console.log(lastTimeValues[0]);
function updateTimeValues() {
    if (selectedTimeFrame == "weekly") {
        let currentData = 1;
        for (let card = 0; card < 7; card++) {
            currentTimeValues[card].textContent = allTimeFrames[currentData].current;
            lastTimeValues[card].textContent = allTimeFrames[currentData].previous;
            currentData += 3;
        }
    }
    if (selectedTimeFrame == "daily") {
        let currentData = 0;
        for (let card = 0; card < 7; card++) {
            currentTimeValues[card].textContent = allTimeFrames[currentData].current;
            lastTimeValues[card].textContent = allTimeFrames[currentData].previous;
            currentData += 3;
        }
    }
    if (selectedTimeFrame == "monthly") {
        let currentData = 2;
        for (let card = 0; card < 7; card++) {
            currentTimeValues[card].textContent = allTimeFrames[currentData].current;
            lastTimeValues[card].textContent = allTimeFrames[currentData].previous;
            currentData += 3;
        }
    }
}






var allTimeFrames = [];
const app = function() {
    fetch("data.json")
    .then(resp => resp.json())
    .then (jsonData => {
        for (let i = 0; i < jsonData.length; i++) {
            allTimeFrames.push(jsonData[i].timeframes.daily);
            allTimeFrames.push(jsonData[i].timeframes.weekly);
            allTimeFrames.push(jsonData[i].timeframes.monthly);
        }
        console.log(allTimeFrames);
        updateSelectedTimeFrame();
        updateTimeValues();
    });
}
// work : daily = allTimeFrames[0].current ,
//                 allTimeFrames[0].previous
//        weekly   allTimeFrames[1].current
//                 allTimeFrames[1].previous
//        monthly  allTimeFrames[2].current
//                 allTimeFrames[2].previous
// play : daily = allTimeFrames[3].current ,
//                 allTimeFrames[3].previous
//        weekly   allTimeFrames[4].current
//                 allTimeFrames[4].previous
//        monthly  allTimeFrames[5].current
//                 allTimeFrames[5].previous
// study : daily = allTimeFrames[6].current ,
//                 allTimeFrames[6].previous
//        weekly   allTimeFrames[7].current
//                 allTimeFrames[7].previous
//        monthly  allTimeFrames[8].current
//                 allTimeFrames[8].previous
// exercise : daily = allTimeFrames[9].current ,
//                 allTimeFrames[9].previous
//        weekly   allTimeFrames[10].current
//                 allTimeFrames[10].previous
//        monthly  allTimeFrames[11].current
//                 allTimeFrames[11].previous
// social : daily = allTimeFrames[12].current ,
//                 allTimeFrames[12].previous
//        weekly   allTimeFrames[13].current
//                 allTimeFrames[13].previous
//        monthly  allTimeFrames[14].current
//                 allTimeFrames[14].previous
// selfCare : daily = allTimeFrames[15].current ,
//                 allTimeFrames[15].previous
//        weekly   allTimeFrames[16].current
//                 allTimeFrames[16].previous
//        monthly  allTimeFrames[17].current
//                 allTimeFrames[17].previous






app();
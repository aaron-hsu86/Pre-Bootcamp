// Function to provide reward based on time of day
function reward(time, AMPM, day){
    var reward = "nothing";
    // Valid time check
    // Code flow not working as intended, staying to a 12-hour time input
    /*if ((time >= 24 || time < 0) || (time >= 0 && time <= 12 && AMPM == undefined) || (time > 12 && AMPM !== undefined)){
        console.log("Invalid time!");
        return;
    }*/
    if (time <= 0 || time > 12){
        console.log("Time is invalid. Please use correct 12-hour time format.")
        return;
    }
    if (AMPM.toLowerCase() == "am" || AMPM.toLowerCase() == "pm"){
        // this is fine, do nothing
    } else {
        console.log("Time is invalid. Please use correct 12-hour time format.")
        return;
    }


    // Standardize/shorten date
    var shortDay = '';
    if (day != undefined && day.length>=3){
                for (var i = 0; i < 3; i++){
            shortDay += day[i].toLowerCase();
        }
        // day = shortDay;
        // console.log(shortDay);
    }

    // 12-hour or 24-hour check, convert to 24
    if (AMPM != undefined){
        if (AMPM.toLowerCase() === "pm" && time < 12){
            time += 12;            
        } else if (AMPM.toLowerCase() === "am" && time === 12){
            time = 0;
        }
        // console.log("time change to", time+"00");
    }

    var Rewards1 = ["Ice Cream", "Cookies", "Candy"];
    var Rewards2 = ["Hot Chocolate", "Tea", "Cake"];
    // Check time for rewards
    if (time < 10){
        reward = "latte";
    } else if (time >= 15 && time < 18){
        // Check if time is even
        if (time%2 === 0){
            reward = Rewards1[Math.round(Math.random()*3)];
        } else {
            reward = Rewards2[Math.round(Math.random()*3)];
        }
    } else if ( time < 16){
        reward = "hot chocolate";
    } else if ( time < 22){
        reward = "Ice Cream";
    } else {
        console.log("Go to sleep!");
        // Exit function after telling user to go to sleep
        return;
    }

    //console.log(shortDay);
    // Ice Cream day check
    if (reward == "Ice Cream" && shortDay == "wed"){
        reward = "Strawberry Ice Cream";
    } else if (reward == "Ice Cream"){
        reward = "Vanilla Ice Cream";
    }

    console.log("Go get some", reward);
    // return reward;
}

// reward (time, am/pm, day)
reward(1, "PM", "thursday"); // Vanilla Ice Cream
reward(9, "PM", "wed");
// Invalid times check
reward(0);
reward(25);
reward(13, "PM");
// check conditional rewards
reward(4, "PM", "wed")
reward(4, "PM", "wed")
reward(4, "PM", "wed")
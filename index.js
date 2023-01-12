// Code your solution in this file!


//blocks test
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

//distance test
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

//distance travelled test
function distanceTravelledInFeet(y1, y2){
    return Math.abs((y2-y1) * 264)
}

function calculatesFarePrice(y1, y2){
    const distance = distanceTravelledInFeet(y1, y2);

    if (distance < 400){                // less than 400: free
        return 0;

    } else if (distance < 2000){        // less than 2000: 0.02 rate
        return (distance - 400) * 0.02;

    } else if (distance < 2500){        // less than 2500: flat rate 
        return 25;

    } else {                            // greater than 2500: too much
        return "cannot travel that far"
    }
}
function distanceFromHqInBlocks(n){
    if (n < 42){
        return (42 - n);
    }
    else if(n >= 42){
        return (n - 42);
    }
}

function distanceFromHqInFeet(m){
    let num = distanceFromHqInBlocks(m);
    return (num * 264);
}

function distanceTravelledInFeet(s,d){
    let distance = (d - s) * 264;
    return Math.abs(distance);
}

// console.log(distanceTravelledInFeet(50,58))

function calculatesFarePrice(s,d){
    let distance = distanceTravelledInFeet(s,d);
    if (distance <= 400){
        return 0;
    }
    else if(distance > 400 && distance <= 2000){
        let fee = (distance - 400) * 0.02;
        return fee;
    }
    else if(distance > 2000 && distance <= 2500){
        return 25;
    }
    else if(distance > 2500){
        return "cannot travel that far";
    }
}

// console.log(calculatesFarePrice(34,32))
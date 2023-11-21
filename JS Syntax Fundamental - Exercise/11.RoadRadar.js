function roadRadar(currentSpeed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentalLimit = 20;
    let speedingStatus = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            if (currentSpeed <= motorwayLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${motorwayLimit} zone`);
            } else {
                speedingStatus = currentSpeed - motorwayLimit;
                if(speedingStatus <= 20){
                    status = 'speeding';
                } else if (speedingStatus > 20 && speedingStatus <= 40){
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedingStatus} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
            }
            break;
        case 'interstate':
            if (currentSpeed <= interstateLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${interstateLimit} zone`);
            } else {
                speedingStatus = currentSpeed - interstateLimit;
                if(speedingStatus <= 20){
                    status = 'speeding';
                } else if (speedingStatus > 20 && speedingStatus <= 40){
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedingStatus} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
            }
            break;
        case 'city':
            if (currentSpeed <= cityLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${cityLimit} zone`);
            } else {
                speedingStatus = currentSpeed - cityLimit;
                if(speedingStatus <= 20){
                    status = 'speeding';
                } else if (speedingStatus > 20 && speedingStatus <= 40){
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedingStatus} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
            }
            break;
        case 'residential':
            if (currentSpeed <= residentalLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${residentalLimit} zone`);
            } else {
                speedingStatus = currentSpeed - residentalLimit;
                if(speedingStatus <= 20){
                    status = 'speeding';
                } else if (speedingStatus > 20 && speedingStatus <= 40){
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedingStatus} km/h faster than the allowed speed of ${residentalLimit} - ${status}`);
            }
            break;
    }
}
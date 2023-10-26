function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek) {
    let totalPrice;
    switch (dayOfTheWeek) {
        case 'Friday':
            switch (typeOfGroup) {
                case 'Students':
                    totalPrice = groupOfPeople * 8.45;
                    if (groupOfPeople >= 30) {
                        totalPrice = totalPrice * 0.85;
                    }
                    break;
                case 'Business':
                    totalPrice = groupOfPeople * 10.90;
                    if (groupOfPeople >= 100) {
                        totalPrice = totalPrice - 10 * 10.90;
                    }
                    break;
                case 'Regular':
                    totalPrice = groupOfPeople * 15;
                    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                        totalPrice = totalPrice * 0.95;
                    }
                    break;
            }
            break;
        case 'Saturday':
            switch (typeOfGroup) {
                case 'Students':
                    totalPrice = groupOfPeople * 9.80;
                    if (groupOfPeople >= 30) {
                        totalPrice = totalPrice * 0.85;
                    }
                    break;
                case 'Business':
                    totalPrice = groupOfPeople * 15.60;
                    if (groupOfPeople >= 100) {
                        totalPrice = totalPrice - 10 * 15.60;
                    }
                    break;
                case 'Regular':
                    totalPrice = groupOfPeople * 20;
                    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                        totalPrice = totalPrice * 0.95;
                    }
                    break;
            }
            break;
        case 'Sunday':
            switch (typeOfGroup) {
                case 'Students':
                    totalPrice = groupOfPeople * 10.46;
                    if (groupOfPeople >= 30) {
                        totalPrice = totalPrice * 0.85;
                    }
                    break;
                case 'Business':
                    totalPrice = groupOfPeople * 16;
                    if (groupOfPeople >= 100) {
                        totalPrice = totalPrice - 10 * 16;
                    }
                    break;
                case 'Regular':
                    totalPrice = groupOfPeople * 22.50;
                    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                        totalPrice = totalPrice * 0.95;
                    }
                    break;
            }
            break;
    }
    console.log("Total price: " + totalPrice.toFixed(2));
}
vacation(40,
    "Regular",
    "Saturday"
      )
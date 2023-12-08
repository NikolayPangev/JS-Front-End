function orders(product, number) {
    let result = 0;
    switch (product) {
        case 'coffee':
            result = number * 1.50;
            console.log(result.toFixed(2));
            break;
        case 'water':
            result = number * 1.00;
            console.log(result.toFixed(2));
            break;
        case 'coke':
            result = number * 1.40;
            console.log(result.toFixed(2));
            break;
        case 'snacks':
            result = number * 2.00;
            console.log(result.toFixed(2));
            break;
    }
}
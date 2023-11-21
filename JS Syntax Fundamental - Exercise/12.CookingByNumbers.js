function cooking(num, op1, op2, op3, op4, op5) {
    let numAsString = Number(num);
    let arrOp = [];
    arrOp.push(op1);
    arrOp.push(op2);
    arrOp.push(op3);
    arrOp.push(op4);
    arrOp.push(op5);

    for (let i = 0; i < arrOp.length; i++) {
        let currentOperation = arrOp[i];

        switch (currentOperation) {
            case 'chop':
                numAsString /= 2;
                break;
            case 'dice':
                numAsString = Math.sqrt(numAsString);
                break;
            case 'spice':
                numAsString += 1;
                break;
            case 'bake':
                numAsString *= 3;
                break;
            case 'fillet':
                numAsString *= 0.8;
                break;
        }
        console.log(numAsString);
    }
}
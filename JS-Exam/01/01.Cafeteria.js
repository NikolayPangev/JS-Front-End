function solve(input) {
    const baristas = {};
    const orders = [];

    const numberOfBaristas = parseInt(input.shift());
    for (let i = 0; i < numberOfBaristas; i++) {
        const [name, shift, coffees] = input.shift().split(' ');
        baristas[name] = {
            shift,
            drinks: coffees.split(',')
        };
    }

    while (input.length > 0) {
        const [command, ...data] = input.shift().split(' / ');

        switch (command) {
            case 'Prepare':
                const [prepBaristaName, prepShift, prepCoffeeType] = data;
                const prepBarista = baristas[prepBaristaName];

                if (prepBarista && prepBarista.shift === prepShift && prepBarista.drinks.includes(prepCoffeeType)) {
                    orders.push(`${prepBaristaName} has prepared a ${prepCoffeeType} for you!`);
                } else {
                    orders.push(`${prepBaristaName} is not available to prepare a ${prepCoffeeType}.`);
                }
                break;

            case 'Change Shift':
                const [shiftBaristaName, newShift] = data;
                baristas[shiftBaristaName].shift = newShift;
                orders.push(`${shiftBaristaName} has updated his shift to: ${newShift}`);
                break;

            case 'Learn':
                const [learnBaristaName, newCoffeeType] = data;
                const learnBarista = baristas[learnBaristaName];

                if (learnBarista && learnBarista.drinks.includes(newCoffeeType)) {
                    orders.push(`${learnBaristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    baristas[learnBaristaName].drinks.push(newCoffeeType);
                    orders.push(`${learnBaristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }
                break;
        }
    }

    for (const order of orders) {
        console.log(order);
    }

    for (const [name, { shift, drinks }] of Object.entries(baristas)) {
        console.log(`Barista: ${name}, Shift: ${shift}, Drinks: ${drinks.join(', ')}`);
    }
}

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
)
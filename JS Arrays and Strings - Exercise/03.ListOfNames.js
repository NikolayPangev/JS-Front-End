function listNames(names) {
    names.sort((a, b) => {
        return a.localeCompare(b);
    });
    let index = 1;

    for (let name of names) {
        console.log(`${index}.${name}`);
        index++;
    }
}

listNames(["John", "Bob", "Christina", "Ema"])
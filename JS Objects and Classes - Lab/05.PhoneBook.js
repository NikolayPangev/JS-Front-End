function phoneBook(arrStr) {
    const phoneBook = {};

    for (const element of arrStr) {
        const [name, phone] = element.split(' ');
        phoneBook[name] = phone;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
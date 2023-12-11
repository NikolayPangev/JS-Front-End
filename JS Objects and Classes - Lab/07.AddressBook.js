function addressBook(arrStr){
    const addressBook = {};

    for (const element of arrStr) {
        const [name, address] = element.split(':');
        addressBook[name] = address;
    }

    const sortedAddresses = Object.keys(addressBook).sort();

    for (const name of sortedAddresses) {
        console.log(`${name} -> ${addressBook[name]}`);
    }
}
function createDictionary(input) {
    let dictionary = {};

    for (const string of input) {
        let sentence = JSON.parse(string);

        for (const term in sentence) {
            dictionary[term] = sentence[term];
        }
    }

    let sortedTerms = Object.keys(dictionary).sort();

    sortedTerms.forEach(term => {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    });
}
function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (currentCase === 'Camel Case') {
    let sentence = [];

    input = input.split(' ');

    sentence.push(input[0].toLowerCase());

    for (let index = 1; index < input.length; index++) {
      sentence.push(input[index].charAt(0).toUpperCase() + input[index].slice(1).toLowerCase());
    }
    result.textContent = sentence.join('');

  } else if (currentCase === 'Pascal Case') {
    let sentence = [];

    input = input.split(' ');

    for (let index = 0; index < input.length; index++) {
      sentence.push(input[index].charAt(0).toUpperCase() + input[index].slice(1).toLowerCase());
    }

    result.textContent = sentence.join('');
  } else {
    result.textContent = 'Error!';
  }
}

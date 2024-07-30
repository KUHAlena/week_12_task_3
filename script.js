const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomIndex = Array.from({ length: 4 }, () => Math.floor(Math.random() * alphabet.length));
const randomWord = randomIndex.map(index => alphabet[index]).join('');
console.log(randomWord);
// Get a random number in a given min, max range.
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// Scramble up words in the supplied sentence.
const scramble = sentence => {
  const words = sentence.split(' ');
  const scrambledWords = [];

  for (const word of words) {
    if (word.length > 3) {
      // Keep the first and last letters, scramble the rest...
      const middleLetters = word.substring(1, word.length - 1);
      const scramble = [];

      for (c of middleLetters) {
        scramble.push(c);
      }

      // Do some pair swaps in the middle letters...
      for (let n = 0; n < scramble.length; n++) {
        const pos1 = getRandom(0, scramble.length);
        const pos2 = getRandom(0, scramble.length);

        const tmp = scramble[pos1];
        scramble[pos1] = scramble[pos2];
        scramble[pos2] = tmp;
      }

      // Reassemble the scrambled word...
      scrambledWords.push(word[0] + scramble.join('') + word[word.length - 1]);
    } else {
      // Words of 3 letters or less need no scrambling...
      scrambledWords.push(word);
    }
  }

  // Reassemble the sentence from the array of words.
  return scrambledWords.join(' ');
};

// Run scramble five times to test it.
for (let n = 0; n < 5; n++) {
  console.log(scramble('This sentence should be perfectly legible'));
}
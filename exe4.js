 function vowelCount(str) {
  const vowels = 'aeiou';
  const counts = {};

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  return counts;
}

console.log(vowelCount('hello world'));
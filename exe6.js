function shiftLetters(str) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  return str.toLowerCase().split('').map((ch) => {
    const i = abc.indexOf(ch);
    return i === -1 ? ch : abc[(i + 1) % 26];
  }).join('');
}
console.log(shiftLetters('abc'))
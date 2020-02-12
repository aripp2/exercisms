//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let letters = sentence.toLowerCase();
  return (letters.match(/([a-z])(?!.*\1)/g) || []).length === 26;
};

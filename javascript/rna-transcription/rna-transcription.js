//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let dnaList = dna.split('');
  let rnaList = dnaList.map(letter => {
    switch (letter) {
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        return letter;
    }
  })
  return rnaList.join('')
};

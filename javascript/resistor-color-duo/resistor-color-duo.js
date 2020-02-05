//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  const resistorColors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  let values = colors.map(color => {
    return resistorColors.findIndex(currentColor => currentColor === color).toString()
  })
  return +(values[0] + values[1]);
};

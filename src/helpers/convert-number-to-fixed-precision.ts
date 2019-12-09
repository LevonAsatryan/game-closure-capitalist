// This function is needed just because why floating point numbers work in general
// this is so we don't have weird numbers on the UI
export const convertNumberToFixed = (num: number, precision: number): string => {
    const numTextArray = num.toString().split('.');
    if (numTextArray.length < 2) return numTextArray[0];
    numTextArray[1] = numTextArray[1].slice(0, precision);
    return numTextArray.join('.');
};

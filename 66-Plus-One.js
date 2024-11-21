/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // start from the last element of the arry
    for (let i = digits.length -1; i>=0; i--){

        //check if the current+1  not equal to 10 | 
        if (digits[i] + 1 !== 10){
            digits[i] += 1;   //  Add the current one 
            return digits;
        }
        // if the result is 10, set the digit to 0 and move to the previous digit
        digits[i] = 0;

// if all digits become 0 (like 999), add 1 to the beginning of the array.
        if(i === 0){
            digits.unshift(1);
            return digits;
        }
    }
};
// Explanation of the problem :
// https://youtu.be/jIaA8boiG1s?si=3_JMfPRLM2Mf4KAv
// https://youtu.be/9Ea9RH7Dm-g?si=821pPbLVzmhmc4gS
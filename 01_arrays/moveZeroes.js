// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    let finalArray = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            finalArray.push(0);
        } else {
            finalArray.unshift(nums[i]);
        }
    }

    return finalArray;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

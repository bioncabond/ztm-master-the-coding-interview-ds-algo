/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const finalArray = [];
    const objIndices = {};

    for (let i = 0; i < nums.length; i++) {
        if (objIndices.hasOwnProperty(target - nums[i])) {
            finalArray.push(objIndices[target - nums[i]]);
            finalArray.push(i);
        } else {
            objIndices[nums[i]] = i;
        }
    }

    return finalArray;
};

console.log(twoSum([3, 2, 4], 6));

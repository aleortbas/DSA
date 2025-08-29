const nums = [0, 1, 2, 3, 4]
const index = [0, 1, 2, 2, 1]
const array = []

/* array.splice(index[0],0,nums[0])
array.splice(index[1],0,nums[1])
array.splice(index[2],0,nums[2])
array.splice(index[3],0,nums[3])
 */

for (let i = 0; i < nums.length; i++) {
    array.splice(index[i], 0, nums[i])
}

console.log(array);

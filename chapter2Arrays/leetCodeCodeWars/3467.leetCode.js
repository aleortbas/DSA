const nums = [4, 3, 2, 1]

const orderResults = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        nums[i] = 0
    } else {
        nums[i] = 1
    }
}
console.log(nums.sort());

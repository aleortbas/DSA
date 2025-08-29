let nums = [8,1,2,2,3]
let smaller = []

for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
           count++
        }    
    }
    smaller.push(count)
}

console.log("out: ",smaller);


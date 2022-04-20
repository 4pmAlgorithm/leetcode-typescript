function twoSum(nums: number[], target: number):number[]{
    let indices:{}
}

function twoSum(nums: number[], target: number): number[]{
    let numberMap = new Map();

    for(let i = 0; i< nums.length; i++){
        let diff = target - nums[i]
        if(numberMap.has(diff))return [numberMap.get(diff), i]

        numberMap.set(nums[i], i)
    }
}


//2022/04/19 Tuesday 9:26pm
function twoSum(nums: number[], target: number): number[] {

    let obj = {};
 
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        
        if(obj.hasOwnProperty(diff)){
            return [obj[diff], i]
        }
        obj[nums[i]] = i
    }
    return 
};
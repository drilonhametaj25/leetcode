/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m = 0;
    while(l<=r){
        m = l+parseInt((r-l)/2);
        if(nums[m] == target){
            return m;
        }else if(nums[m] < target){
            l = m+1;
        } else if(nums[m] > target){
            r = m-1;
        }
    }
    if(nums[l]>target){
        return l;
    } else if(nums[r]<target){
        return r+1;
    }
};
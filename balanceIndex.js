// Here, a balance point is on an index, not between indices.
// Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1



//[-2,5,7,0,3] --> 2


function balanceIndex(arr){

    let totalValue = arr.reduce((currentValue, nextValue) => currentValue + nextValue, 0);
    let runningValue = arr[0]; 

    if (arr.length===1) {
        return 0;
    }

    for (let i=0;i<arr.length;i++) {
        if (totalValue!=runningValue) {
            runningValue += arr[i+1]
            totalValue -= arr[i];
        }
        else {
            return i;
        }
    }
    return -1;
}



console.log(balanceIndex([-2,5,7,0,3])) // 2
//           i: 0 ----> 1 ----> 2
// running value: -2 ---> 3 ---> 10
// total value: 13 ---> 15 ---> 10


console.log(balanceIndex([-5,2,4,6,7,8,2,-3])) // 4

console.log(balanceIndex([12])); // 0

console.log(balanceIndex([-1,2])); // -1
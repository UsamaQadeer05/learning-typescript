"use strict";
let arr = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
// 1. Find Even Numbers in an Array
console.log('Even Numbers');
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 == 0) {
        console.log(element);
    }
}
console.log(arr.filter(element => element % 2 == 0));
// // 2. Find Odd Numbers in an Array
// console.log('\n\n\nOdd Numbers');
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element % 3 == 0) {
//         console.log(element);
//     }
// }
// // 3. Find Sum of Array Elements
// console.log('\n\n\nSum of Array Elements');
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
// }
// // 4. Find Maximum Numbers in an Array
// console.log('\n\n\nMaximum Number');
// let maximum = arr[0];
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] > maximum)
//         maximum = arr[index];
// }
// console.log('Maximum Number'+ maximum);
// // 5. Filter Positive Numbers from an Array & their sum
// let pos_sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] >= 0){
//         console.log(arr[index]);
//         pos_sum += arr[index];
//     }
// }
// console.log(pos_sum);
// // 6. Filter Negative Numbers from an Array & their sum
// let neg_sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] < 0){
//         console.log(arr[index]);
//         neg_sum += arr[index];
//     }
// }
// console.log(neg_sum);

const userOrderString = prompt(
    "Please enter your flavors here separated by comma's.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);
const stringArray = userOrderString.split(", ");
console.log(stringArray);

// let flavors = 0;
// for (let i=0; i<stringArray.length; i++) {
//     if (stringArray[i].status === '0') flavors++;
// }
// console.log(flavors);

// function flavorCount() {
//     let count = stringArray;
//     console.log((r.match(stringArray)).length);
// }

let flavorTotal = {};
for (let str of stringArray) {
        if (flavorTotal[str]) {
            flavorTotal[str]++;
            }else {
                flavorTotal[str]=1;
    }
}
console.log(flavorTotal);

alert(JSON.stringify(flavorTotal));

























// const stringArray = userOrderString.split(",");
// const flavors = [];
// for (let i = 0; i < stringArray.length; i++) {
//   const str = stringArray[i];
//   const flavor = parseInt(str);
//   flavors.push(flavor);
// }
// console.log(`You have ordered the flavors ${fullOrder(flavors)}.`);

// /** 
//  * @param {flavor[]} numbers an array of integers
//  * @returns {flavor} the length of the array
//  */

// function fullOrder(order) {
//     let total = 0; 
//     for (const flavors in order) {
//         total += order[flavors]
//     }
//     return total;
// };
// console.log(total);

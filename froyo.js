const userOrderString = prompt(
    "Please enter your flavors here.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const stringArray = userOrderString.split(",");
const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const flavor = parseInt(str);
  flavors.push(flavor);
}
console.log('You have ordered the flavors ${fullOrder(flavors)}.');

/** 
 * @param {flavor[]} numbers an array of integers
 * @returns {flavor} the length of the array
 */
function fullOrder(order) {
    let total = 0; 
    for (const flavors in order) {
        total += order[flavors]
    }
    return total;
};
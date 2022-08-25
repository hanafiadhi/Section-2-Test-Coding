/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4
 };

function result(numbers) {
   // Your Code Here
   let data = {...numbers}
    let a = data.a = [data.b, data.b = data.a][0]
    let b = data.b = [data.b, data.b = data.a][0]
    return {
        a,b
    }
}
 
console.log(result(numbers));


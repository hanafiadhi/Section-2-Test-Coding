/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
  // your code here
  return data.filter(el => el)
}

console.log(result(data));


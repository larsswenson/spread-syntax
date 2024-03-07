// Sum function taking 3 arguments
function sum(a, b, c) {
    return a + b + c;
}

// Numbers array w/ 3 elements
const numbers = [2, 4, 6];

// Call sum function w/ spread syntax to pass elements of numbers as arguments
const result = sum(...numbers);

// 12
console.log("Result:", result); 

/////////////////////////////////////////


// Initial separate arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge into new array w/ spread syntax
const mergedArray = [...array1, ...array2];

// [1, 2, 3, 4, 5, 6]
console.log(mergedArray);


//////////////////////////////////////////


// Initial colors array
const colors = ['red', 'green', 'blue'];

// 'yellow' at beginning, the elements of colors, and 'purple' at end
const extendedColors = ['yellow', ...colors, 'purple'];

// ['yellow', 'red', 'green', 'blue', 'purple']
console.log(extendedColors);


//////////////////////////////////////////


// Initial person
const person = {
    name: 'John',
    age: 30
  };
  
// Clone person named newPerson
  const newPerson = { ...person };
  
// Change name to Jane & add new gender female
  newPerson.name = 'Jane';
  newPerson.gender = 'female';
  
// Ensure they are separate objects
  console.log('Initial person:', person);
  console.log('Cloned person:', newPerson);


  ///////////////////////////////////////////


// Initial objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Combine objects into combinedObject
const combinedObject = { ...object1, ...object2 };

// { a: 1, b: 3, c: 4 }
console.log(combinedObject);
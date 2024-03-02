let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];


    ParksArray.forEach((park) => {
        if (park.name === 'Riverside Park') {    
          park.name = 'Riverside Greenspace';
        }
      });
      
      console.log(ParksArray);
        
      const parkIndex = parks.findIndex(park => park.name === 'Central Park');

      if (parkIndex !== -1) {
        const treeIndex = parks[parkIndex].trees.findIndex(tree => tree.name === 'Maple');
      
        if (treeIndex !== -1) {
          parks[parkIndex].trees[treeIndex].name = 'Sugar Maple';
        }
      }

      console.log(parks);

      // Find the index of Central Park
const ParkIndex = parks.findIndex(park => park.name === 'Central Park');

// Check if Central Park exists in the parks array
if (centralParkIndex !== -1) {
  // Add a new tree to Central Park
  parks[centralParkIndex].trees.push({
    name: 'Birch',
    age: 7,
    health: 'Good',
    location: 'Central Park',
    height: 18
  });
}
console.log(parks);

// Find the index of Central Park
const centralParkIndex = parks.findIndex(park => park.name === 'Central Park');
if (centralParkIndex !== -1) {
  const centralParkTrees = parks[centralParkIndex].trees.map(tree => tree.name);
  console.log(centralParkTrees);

// Calculate the total age of all trees in the parks array
let totalAge = 0;
parks.forEach(park => {
  park.trees.forEach(tree => {
    totalAge += tree.age;
  });
});

// Calculate the average tree age
const averageTreeAge = totalAge / parks.reduce((total, park) => total + park.trees.length, 0);
console.log(averageTreeAge);

// Initialize the tallest tree variable with the first tree from the parks array
let tallestTree = parks[0].trees[0];
parks.forEach(park => {
  park.trees.forEach(tree => {
    if (tree.height > tallestTree.height) {
      tallestTree = tree;
    }
  });
});

console.log(tallestTree);

// Find the index of Central Park in the parks array
const centralParkIndex = parks.findIndex(park => park.name === 'Central Park');
if (centralParkIndex !== -1) {
  const playgroundIndex = parks[centralParkIndex].facilities.indexOf('playground');
  if (playgroundIndex !== -1) {
    // Remove the "playground" facility from the facilities array
    parks[centralParkIndex].facilities.splice(playgroundIndex, 1);
  }
}
console.log(parks);

// Convert the parks array into a JSON object
const parksJSON = JSON.stringify(parks, null, 2);
console.log(parksJSON);

// Display the name and facilities of the first item in the parks array
console.log(`Name: ${parks[0].name}`);
console.log(`Facilities: ${parks[0].facilities.join(', ')}`);

// Display the species of the third item in the parks array
console.log(parks[2].trees[0].species);
}

// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
// Your code here

// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
// Your code here

// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
// Your code here

// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
// Your code here

// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
// Your code here

// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
// Your code here

// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
// Your code here

// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
// Your code here

// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
// Your code here

// Task 10: Using console.log, display the species of the third item in the parks array.
// Your code here

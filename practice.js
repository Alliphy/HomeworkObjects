/*
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

/// ////////////// PROBLEM 1 ///////////////////

/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
  Then alert your name using dot notation.
*/
const me = {
  name: "Eva",
  age: 23,

};
// console.log(me.name, me.age);
alert(`${me.name}, ${me.age}`);



/// ////////////// PROBLEM 2 ///////////////////

/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here

const favoriteThings = {
  band: "currentlyTimberTimbre",
  food: "Chicken Nuggets",
  person: "michaelSayer",
  book: "Harry Potter",
  movie: "theImaginariumOfDoctorParnassus",
  holiday: "halloween",
};


/*
After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car
and then another key named 'brand' with the value being your favorite brand.
*/

//Code here

favoriteThings["car"] = "ford";

favoriteThings.brand = "eminenceOrganics";

// console.log(favoriteThings);

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
*/

//Code here

/// ////////////// PROBLEM 3 ///////////////////

// Do not edit the code below.
const user2 = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33',
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without editing the code above.
*/

//Code Here

user2.name = "Bryan G. Smith";
user2.email = "bryan.smith@devmounta.in";

/// ////////////// PROBLEM 4 ///////////////////

let shoppingCart = {};
/*
  Above is an empty object called shoppingCart.
  Write a function called addToCart which takes in two parameters, an item and a quantity.
  It should add a new key-value pair to the cart with the item and quantity.
*/

//Code Here

function addToCart(item, quantity) {

  if (shoppingCart[item]) {
    // if the function does update quantity
    shoppingCart[item] += quantity; 
  } else {
    // if the function doesn't add our key:value pair
    shoppingCart[item] = quantity;
  }
}

/// ////////////// PROBLEM 5 ///////////////////

/*
  Write a function called greaterThan10 that takes in an object.
  Write a for...in loop that loops over the object and changes any value that is greater than 10 to 0.
  Return the updated object.
*/

//Code Here

function greaterThan10(obj) {
  // for in loop through key value pairs
    for (const key in obj) {
      // if statement to see if value is greater than 10. using typeof to return data type
      if (typeof obj[key] === "number" && obj[key] > 10) {
        // updating value using if statement and bracket notation
        obj[key] = 0;
      }
    }

    // return the modified object
    return obj;
  }

/// ////////////// PROBLEM 6 ///////////////////

/*
  Write a function called double that takes in an object.
  Write a for...in loop that loops over the object and changes every value to be itself multiplied by 2.
  Return the updated object.
*/

//Code Here

function double(obj) {

  // for in loop through objects key:value pairs
  for (const keys in obj) {
  // using typeof to check key:value pairs to see if value is a "number"
    if (typeof obj[keys] === "number") {
  // update the value of your pair by multiplying 2
      obj[keys] *= 2;

    }
    // console.log (obj[keys]);

  }
  // returning the modified value for object
  return obj;
}

/// ////////////// PROBLEM 7 ///////////////////

/*
  Inside the function showValues, concatenate each of the values in the given object and return the concatenated string.
*/

function showValues(obj) {
  //Code Here
  // use for of loop, because it's an array being returned, to check for the value within objects key:value pair
  let listValue = "";
  // create for of loop to loop through values of object
  for (const value of Object.values(obj)) {
    // convert value to string in case it isn't already
    listValue += String(value);
  }
  // return the updated value 

  return listValue;
}

/// ////////////// PROBLEM 8 ///////////////////

/*
  Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object.
  The object should have 3 keys whose names match the parameters.
  Return that object so that whenever you invoke makeCard, you get a brand new credit card.
*/

//Code Here

function makeCard(cardNumber, expirationDate, securityCode) {

  return {
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    securityCode: securityCode,
  }
};

/// ////////////// PROBLEM 9 ///////////////////

/*
  Write a function called removePassword that takes in an object.
  Delete the property password and return the object.
*/

// Code Here

function removePassword(obj) {
  for (const key of Object.keys(obj)) {
   if (key === 'password') {
    delete obj[key]
   }
  }
  // delete obj.password;

  return obj;
}



/// ////////////// PROBLEM 10 ///////////////////

// Do not edit the code below.
const deleteTheBigNumbers = {
  first: 10,
  second: 20,
  third: 110,
  fourth: 200,
};
// Do not edit the code above.

/*
  Write a for...in loop that deletes every property from the object deleteTheBigNumbers whose value is greater than 100.
*/

//Code Here
console.log(deleteTheBigNumbers);

  for (const keys in deleteTheBigNumbers) {

    if (typeof deleteTheBigNumbers[keys] === "number" && deleteTheBigNumbers[keys] > 100) {
      delete deleteTheBigNumbers[keys];
    }
  }

/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

/// ////////////// PROBLEM 11 ///////////////////

// Do not edit the code below.
const carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994,
};
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables.
*/

//Code Here

const {color, make, model, year} = carDetails;

/// ////////////// PROBLEM 12 ///////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter.
  Use object destructuring to save the object properties to new variables.
  The property names are firstName, lastName, and title.
*/

function greeting(obj) {
  //Code Here
  const {firstName, lastName, title} = obj;

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}

/// ////////////// PROBLEM 13 ///////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here

function totalPopulation ({utah, california, texas, arizona}) {
  return utah + california + texas + arizona;

}

/// ////////////// PROBLEM 14 ///////////////////

/*
  Write a function called usCanadaBorder that will take in an array containing 2
  numbers (latitude and longitude).
  Destructure the array into two variables, latitude and longitude.
  Return true if the latitude is equal to 49 and the longitude is between -123 and -95 inclusive.
  Return false otherwise.
*/

//Code Here

function usCanadaBorder([latitude, longitude]) {
  if (latitude === 49 && longitude >= -123 && longitude <= -95) {
    return true;
  } else {
    return false;
  }
  
}

/// ////////////// PROBLEM 15 ///////////////////

// Do not edit the code below.
const employees = [
  {
    firstName: 'Von',
    lastName: 'Budibent',
    email: 'vbudibent0@163.com',
    department: 'Sales',
  },
  {
    firstName: 'Catherina',
    lastName: 'Swalowe',
    email: 'cswalowe1@example.com',
    department: 'Engineering',
  },
  {
    firstName: 'Theo',
    lastName: 'Trill',
    email: 'ttrill2@sina.com.cn',
    department: 'Services',
  },
  {
    firstName: 'Elsy',
    lastName: 'McCrorie',
    email: 'emccrorie3@netscape.com',
    department: 'Legal',
  },
  {
    firstName: 'Lorie',
    lastName: 'Handsheart',
    email: 'lhandsheart4@fotki.com',
    department: 'Research and Development',
  },
];
// Do not edit the code above.

/*
  Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
    1. If employee's first name is Theo, remove that employee because he just got fired.
    2. If the employee's first name is Lorie, change her department to 'HR'.
    3. Return the updated employee array.
*/

//Code Here

function employeeUpdater() {
  const arr = [...employees];

  for (let i = 0; i < arr.length; i++) {

  const employee = arr[i];

  // console.log(employee.firstName);

  if (employee.firstName === "Theo") {
// delete employee
    arr.splice(i , 1);

  } else if (employee.firstName === "Lorie") {
  // update employee to HR
    employee.department = "HR";
  }
  // console.log(arr);

}
return arr;
}

/// ////////////// PROBLEM 16 ///////////////////

// Do not edit the code below.
const cat = {
  name: 'Fluffy',
  catFriends: [
    {
      name: 'Grumpy',
      activities: ['be grumpy', 'eat food'],
    },
    {
      name: 'Lazy Bones',
      activities: ['sleep', 'pre-sleep naps'],
    },
  ],
};
// Do not edit the code above.

/*
  Fluffy has two friends, Grumpy and Lazy Bones.
    1. Assign the value of Grumpy's 2nd activity to the grumpyActivity variable below.
    2. Assign fluffy2ndFriend the name of Fluffy's 2nd friend.
*/

//Code Here
let grumpyActivity;
let fluffy2ndFriend;

fluffy2ndFriend = cat.catFriends[1].name;
grumpyActivity = cat.catFriends[0].activities[1];
/// ////////////// PROBLEM 17 ///////////////////

// Do not edit the code below.
const myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true,
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true,
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true,
    },
  ],
};
// Do not edit the code above.

/*
  Above is some information about my car. As you can see, I am not the best driver.
  I have caused a few accidents.
  Please update this driving record so that I can feel better about my driving skills.
    1. Write a function called recordCleaner.
    2. Loop over the accidents array.
    3. Change atFaultForAccident from true to false.
*/

//Code Here

function recordCleaner() {
  for (const accident of myCar.accidents){
    accident.atFaultForAccident = false;
  }
}

/// ////////////// PROBLEM 18 ///////////////////

/*
  Now we will use object destructuring as the function's parameter instead of
  destructuring the object inside of the function declaration.

  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as its parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here

function largeNumbers ({first, second, third}) {
  const lowestNumber = Math.min (first, second, third);
  return lowestNumber;
}


/// ////////////// PROBLEM 19 ///////////////////

/*
  Write a function called numberGroups that will take a destructured object as its parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here

function numberGroups ({a, b, c}) {
  let longestArray;
  const longestLength = Math.max (a.length, b.length, c.length);
  for (const x of [a,b,c]) {
    if (x.length === longestLength) {
      longestArray = x;
    }
  }
  return longestArray;
}

//Exercise 1: Applying Array.prototype.map()

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Using .map() to multiply each value by 2
const doubledNums = nums.map(num => num * 2);

console.log(doubledNums);


//Exercise 2: Array destructuring

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Destructuring the first and second values into variables
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping); 
console.log(secondTopping); 


//Exercise 3: Destructuring objects

const car = {
    make: 'Range Rover',
    model: '2021 Sport',
  };
  
  // Destructuring the object to extract `make` and `model`
  const { make, model } = car;
  
  console.log(make);  
  console.log(model); 
  

  //Exercise 4: Applying the spread operator on arrays

  const pizzaTopping = ['Pineapple', 'Olives', 'Anchovies'];

// Using the spread operator to duplicate the array
const controversialPizzaToppings = [...pizzaTopping];

console.log(controversialPizzaToppings);


//Exercise 5: Applying the spread operator on objects

const vehicle = {
    make: 'Range Rover',
    model: '2024 Evoke Sport',
  };
  
  // Using the spread operator to duplicate the object and modify `model`
  const myCar = { ...car, model: '2024 Evoke Sport' };
  
  console.log(car);   
  console.log(myCar); 


//Exercise 6: Dynamic keys in objects

const userProfile = {};
const propertyName = 'username';

// Use propertyName as a dynamic key in the object
userProfile[propertyName] = 'csteban344';

console.log(userProfile);



//Exercise 8: Default parameters

function describingAnimal(noun = 'cat', adjective = 'white') {
  console.log(`The ${adjective} ${noun} is stuck in the tree.`);
}

// Calling the function without arguments 
describingAnimal(); 
// Outputs: The white cat is stuck in the tree.

// Another example
describingAnimal('cat', 'fluffy');
// Outputs: The fluffy cat is stuck in the tree



//Exercise 9: Ternary operator

let pizza = 'tasty';

// Using a ternary operator to check the conditions
pizza === 'tasty' ? console.log('yum') : console.log('yuck');



//Exercise 10: Boolean gates

const localLangConfig = null; // Changes to 'esp', 'fra', etc., or keeping it null

// Assigning LANG to localLangConfig or default to 'eng'
const LANG = localLangConfig || 'eng';

console.log('Language setting:', LANG);


//Website theme

const userSavedTheme = null; // Changes to 'dark', 'contrast', etc., or keeping it null

// Assigning USER_THEME to userSavedTheme or default to 'light'
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);


//Exercise 11: Optional chaining 

const adventurer = {
  name: 'Alice',
};

// Using the optional chaining to check for `cat.age`
console.log(adventurer.cat?.age); // This safely returns `undefined` instead of throwing an error







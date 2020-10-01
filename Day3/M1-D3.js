/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
const myArray = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const myObject = {
  name: "Ademuyiwa",
  surname: "Otubusin",
  emailAddress: "tay4real@gmail.com",
  age: "38 years",
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
myObject.haveDriverLicence = true;

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete myObject.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
const myObject2 = {
  name: "Timothy",
  surname: "Adams",
  emailAddress: "timothyadams@gmail.com",
};

if (myObject.emailAddress === myObject2.emailAddress) {
  console.log("the emails are equal");
} else {
  console.log("emails are not equal");
}

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 30;
let totalCost;

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
} else {
  totalCost = totalShoppingCart + 10;
}

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
// initialize variable
totalCost;
totalShoppingCart = totalShoppingCart - totalShoppingCart * 0.2;

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
} else {
  totalCost = totalShoppingCart + 10;
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */

const car = {
  brand: "Toyota",
  model: "Carina E",
  licensePlate: "7BJT254",
};

const cars = [];
for (let x = 0; x < 5; x++) {
  const newCar = Object.assign({}, car); // clone car
  newCar.licensePlate = "VA4LVRS" + x;
  cars.push(newCar);
}

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
let carsForRent = [];
for (let x = 0; x < 5; x++) {
  const newCar = Object.assign({}, car); // clone car
  newCar.licensePlate = "VA4LVRS" + x;
  carsForRent.push(newCar);
}

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

carsForRent = carsForRent.slice(1, 4);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
console.log(typeof cars[0]);
console.log(typeof cars[0].licensePlate);
console.log(typeof cars[0].brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
let carsForSale = [
  {
    brand: "Toyota",
    model: "Carina E",
    licensePlate: "7BJT254",
  },
  {
    brand: "Toyota",
    model: "Carina E",
    licensePlate: "JSGD1234",
  },
  {
    brand: "Toyota",
    model: "Carina E",
    licensePlate: "XHSH123",
  },
];

let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);
/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i].brand);
  console.log(carsForSale[i].model);
  console.log(carsForSale[i].licensePlate);
}

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/

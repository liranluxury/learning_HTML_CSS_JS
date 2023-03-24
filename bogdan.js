let myName;
myName = "Liran";
console.log(myName);
console.log(console.log(10));
const myName2 = "Lulya";
console.log(myName2);

const myCity = { city: "Ney York" };
console.log(myCity);
myCity.popular = true;
myCity.country = "USA";
console.log(myCity);
delete myCity.country;
console.log(myCity);
const countryPropertyName = "country";
myCity[countryPropertyName] = "USA";
console.log(myCity);
myCity.info = { isPopular: true, strana: "Ukrain" };
console.log(myCity);
delete myCity.info["isPopular"];
console.log(myCity);
window;
const post = { title: "My post", likesQty: 5 };
post;
function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
myFn(10, 3);
console.log(myFn);

const personOne = {
  name: "Bob",
  age: 21,
};

function increaswPersonAge(personOne) {
  const updatePerson = Object.assign({}, personOne);
  updatePerson.age += 1;
  return updatePerson;
}

const updatePersonOne = increaswPersonAge(personOne);
console.log(personOne.age);
console.log(updatePersonOne.age);

function printMyName() {
  console.log("Bogdan");
}
console.log("Start");
setTimeout(printMyName, 2000);


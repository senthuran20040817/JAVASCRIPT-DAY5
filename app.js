//============ Clearing the Local Storage ============
// localStorage.clear();


//========= setting key & values to the local storage =========
// localStorage.setItem("name","Senthuran");
// localStorage.setItem("age","22");
// localStorage.setItem("city","chilaw");


//========= removing the specific item in the saved key & value pairs =========
// localStorage.temoveItem("city");


//========= changing the values of the saved items by overriding =========
// localStorage.setItem("name","Thurkka");


//========= getting values from local storage to variables =========
// let name = localStorage.getItem("name");
// console.log(name); // prints "Senthuran"

// localStorage.clear();
//========= storing object in the local storage =========
// let customer = {
//     name : "Senthuran",
//     age : 22,
//     city : "chilaw"
// }

// localStorage.setItem("customer", customer);
// if we store like above , we will see in the local storage as key -- customer , value -- Object object
// in  local storage we can only store the string values, thats why we storing even the age as the string (within double quotation).

// so we have to convert the object into string and then store that to the local storage
// localStorage.setItem("customer", JSON.stringify(customer));
// JSON.stringify(customer) -- this will convert the customer object into string.

// if we want to get the sting converted objects into objects, this is used to retrieve the items as objects which converted and saved as above.
// console.log(localStorage.getItem("customer"));
// the above will log a string, so we cannot do as -- console.log(localStorage.getItem("customer").name);
// console.log(JSON.parse(localStorage.getItem("customer")));
// here we can do like -- console.log(localStorage.getItem("customer").name);
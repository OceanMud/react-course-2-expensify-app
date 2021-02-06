//
// Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 26, 
//     location: {
//         city: 'Philidelphia',
//         temp: 88
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;

// const {city = 'New York', temp: temperature } = person.location;

// console.log(`${firstName} is ${age}.`);

// if (person && temperature){
//     console.log(`its ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

//
// Array destructuring
// 

// const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
// const [,city,state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75']

const [itemName, , mediumPrice] = item

console.log(`a ${itemName} costs ${mediumPrice}`)
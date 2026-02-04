// Array — Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 500, 25, 588]
// ["a", "b", "hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
// let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]
// access
// array_name[position / index]
// arr[0]

// modify
// array_name[position] = new value
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;


// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array --> place it into last

// let a = [1, 2, 3, 4, 5];
// variable || function.method --> koi variable ke function in padh
// a.push(700);
// use case -- enter new products into existing products list
let product = ['phone', 'tv', 'ac', 'machine']; 
product.push('computer');
// pop --> remove last value into array
// let b = [10, 20, 30, 40];A
product.pop();
// use case -- remove last product you add into your list

// shift -- remove first value into Array
let c = [30, 40, 50, 60];
// c.shift();
// use case -- remove old product automatic after sometimes

// unshift -- add value into array -- first
let d = [52, 35, 65, 85];
// d.unshift(20);
// use case -- add a value into top of that data you receive

// splice — remove value into array — specific position and specific number of values
// into () — first index (position), how many value you want to remove
// let e = [50, 60, 30, 40, 10];
// e.splice(3, 2);
// e.splice(3, 0, 50, 100)
// use case — select msg and remove multiple msg at on click


// slice — copy values from array — specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// start index — include into copy
// end index — not include into copy
// let f = [100, 50, 25, 0];
// let new_f = f.slice(1, 3);
// use case — copy specific data and save it into new variable

// reverse — reverse value of array
// let g = [25, 30, 35, 40, 85];
// g.reverse();
// use case — show latest update first into your fronted


// sort — set into ascending order
// let h = [50, 20, 80, 10, 40];
// h.sort();
// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return a - b; // ascending order
// })
// let e = ['a','c','d','b']

//example
//1
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
console.log(tasks);

//2
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop(); // removes 'Reminder'
console.log(notifications);

//3
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift(); // removes 'Customer1'
console.log(customers);

//4
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
console.log(playlist);

//5
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
console.log(students);

//6
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2); // removes 'Pizza', 'Pasta'
console.log(menu);

//7
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5); // ['Saturday', 'Sunday']
console.log(days);

//8
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log(levels);

//9
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log(scores);

//10
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log(prices);

//11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
console.log(products);

//12
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
console.log(colors);

//13
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse().push('Final Step');
console.log(steps);

//14
let names = ['alice', 'bob','chaelie','david'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);

//15
let movies = ['Avatar', 'Titanic', 'Gladiator'];

movies.push('Inception');  
movies.shift();            
movies.sort();        
console.log(movies);
     
//16
let nums1 = [1, 2, 3, 4];
let removed = nums1.splice(1, 2);
console.log(nums1);

//17
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log(nums2);
//19
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
console.log(letters);

//21
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
console.log(arr);

//23
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log(values);

//25
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log(arr2);



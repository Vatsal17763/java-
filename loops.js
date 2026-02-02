// for loop
// why use for-loop? when you know how many times you want to repeat a block of code
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe -> kaya sudhi javanu chhe -> kevi rite javanu chhe
// for (ex. 1 -> 50 -> increment by 1)
// (start; end; change)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let k = 9; k >= -1; k--) {
//     console.log(k);
// }

// for (let j = 1; j <= 10; j++) {
//     console.log("Hello");
// }

// while loop -- do while loop
// kaya thi javanu chhe --> kaya rokavanu chhe --> kevi rite javanu chhe
// while (ex. 1 -> Hello world -> stop when condition false)

// start
// while (end) {
//     code
//     change
// }

// let d = 1;
// while (d <= 10) {
//     console.log("While Loop: ", d);
//     d++;
// }

// make it true loops
// let k = 50;
// while (k = 20) {
//     console.log(k);
//     k++;
// }

//1.
// let k = 50;
// while (k == 20) {
//     console.log(k);
//     k++;
// }

//2.
// let k = 20;
// while (k <= 30) {
//     console.log(k);
//     k++;
// }

// 3.
// let c = 30;
// while (d >= 20){
//     console.log(d);
//     d++;
// }

//4.
// let d = 20;
// while (d <= 30) {
//     console.log(d);
//     d++;
// }    

//5.
// let f = 50;
// while (f >= 0) {
//     console.log(f);
//     f--;
// }


//6.
// let q = 50;
// while (q <= 60) {
//     console.log(q);
//     q++;   // increase
// }

// do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);

let j = 12; // start

do {
    console.log("do while loop:", j);  // code
    j++;  // change (condition)
} while (j < 20);  // while check after executing code block (end)


// break
for (let k = 1; k <= 201; k++) {
    console.log("Loop with break", k);
    if (k == 30) {
        break;
    }
}

// continue
for (a = 1; a <= 10; a++) {
    if (a == 5) {
        continue;
    }
    console.log(a);
}

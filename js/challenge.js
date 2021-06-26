// Challenge
// Result should look like:
// 1 
// 2
// 3 "Fizz"
// 4
// 5 "Buzz"
// 6 "Fizz"
// 7
// 8
// 9 "Fizz"
// 10 "Buzz"
// 11
// 12 "Fizz"
// 13
// 14
// 15 "Fizz Buzz"
// Use a for loop
// You will need variables
// Console.log Fizz 
// Console.log Bizz 
// Console.log Fizz Buzz
// If statements
// Comparison === !==
// Logical Operators  ||&&
// < >== < <== 

for (let i=1; i <= 15; i++) {
    if(i % 15 == 0) console.log(i + ' ' + 'Fizz Buzz');
    else if(i % 3 == 0) console.log(i + ' ' + 'Fizz');
    else if(i % 5 == 0) console.log(i + ' ' + 'Buzz');
    else console.log(i);
}


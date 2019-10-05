var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 31, 9, 20, 10);

console.log(myPastDate);
console.log(myFutureDate);

console.log(myFutureDate - myPastDate);


var birthday = new Date(1985, 0, 15, 11, 15, 25);

var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

// get month urodzin //
console.log(birthday.getMonth());
// get year urodzin //
console.log(birthday.getFullYear());
// get the day of the month //
console.log(birthday.getDate());
// get the day of the week //
console.log(birthday.getDay());
// get the hour 0 - 23 of the day//
console.log(birthday.getHours());

if(birthday == birthday2){
    console.log("The Birthdays are equal");
} else {
    console.log("The Birthdays are not equal");
}


var a = 5;
var b = 5;

if(a == b){
    console.log("The Birthdays are equal");
} else {
    console.log("The Birthdays are not equal");
}

if(birthday.getDate() == birthday2.getDate()){  // !!! TAK MOŻMA PORÓWNAĆ //
    console.log("The Birthdays are equal");
} else {
    console.log("The Birthdays are not equal");
}
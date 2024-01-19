// Chapter no 31-34

// Q no 1
// var dObj = new Date();

// Q no 2
// var dStr = new Date().toString();

// Q no 3
// var d = new Date();
// var day = d.toLocaleDateString('en-US', { weekday: 'long' });

// Q no 4
// var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// var dayIndex = dayNames.indexOf(d);
// if (dayIndex !== -1) {
//     alert("The current day is: " + dayNames[dayIndex]);
// } else {
//     alert("Unable to determine the current day.");
// }

// Q no 5
// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth() + 1;
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();
// var dayOfWeek = currentDate.getDay(); 

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);
// console.log("Milliseconds: " + milliseconds);
// console.log("Day of the Week: " + dayOfWeek);

// Q no 6
// var later = new Date(2020, 11, 31); 

// Q no 7
// var myDate = new Date(1992, 1, 2); 

// Q no 8
// var referenceDate = new Date(); 
// var beginningOf1980 = new Date(1980, 0, 1); 
// var elapsedMilliseconds = referenceDate - beginningOf1980;

// alert("Milliseconds elapsed between the reference date and the beginning of 1980: " + elapsedMilliseconds);

// Q no 9
// var myDate = new Date(); 
// console.log("15-01-2024:", myDate);

// myDate.setFullYear(2022);
// console.log("01-01-2022:", myDate);

// Q no 10
// function changeMonthToJanuary(inputDate) {
//    var modifiedDate = new Date(inputDate);
//    modifiedDate.setMonth(0);

//     return modifiedDate;
// }

// var myDate = new Date(); 
// console.log("Original Date:", myDate);

// var modifiedDate = changeMonthToJanuary(myDate);
// console.log("Date with Month changed to January:", modifiedDate);

// Q no 11
// var myDate = new Date(); 
// console.log("Original Date:", myDate);

// var newDate = new Date(2022, 0, 1); 
// console.log("New Date with a different day:", newDate);

// Q no 12
// function changeMinutes(inputDate) {
//      var modifiedDate = new Date(inputDate);

//     var newMinutes = prompt("Enter the new minutes value:");

//     if (!isNaN(newMinutes)) {
//         modifiedDate.setMinutes(parseInt(newMinutes, 10));
//         console.log("Date with Minutes changed:", modifiedDate);
//     } else {
//         console.log("Invalid input. Please enter a valid number for minutes.");
//     }
// }

// var myTime = new Date(); 
// console.log("Original Time:", myTime);

// changeMinutes(myTime);

// Q no 13
// function addHours(inputDate, hoursToAdd) {
//     var modifiedDate = new Date(inputDate);
//     modifiedDate.setHours(modifiedDate.getHours() + hoursToAdd);

//     return modifiedDate;
// }

// var myTime = new Date(); 
// console.log("Original Time:", myTime);

// var hoursToAdd = prompt("Enter the number of hours to add:");

// if (!isNaN(hoursToAdd)) {
//     var newTime = addHours(myTime, parseInt(hoursToAdd, 10));
//     console.log("New Time after adding " + hoursToAdd + " hours:", newTime);
// } else {
//     console.log("Invalid input. Please enter a valid number for hours.");
// }

//Q n0 14
// function calculateAge() {
//     var birthdateInput = prompt("Enter your birthdate (YYYY-MM-DD):");
//     var birthdate = new Date(birthdateInput);

//     if (isNaN(birthdate.getTime())) {
//         console.log("Invalid input. Please enter a valid date (YYYY-MM-DD).");
//         return;
//     }

//     var currentDate = new Date();
//     var age = currentDate.getFullYear() - birthdate.getFullYear();

//     if (currentDate.getMonth() < birthdate.getMonth() ||
//         (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
//         age--;
//     }

//     console.log("Your age is: " + age + " years.");
// }


// calculateAge();



// Chapter no 35-37

// Q no 1
// function displayAlert() {
//     //code here
// }

// Q no 2
// function askName() {
//     var userName = prompt("Enter name");
//     return userName;
// }

// var userEnteredName = askName();
// console.log("User's name is:", userEnteredName);

// Q no 3
// function firstFunction() {
//     console.log("This is the first function.");
// }

// function secondFunction() {
//     console.log("This is the second function.");
// }

// function callTwoFunctions() {
//     firstFunction();
//     secondFunction();
// }

// callTwoFunctions();

// Q no 4
// function displayAndAlertName() {
//     var userName = prompt("Enter name");
//     if (userName) {
//         alert("Hello, " + userName + "!");
//     } else {
//         alert("No name entered.");
//     }
// }

// displayAndAlertName();

// Q n0 5
// function concat(a, b, c, variable, str, num) {
//     //  code  here
// }

// callThat(someVariable, "someString", 42);

// Q no 6
// function concatenateParameters(param1, param2) {
//     var result = param1 + param2;
//     return result;
// }

// var concatenatedValue = concatenateParameters("Hello, ", "world!");
// console.log("Concatenated value:", concatenatedValue);

// Q no 7
// function multiplyParameters(param1, param2, param3) {
//     var result = param1 * param2 * param3;
//     return result;
// }

// var multiplicationResult = multiplyParameters(2, 3, 4);
// console.log("Multiplication result:", multiplicationResult);

//Q no 8
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; 
//     }

//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     var average = sum / numbers.length;
//     return average;
// }

// var numbersArray = [3, 7, 2, 8, 5];
// var result = calculateAverage(numbersArray);
// console.log("Average:", result);

// Q no 9
// function sum(a, b) {
//     return a + b;
// }

// var result = sum(3, 7);
// console.log("Sum:", result);

// Q no 10
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }

//     var sum = numbers.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     }, 0);

//     var average = sum / numbers.length;
//     return average;
// }

// var numbersArray = [3, 7, 2, 8, 5];
// var result = calculateAverage(numbersArray);
// console.log("Average:", result);

// Q no 11
// function addNumbers(a, b) {
//     return a + b;
// }

// var result = addNumbers(3, 7);
// console.log("Result:", result);

// Q no 12
// function letterCounts(word) {
//     var counts = {};

//     for (var i = 0; i < word.length; i++) {
//         var char = word[i].toLowerCase();
        
//         if (/^[a-zA-Z]$/.test(char)) {
//             counts[char] = (counts[char] || 0) + 1;
//         }
//     }

//     return counts;
// }

// var word = "HelloWorld";
// var result = letterCounts(word);
// console.log("Letter Counts:", result);


// Q no 13
// function setYearInDate(originalDate, newYear) {
  
//     var modifiedDate = new Date(originalDate);
//     modifiedDate.setFullYear(newYear);

//     return modifiedDate;
// }

// var currentDate = new Date(); 
// console.log("Original Date:", currentDate);

// var newYear = 2022;
// var updatedDate = setYearInDate(currentDate, newYear);
// console.log("Updated Date with new year:", updatedDate);

// Q no 14
// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);

//     var age = today.getFullYear() - birthDate.getFullYear();

//     if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

// var dateOfBirth = "1990-05-15"; 
// var age = calculateAge(dateOfBirth);
// console.log("Age:", age);

// Q no 15
// function checkWordPresence(word, array) {
//     return array.includes(word);
// }

// var wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var searchTerm = 'raza';

// var isPresent = checkWordPresence(searchTerm, wordArray);
// console.log("Is the word present in the array:", isPresent);

// Q no 16
// function repeatLetter(letter) {
//     return letter.repeat(10);
// }

// var repeatedLetters = repeatLetter('a');
// console.log("Repeated letters:", repeatedLetters);

// Q no 17
// function reverseArray(inputArray) {
//     return inputArray.slice().reverse();
// }

// var originalArray = ['a', 'b', 'c', 'd', 'e'];
// var reversedArray = reverseArray(originalArray);
// console.log("Reversed Array:", reversedArray);

// Q no 18
// function reverseNumber(number) {
  
//     var reversedString = number.toString().split('').reverse().join('');
//     var reversedNumber = parseInt(reversedString, 10);

//     return reversedNumber;
// }

// var originalNumber = 32243;
// var reversedNumber = reverseNumber(originalNumber);
// console.log("Reversed Number:", reversedNumber);

// Q no 19
// function isPalindrome(str) {
 
//     var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     var reversedStr = cleanStr.split('').reverse().join('');

//     return cleanStr === reversedStr;
// }

// var testString1 = "madam";
// var testString2 = "Hello";

// console.log(testString1 + " is a palindrome: " + isPalindrome(testString1));
// console.log(testString2 + " is a palindrome: " + isPalindrome(testString2));

// Q no 20
// function capitalizeFirstLetter(str) {
    
//     var words = str.split(' ');

//     var capitalizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });

//     var result = capitalizedWords.join(' ');

//     return result;
// }

// var inputString = 'the quick brown fox';
// var outputString = capitalizeFirstLetter(inputString);
// console.log("Original String:", inputString);
// console.log("Capitalized String:", outputString);

// Q no 21
// function findMinMax(numbers) {
//     if (numbers.length === 0) {
//         return "Array is empty.";
//     }

//     var sortedNumbers = numbers.slice().sort(function(a, b) {
//         return a - b;
//     });

//     var lowestNumber = sortedNumbers[0];
//     var greatestNumber = sortedNumbers[sortedNumbers.length - 1];

//     return lowestNumber + ',' + greatestNumber;
// }

// var sampleArray = [1, 2, 3, 4, 5];
// var result = findMinMax(sampleArray);
// console.log("Input Array:", sampleArray);
// console.log("Lowest and Greatest Numbers:", result);


// Chapter no 38

// Q no 1
// function demonstrateLocalVariable() {
  
//     var localVar = "I am a local variable.";

//     console.log(localVar);
//     var modifiedVar = localVar.toUpperCase();
//     console.log("Modified Local Variable:", modifiedVar);
// }

// demonstrateLocalVariable();

// Q no 2

// var globalVar = "I am a global variable.";

// function accessGlobalVariable() {
//      console.log(globalVar);
// }

// accessGlobalVariable();


// Chapter no 39-40

// Q no 1
// var dayOfWeek = "Monday";

// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's the start of the week!");
//         break;
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//         console.log("It's a weekday.");
//         break;
//     case "Friday":
//         console.log("TGIF! It's Friday!");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("Invalid day of the week.");
// }

//Q no 2
// var cityName = prompt("Enter the name of a city:");

// switch (cityName.toLowerCase()) {
//     case "Karachi":
//         alert("You entered New York! The city that never sleeps.");
//         break;
//     case "paris":
//         alert("You entered Paris! The city of lights.");
//         break;
//     case "tokyo":
//         alert("You entered Tokyo! The vibrant capital of Japan.");
//         break;
//     default:
//         alert("Sorry, we don't have information for the entered city.");
// }

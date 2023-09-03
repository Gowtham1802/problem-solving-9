let age = 22;
console.log(age);


// Logical Q & A here set-1

// 1. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(&#39;&#39;));
// console.log(is_Blank(&#39;abc&#39;));
// true
// false


function isSpace(str) {
  // Remove spaces
  str = str.trim();
  return str.length === 0;
}

console.log(isSpace(''));      
console.log(isSpace('abc'));   



// 2. Create a dynamic list where users can add and remove items.
// Test Case:
// &lt;input type=&quot;text&quot; id=&quot;itemInput&quot; placeholder=&quot;Enter item&quot;&gt;
// &lt;button onclick=&quot;addItem()&quot;&gt;Add Item&lt;/button&gt;
// &lt;ul id=&quot;itemList&quot;&gt;&lt;/ul&gt;




// 3. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string: &#39;webmaster&#39;
// Expected Output : &#39;abeemrstw&#39;
// Assume punctuation and numbers symbols are not included in the passed string.


function sortStringAlphabetically(inputString) {
  // Convert the string to an array of characters
  var charArray = inputString.split('');
  charArray.sort();
  var sortedString = charArray.join('');

  return sortedString;
}

var inputString = 'webmaster';
var sortedResult = sortStringAlphabetically(inputString);
console.log(sortedResult);



// 4. Create a form with name and email fields. Display an error message if the name is empty or the email
// format is invalid when a &quot;Submit&quot; button is clicked.
// Test Case:
// &lt;input type=&quot;text&quot; id=&quot;name&quot; placeholder=&quot;Enter your name&quot;&gt;
// &lt;input type=&quot;email&quot; id=&quot;email&quot; placeholder=&quot;Enter your email&quot;&gt;
// &lt;button onclick=&quot;validateForm()&quot;&gt;Submit&lt;/button&gt;
// &lt;p id=&quot;error&quot;&gt;&lt;/p&gt;



// 5. Write a program that takes an arbitrary number of strings and concatenates them using a rest parameter.
// Sample Input: const result = concatenateStrings(&quot;Hello&quot;, &quot;world&quot;, &quot;from&quot;, &quot;JavaScript!&quot;);
// Sample Output: Concatenated String: &quot;Hello world from JavaScript!&quot;

function concatenateStrings(...strings) {
  const concatenatedString = strings.join(' ');

  return `Concatenated String: "${concatenatedString}"`;
}

const result = concatenateStrings("Hello", "Gowtham", "How", "Are", "You");
console.log(result);



// 6. Write a program that takes an arbitrary number of numbers and finds the maximum value using a rest
// parameter.
// Sample Input: const max = (10, 5, 30, 15, 25);
// Sample Output: Maximum Value: 30


function findMax(...numbers) {
  const max = Math.max(...numbers);

  return `Maximum Value: ${max}`;
}

const lastResult = findMax(10, 5, 30, 15, 25, 20, 35, 50);
console.log(lastResult); 



// 7. Write a program that creates a deep clone of a nested array using the spread syntax.
// Sample Input: const original = [1, [2, 3], [4, [5, 6]]];
// Sample Output: Deep Clone: [1, [2, 3], [4, [5, 6]]]


function deepCloneArray(arr) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    return arr;
  }

  return arr.map((element) => deepCloneArray(element));
}

const original = [1, [2, 3], [4, [5, 6]]];
const cloned = deepCloneArray(original);
console.log("Deep Clone:", cloned);




// 8. Write a program that takes a function and an array of numbers, and spreads the array as function
// parameters.
// Sample Input: const numbers = [10, 20, 30];
// Sample Output: Sum: 60


function sumNumbers(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

const numbers = [10, 20, 30, 40, 50, 60, 70];

// Spread the array as function parameters
const total = sumNumbers(...numbers);

console.log("Sum:", total);




// 9. Write a program that converts a given time from one time zone to another.
// Sample Input: const time = &quot;12:00 PM&quot;;
// const fromTimeZone = &quot;UTC&quot;;
// const toTimeZone = &quot;PST&quot;;
// Sample Output: Converted Time: &quot;4:00 AM&quot;


// function convertTime(time, fromTimeZone, toTimeZone) {

//   const date = new Date(`${time} ${fromTimeZone}`);

//   const formatter = new Intl.DateTimeFormat(undefined, { timeZone: toTimeZone, hour: 'numeric', minute: 'numeric' });

//   const convertedTime = formatter.format(date);

//   return `Converted Time: "${convertedTime}"`;
// }

// const time = "12:00 PM";
// const fromTimeZone = "UTC";
// const toTimeZone = "PST";

// const totalTime = convertTime(time, fromTimeZone, toTimeZone);
// console.log(totalTime);



// 10. A simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]


function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Test data
const sampleData = [6, 4, 0, 3, -2, -5, 1];

// Call the bubbleSort function to sort the array
bubbleSort(sampleData);

// Print the sorted array
console.log(sampleData); // Output: [-2, 0, 1, 3, 4, 6]


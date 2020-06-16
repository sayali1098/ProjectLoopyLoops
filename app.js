// Progression 1: Names and Input
var ProGrad1 = "Sayali";
console.log("The driver's name is" + " " + ProGrad1);
document.write("The driver's name is" + " " + ProGrad1 + "\n");
document.write("<br>");
var ProGrad2 = "Kabilan";
console.log("The navigator's name is" + " " + ProGrad2);
document.write("The navigator's name is" + " " + ProGrad2);
document.write("<br>");

// Progression 2: Control Statements - 1
function length(s) {
    var len = 0;
    while (s[len] !== undefined)
        len++;
    return len;
}
console.log(length(ProGrad1));
console.log(length(ProGrad2));

var len1 = length(ProGrad1);
var len2 = length(ProGrad2);

if (len1 > len2) {
    console.log("The driver has the longest name, it has " + len1 + " characters");
    document.write("The driver has the longest name, it has " + len1 + " characters");
    document.write("<br>");
} else if (len2 > len1) {
    console.log("It seems that the navigator has the longest name, it has " + len2 + " characters");
    document.write("It seems that the navigator has the longest name, it has " + len2 + " characters");
    document.write("<br>");
} else {
    var total = len1 + len2;
    console.log("Wow, you both have equally long names, " + total + " characters");
    document.write("Wow, you both have equally long names, " + total + " characters");
    document.write("<br>");
}

//vowels or not
function countvowels(a) {
    let vowlist = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var indexlist = [];
    var indexpos = [];
    for (var i = 0; i < length(a); i++) {
        if (vowlist.indexOf(a[i]) !== -1) {
            indexlist = indexlist + " " + a[i];
            indexpos = indexpos + " " + i;
        }
    }
    var vows = indexlist + indexpos;
    return vows;
}

console.log("ProGrad1 " + ProGrad1 + " contains vowels as:", countvowels(ProGrad1));
console.log("ProGrad2 " + ProGrad2 + " contains vowels as:", countvowels(ProGrad2));
document.write("ProGrad1 " + ProGrad1 + " contains vowels as:", countvowels(ProGrad1));
document.write("<br>");
document.write("ProGrad2 " + ProGrad2 + "contains vowels as:", countvowels(ProGrad2));
document.write("<br>");

//uppercase lowercase
function upper(s) {
    var count = 0;
    for (var j = 0; j < length(s); j++) {
        if (/[A-Z]/.test(s.charAt(j)))
            count++;
    }
    return count;
}

console.log("ProGrad1 " + ProGrad1 + " contains:", upper(ProGrad1) + " Upper case characters");
console.log("ProGrad2 " + ProGrad2 + " contains:", upper(ProGrad2) + " Upper case characters");
document.write("ProGrad1 " + ProGrad1 + " contains:", upper(ProGrad1) + " Upper case characters");
document.write("<br>");
document.write("ProGrad2 " + ProGrad2 + " contains:", upper(ProGrad2) + " Upper case characters");
document.write("<br>");

function lower(s) {
    var count = 0;
    for (var j = 0; j < length(s); j++) {
        if (/[a-z]/.test(s.charAt(j)))
            count++;
    }
    return count;
}

console.log("ProGrad1 " + ProGrad1 + " contains:", lower(ProGrad1) + " lower case characters");
console.log("ProGrad1 " + ProGrad2 + " contains:", lower(ProGrad2) + " lower case characters");
document.write("ProGrad1 " + ProGrad1 + " contains:", lower(ProGrad1) + " lower case characters");
document.write("<br>");
document.write("ProGrad2 " + ProGrad2 + " contains:", lower(ProGrad2) + " lower case characters");
document.write("<br>");

//Progression3
function spaceupper(s) {
    var new1 = [];
    var f1 = [];
    for (var i = 0; i < length(s); i++) {
        new1 = s[i].toUpperCase() + " ";
        f1 = f1 + new1;
    }
    return f1;
}
console.log("ProGrad1: " + spaceupper(ProGrad1));
document.write("ProGrad1: " + spaceupper(ProGrad1));
document.write("<br>");

function reverse(s) {
    var n1 = [];
    var f = [];
    for (j = length(s) - 1; j >= 0; j--) {
        n1 = s[j];
        f = f + n1;
    }
    return f;
}
console.log("reverse of: " + ProGrad2 + " is " + reverse(ProGrad2));
document.write("reverse of: " + ProGrad2 + " is " + reverse(ProGrad2));
document.write("<br>");

function concat(s, s1) {
    var con = s + s1;
    return con;
}
console.log(concat(ProGrad1, ProGrad2));
document.write(concat(ProGrad1, ProGrad2));
document.write("<br>");

function revconcat(s, s1) {
    var con1 = s1 + s;
    return con1;
}
console.log(revconcat(ProGrad1, ProGrad2));
document.write(revconcat(ProGrad1, ProGrad2));
document.write("<br>");


// Important Note - No Built-in functions to be used


// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.


// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
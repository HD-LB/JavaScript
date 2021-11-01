/* globals console */
/*jshint strict:false */

//Definition of strings
var str1 = 'Jack';
var str2 = "Jack";

//Multi-line string
var str3 = `
<div id = 'wrapper'>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul>
</div>
`;

//Replace
var nameOfUni = "University of Denver";

var newName = nameOfUni.replace(/Denver/g, "Chicago");

console.log(nameOfUni);
console.log(newName);

//Concat
var firstName = "John";
var lastName = "Doe";

var fullName1 = firstName + " " + lastName;
var fullName2 = "".concat(firstName, " ", lastName);
var fullName3 = `${firstName} ${lastName}`;

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);

//Split
var text = "This is an example text.";
var words = text.split(" ");
console.log(words);

//Trimming

if (!String.prototype.trimChars) {
    String.prototype.trimLeftChars = function (chars) {
        chars = [...chars];
        var startIndex = 0;
        while (true) {
            var shouldContinue = 0 <= chars.indexOf(this[startIndex]);
            if (!shouldContinue) {
                break;
            }
            startIndex += 1;           
        }
        return this.substr(startIndex); 
    };
}

if (!String.prototype.trimChars) {
    String.prototype.trimRightChars = function (chars) {
        chars = [...chars];
        var index = this.length - 1;
        while (true) { 
            var shouldContinue = 0 <= chars.indexOf(this[index]);
            if (!shouldContinue) {
                break;
            }
            index -= 1;           
        }
        return this.substring(0, index + 1);
    };

    String.prototype.trimChars = function(chars) {
        return this.trimLeftChars(chars)
        .trimRightChars(chars);
    };
}

var str = "!?!?!?!?!John!?!?!?!?!?";
console.log(str.trimLeftChars("!?"));
console.log(str.trimRightChars("!?"));
console.log(str.trimChars);


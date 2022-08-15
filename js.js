/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// Create function with parameters for an array and a string (seperator)
// Create output variable as an empty string
// Loop through items in array--- if the last item in the array just return output

function join(arr, separator) {
    var output = '';
    for (var i=0; i < arr.length; i++) {
        output+=arr[i]
        if(i==arr.length-1) return output;
        output+= separator;

    }
    return output
}






function caseInsensitiveStringCompare(strA, strB) {
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();

    if (strA === strB) return true;
    else return false;

}

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;
console.log(caseInsensitiveStringCompare(strA1, strB1))
console.log(strA1)

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;
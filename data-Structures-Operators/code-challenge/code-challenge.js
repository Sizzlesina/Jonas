// << Coding Challenge #4 >>

/* 
Write a program that receives a list of variable
names written in underscore_case and convert them to
camelCase.

The input will come from a textarea inserted into the
DOM (see code below), and conversion will happen when
the button is pressed.


THIS TEST DATA (pasted to textarea)
Underscore_case
  first_name
Some_variable
  calculate_AGE
delayed_departure


SHOULD PRODUCE THIS OUTPUT (5 seprate console.log outputs)

underscoreCase    ✅
firstName         ✅✅
someVariable      ✅✅✅
calculateAge      ✅✅✅✅
delayedDeparture  ✅✅✅✅✅


HINT 1 : Remember which character defines a new line
in the textarea 😉

HINT 2 : The solution only needs to work for a 
variable made out of 2 words, like a_b

HINT 3 : Start without worrying about the ✅. Tackle 
that only after you have the variable name conversion
working 😉.

HINT 4 : This challenge is difficult on purpose, so
start watching the solution in case you're stuck.
Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😉
*/

// first of all we will create an textarea and a button element in HTML file
const textarea = document.createElement('textarea'); const button = document.createElement('button');
document.body.append(textarea, button);
button.className = 'btn btn-success mt-1 w-100';
button.textContent = 'Click me!';
textarea.className = 'form-control mt-3';
// then we create a function named camelCase
const camelCase = function () {
  const text = textarea.value; // in here we get the value from the textarea
  const rows = text.split('\n'); // in here we will split the value by rows
  for (const [i, row] of rows.entries()) { // we will make an array from the entries of the splited values then we will get the index and the value itself in here 
    // console.log(i,row);
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(first,second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
};

button.addEventListener('click', camelCase);

// this part is so IMPORTANT!
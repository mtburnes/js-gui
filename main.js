// This section of code is used from the forked repo. I want to use my own function.
//<begin commented code>

// const updateWithAdd = async (event) => {
//   document.querySelector('#result').innerHTML = ''
//   if (document.querySelector('#itemsPerBag').checkValidity() && document.querySelector('#bags').checkValidity()) {
//     const i = parseInt(document.querySelector('#itemsPerBag').value)
//     const j = parseInt(document.querySelector('#bags').value)
//     const multAns = (i * j)
//     const ans =  `There are ${multAns} items total.`
//     document.querySelector('#result').innerHTML = ans
//   }
// }


// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

// document.addEventListener('click', event => {
  //   if (event.target && event.target.id === 'calculate') { updateWithAdd(event) }
// })
//</end commented code>
  
function updateResult(value){
  document.querySelector('#result').innerHTML = `The total number of items is ${value}`;
}

function calculate(){
  const items = parseInt(document.getElementById("itemsPerBag").value);
  const bagCount = parseInt(document.getElementById("bags").value);
  const calculatedTotal = parseInt(items * bagCount);
  updateResult(calculatedTotal);
}

function testCalculate(x, y){
  const result = x * y;
  console.log(`The result should be ${result}`);
}
/* const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const handlePlus = () => {
  count = count + 1;
  updateText();
}

const handleMinus = () => {
  count = count - 1;
  updateText();
}


plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus); */


///////////////////


/* 
import {createStore} from 'redux'


 const reducer = () => {
  return "hello"
}

const store = createStore(reducer)

console.log(store.getState()) // 콘솔창에 hello가 출력됨.  
*/

///////////////////


/* 
import {createStore} from 'redux'

const reducer = (count = 0) => {
  return count;
}

const store = createStore(reducer)

console.log(store.getState()) // 콘솔창에 0이 출력됨. 
*/

//////////////////





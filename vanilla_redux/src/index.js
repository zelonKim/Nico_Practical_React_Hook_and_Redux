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





/* import { createStore } from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {
  console.log(action)  // {type: 'HELLO'}
  return count;
}

const countStore = createStore(countModifier)

countStore.dispatch({type: "HELLO"}) */


/////////////////////////


/* import { createStore } from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {
  if(action.type === "ADD") { 
    return count + 1
  } 
  return count
}

const countStore = createStore(countModifier)

countStore.dispatch({type: "ADD"})

console.log(countStore.getState()) // 1
*/

////////////////////


/*
import { createStore } from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {
  if(action.type === "ADD") { 
    return count + 1
  } else if (action.type === "MINUS") {
    return count - 1
  } else {
    return count
  }
}

const countStore = createStore(countModifier)

countStore.dispatch({type: "MINUS"})

console.log(countStore.getState()) // -1 
*/

///////////////////


/* import { createStore } from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {
  if(action.type === "ADD") { 
    return count + 1
  } else if (action.type === "MINUS") {
    return count - 1
  } else {
    return count
  }
}

const countStore = createStore(countModifier)

countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "MINUS"})

console.log(countStore.getState()) // 3 
*/


////////////////////


/* import { createStore } from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {

  if(action.type === "ADD") { 
    return count + 1
  } else if (action.type === "MINUS") {
    return count - 1
  } else {
    return count
  }
}

const countStore = createStore(countModifier)

countStore.subscribe(() => console.log("store is changed"))

plus.addEventListener("click", () => countStore.dispatch({type: "ADD"}))
minus.addEventListener("click", () => countStore.dispatch({type: "MINUS"}))
// 플러스 버튼이나 마이너스 버튼을 누를때마다 콘솔창에 store is changed가 출력됨. 
*/

//////////////////


/* import { createStore } from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {

  if(action.type === "ADD") { 
    return count + 1
  } else if (action.type === "MINUS") {
    return count - 1
  } else {
    return count
  }
}

const countStore = createStore(countModifier)

countStore.subscribe(() => number.innerText = countStore.getState())

plus.addEventListener("click", () => countStore.dispatch({type: "ADD"}))
minus.addEventListener("click", () => countStore.dispatch({type: "MINUS"}))
// 플러스 버튼을 누르면 화면의 숫자가 1씩 증가함.  / 마이너스 버튼을 누르면 화면의 숫자가 1씩 감소함. */


//////////////////


/* import { createStore } from 'redux'

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = "ADD"
const MINUS = "MINUS"

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}

const countStore = createStore(countModifier)

countStore.subscribe(() => number.innerText = countStore.getState())

plus.addEventListener("click", () => countStore.dispatch({type: ADD}))
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}))
 */


/////////////////////////


/* 
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = toDo => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
*/


/////////////////////////////


/* 
import {createStore} from 'redux'

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (state=[], action) => {
  console.log(action)  //입력: hello   출력:{type: 'ADD_TODO', text: 'hello'}
  
  switch(action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now()}]; // 불변성 유지
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({type: ADD_TODO, text: toDo})
};

form.addEventListener("submit", onSubmit);
 */


/////////////////////


/* import {createStore} from 'redux'

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"

const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [ {text: action.text, id: Date.now()}, ...state ]; 
    case DELETE_TODO:
      return [];
    default:
      return state;
  } 
}

const store = createStore(reducer)

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = "";

  toDos.forEach(toDo => {
    const li = document.createElement("li")
    li.id = toDo.id
    li.innerText = toDo.text
    ul.appendChild(li)
  })
}
store.subscribe(paintToDos)


const addToDo = text => {
  store.dispatch({ type: ADD_TODO, text })
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit); */


//////////////////


/* import {createStore} from 'redux'

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [ {text: action.text, id: Date.now()}, ...state ]; 
    case DELETE_TODO:
      return [];
    default:
      return state;
  } 
}

const store = createStore(reducer)

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = "";

  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  })
}
store.subscribe(paintToDos)


const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id
  store.dispatch(deleteToDo(id))
}


const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit); */


////////////////////


import {createStore} from 'redux'

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [ {text: action.text, id: Date.now()}, ...state ]; 
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  } 
}

const store = createStore(reducer)

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = "";

  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  })
}
store.subscribe(paintToDos)


const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}


const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit); 
 



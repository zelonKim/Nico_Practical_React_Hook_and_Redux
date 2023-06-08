
/* import {createStore} from 'redux'


const addToDo = text => {
    return {
        type: "ADD",
        text
    }
}

const deleteToDo = id => {
    return {
        type: "DELETE",
        id: parseInt(id)
    }
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case "ADD":
            console.log(action)
            return [{ text: action.text, id: Date.now() }, ...state]
        case "DELETE":
            return state.filter(toDo => toDo.id !== action.id)
        default:
            return state;
    }
}

const store = createStore(reducer)

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;   */


///////////////////


/*  import {createStore} from 'redux'
import {createAction} from "@reduxjs/toolkit"

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

console.log(addToDo.type) // ADD
console.log(deleteToDo.type) // DELETE


const reducer = (state=[], action) => {
    switch (action.type) {
        case "ADD":
            console.log(action) // 인풋창에 1234 입력 -> 콘솔창에 {type: 'ADD', payload:'1234'} 출력
                return [{ text: action.payload, id: Date.now() }, ...state]
        case "DELETE":
            return state.filter(toDo => toDo.id !== action.payload)
        default:
            return state;
    }
}

const store = createStore(reducer)

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store; */


///////////////////////

/* import { createStore } from 'redux'
import { createAction, createReducer} from "@reduxjs/toolkit"

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

const reducer = createReducer([], {
    [addToDo]: (state, action) => { 
         state.push({ text: action.payload, id: Date.now() })
    },
    [deleteToDo]: (state, action) => {
      return state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = createStore(reducer)

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;  */

///////////////////

import { configureStore, createSlice } from '@reduxjs/toolkit'

const toDos = createSlice({
    name: "ToDo",
    initialState: [],
    reducer: {
        addToDo: (state, action) => { 
            state.push({ text: action.payload, id: Date.now() })
       },
       deleteToDo: (state, action) => {
        return state.filter(toDo => toDo.id !== action.payload)
      }
    }
})

const store = configureStore({reducer: toDos.reducer})

export const {addToDo, deleteToDo} = toDos.actions

export default store; 
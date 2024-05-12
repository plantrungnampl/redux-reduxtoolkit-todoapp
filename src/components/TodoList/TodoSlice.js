// const initState = [

//     {
//         id: 1,
//         name: "Learn React",
//         completed: false,
//         priority: "High",
//     },
//     {
//         id: 2,
//         name: "Learn matchers",
//         completed: true,
//         priority: "low",
//     },
//     {
//         id: 3,
//         name: "Learn antd",
//         completed: false,
//         priority: "High",
//     },
// ]
// export const todoListReducer = (state = initState, action) => {

//     switch (action.type) {
//         case "todoList/ADD_TODO":
//             return [...state, action.payload]

//         case "todoList/TOGGLE_TODO_STATUS":
//             return state.map(todo => {
//                 if (todo.id === action.payload) {
//                     return { ...todo, completed: !todo.completed }
//                 } else {
//                     return todo
//                 }
//             })
//         default:
//             return state;

//     }

// }

import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: [
        {
            id: 1,
            name: "Learn React",
            completed: false,
            priority: "High",
        },
        {
            id: 2,
            name: "Learn matchers",
            completed: true,
            priority: "low",
        },
        {
            id: 3,
            name: "Learn antd",
            completed: false,
            priority: "High",
        },
    ],
    reducers: {
        ADD_TODO: (state, action) => {
            state.push(action.payload)
        },
        TOGGLE_TODO_STATUS: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        }
    }
})
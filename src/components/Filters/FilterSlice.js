// const initState = {
//     search: "",
//     status: "All",
//     priority: [],
// }
// export const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "filters/SEARCH_FILTER_CHANGER":
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case "filters/STATUS_FILTER_CHANGER":
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case "filters/PRIORITY_FILTER_CHANGER":
//             return {
//                 ...state,
//                 priorities: action.payload
//             }
//         default:
//             return state;
//     }
// }


import { createSlice } from "@reduxjs/toolkit";
export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priority: [],
    },
    reducers: {
        SEARCH_FILTER_CHANGER: (state, action) => {
            state.search = action.payload;
        },
        STATUS_FILTER_CHANGER: (state, action) => {
            state.status = action.payload;
        },
        PRIORITY_FILTER_CHANGER: (state, action) => {
            state.priorities = action.payload;
        }
    }
})

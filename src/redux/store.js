// // import { configureStore } from "@reduxjs/toolkit";
// import { legacy_createStore as createStore } from 'redux';
// import { rootReducer } from "./reducer";
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../components/Filters/FilterSlice";
import { todoListSlice } from "../components/TodoList/TodoSlice";

export const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer
    }
})
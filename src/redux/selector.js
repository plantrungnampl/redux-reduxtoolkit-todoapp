import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
    [todoListSelector, searchTextSelector, statusFilterSelector, priorityFilterSelector],
    (todoList, searchText, statusFilter, prioritiesFilter) => {
        return todoList.filter(todo => {
            const matchesSearchText = todo.name.toLowerCase().includes(searchText.toLowerCase());
            const matchesStatus = statusFilter === 'All' ||
                (statusFilter === 'Completed' ? todo.completed : !todo.completed);
            const matchesPriority = prioritiesFilter?.length === 0 || prioritiesFilter?.includes(todo.priority);

            return matchesSearchText && matchesStatus && matchesPriority;
        });
    }
);

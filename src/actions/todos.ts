import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number; //id
}

export const fetchTodos = () => {
    //action creator
    return async (dispatch: Dispatch) => {
        const url = 'https://jsonplaceholder.typicode.com/todos';

        await fetch(url, {
            method: 'get',
        })
            .then((response) => response.json())
            .then((resp: Todo[]) => {
                const todos = resp;

                dispatch<FetchTodosAction>({
                    type: ActionTypes.fetchTodos,
                    payload: todos,
                });
            });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    //action creator
    return { type: ActionTypes.deleteTodo, payload: id };
};

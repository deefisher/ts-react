import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';

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

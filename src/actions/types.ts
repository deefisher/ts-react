import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
    fetchTodos, // by not asigning a value here it defaults to 0
    deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;

//create action type enum actions/types.ts
//create type/payload enum type for the action actions/index.ts
//create action creator actions/<action file>.ts
//create or amend reducer to accept new action
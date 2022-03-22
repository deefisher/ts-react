import { Todo, ActionTypes, Action } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos: //acts as a type guard
            return action.payload; //type guard allows this to know what to return
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state;
    }
};

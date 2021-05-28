import { Dispatch } from 'redux';
import { IAction } from '../interfaces';

export const INCREMENT_ACTION = 'INCREMENT_ACTION';
export const incrementAction = (value: number): IAction<number> => ({
    type: INCREMENT_ACTION,
    payload: value,
});

export const DECREMENT_ACTION = 'DECREMENT_ACTION';
export const decrementAction = (value: number): IAction<number> => ({
    type: DECREMENT_ACTION,
    payload: value,
});

export const INCREMENT_ASYNC_ACTION = 'INCREMENT_ASYNC_ACTION';
export const incrementAsyncAction = (value: number) => (dispatch: Dispatch) => {
    return new Promise((resolve: (value?: number) => void) => {
        let timeout = setTimeout(() => {
            dispatch(incrementAction(value));
            clearTimeout(timeout);
            resolve();
        }, [1000]);
    });
}
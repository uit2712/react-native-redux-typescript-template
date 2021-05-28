import { Action } from 'redux';
import { DECREMENT_ACTION, INCREMENT_ACTION } from '../actions/counter-actions';
import { IAction, ICounterState } from '../interfaces';

const initializeState: ICounterState = {
    count: 0,
}

export default function CounterReducer(state = initializeState, action: Action) {
    switch(action.type) {
        case INCREMENT_ACTION:
            return {
                ...state,
                count: state.count + Number((action as IAction<number>).payload),
            }
        case DECREMENT_ACTION:
            return {
                ...state,
                count: state.count - Number((action as IAction<number>).payload),
            }
        default: return state;
    }
}
import { combineReducers } from 'redux';
import CounterReducer from './counter-reducer';

const reducer = combineReducers({
    counter: CounterReducer,
});

export default reducer;
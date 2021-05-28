import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { decrementAction, incrementAction } from './store/actions/counter-actions';
import { useGetCount } from './store/selectors/counter-selectors';

function ExampleApp() {
    const dispatch = useDispatch();
    const count = useGetCount();

    return (
        <Provider store={store}>
            <View>
                <Text>{count}</Text>
                <TouchableOpacity onPress={() => dispatch(incrementAction(10))}>
                    <Text>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(decrementAction(10))}>
                    <Text>Decrement</Text>
                </TouchableOpacity>
            </View>
        </Provider>
    )
}

export default ExampleApp;
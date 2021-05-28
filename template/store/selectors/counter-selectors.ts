import { useSelector } from 'react-redux';
import { IApplicationState } from '../interfaces';

export function useGetCount() {
    return useSelector<IApplicationState>(state => state.counter.count);
}
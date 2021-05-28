export interface IAction<T> {
    type: string;
    payload?: T;
}

export interface ICounterState {
    count: number;
}

export interface IApplicationState {
    counter: ICounterState;
}
const initialState = {
    number: 0
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                number: state.number + action.payload
            };
        case 'DECREMENT':
            return {
                number: state.number - action.payload
            };
        default:
            return state
    }
}
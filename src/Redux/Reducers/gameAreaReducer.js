const initialState = {
    areaSize: 0
}

export const gameAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SIZE':
            return {
                areaSize: action.payload
            }
        default:
            return state
    }
}
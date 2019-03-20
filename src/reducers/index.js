export default (state, action) => {
    switch(action.type) {
        case 'UPDATE_NAME' : 
            state.name = action.payload.name;
            break;
        default: 
    }
    return state;
}
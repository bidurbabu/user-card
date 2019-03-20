export default (text) => {
    return {
        type: 'UPDATE_NAME',
        payload: {
        name: text
        }
    };
}
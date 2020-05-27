import { createStore } from 'redux'

let data = {
    APP_NAME : "Portfolio",
    BASE_URL : "/",
};

const storeData = (state = data, action) => {
    let newState = {...state};
    switch(action.type){
        case 'APP_NAME':
            newState[action.type] = action.data;
            return newState;
        default:
            return state;
    }
}

let store = createStore(storeData);

store.subscribe(() => console.log(store.getState()))

export default store;
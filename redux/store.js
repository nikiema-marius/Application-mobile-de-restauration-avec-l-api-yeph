import { createStore } from 'redux';
import reducer from "./reducer/index";

export default function configureStore(initialState) {
    return store = createStore(reducer, initialState);

}


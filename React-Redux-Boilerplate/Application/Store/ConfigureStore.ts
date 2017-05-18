import { createStore, applyMiddleware, GenericStoreEnhancer, compose } from "redux";
import rootReducer from "../Reducers/rootReducer";
import thunk from "redux-thunk";

//export default function configureStore(initialState?) {
//    return createStore(
//        rootReducer,
//        initialState,
//        applyMiddleware(thunk)
//    );
//}

// Integrated redux dev tools using tips mentioned here:
// https://github.com/reactjs/redux/issues/1937#issuecomment-245496475

const devToolsExtension: GenericStoreEnhancer = window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export default function configureStore(initialState?) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            devToolsExtension
        ) as GenericStoreEnhancer
    );
}


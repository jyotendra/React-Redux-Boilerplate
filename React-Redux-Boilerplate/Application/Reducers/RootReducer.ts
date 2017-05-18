    import { combineReducers } from "redux";
    // Import all reducers below, as shown
    import mapReducer from "./ExampleReducer";
    import autoCompleteReducer from "./AutoCompleteReducer";

    const rootReducer = combineReducers({
        map: mapReducer,
        searchQuery: autoCompleteReducer,
        // Other reducers are to be combined below
    });
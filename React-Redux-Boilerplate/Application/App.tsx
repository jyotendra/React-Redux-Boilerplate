import configureStore from "./Store/configureStore";
import React from "react";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";


class App extends React.Component<undefined, undefined>{  
    render() {
        return (
            <div id="mainContainer" style={{ position: "relative" }}>
                <AutoComplete/>
                <MapContainer/>
            </div>
        );
    }
}


const store = configureStore();

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById("searchPropertyApp")
);
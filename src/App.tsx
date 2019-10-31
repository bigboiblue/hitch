
import React from "react";
import ReactDom from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import GlobalStyle from "./styles/GlobalStyle";
import allReducer from "./reducers/index";
import MainContainer from "./components/MainContainer";
import NavBar from "./components/NavBar";
import "@babel/polyfill";

function App(): React.ReactElement {
    let storeEnhancers = compose(
        applyMiddleware(thunk),
        // @ts-ignore //
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    let store = createStore(allReducer, storeEnhancers);
    let title = "My Application 1";
    return (
        <Provider store={store}>
            <GlobalStyle backgroundColor="#c8eafa" color="#000" />
            <MainContainer title={title} />
            <NavBar type="vertical" />
        </Provider>
    );
}
ReactDom.render(<App />, document.getElementById("app"));

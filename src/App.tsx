import "./styles/index_main.scss";

import React from "react";
import ReactDom from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducer from "./reducers/index";
import MainContainer from "./components/MainContainer";
import "@babel/polyfill";


class App extends React.Component {
    private store;
    private storeEnhancers;
    private title;


    constructor(props) {
        super(props);
        this.title = "My Application 1";
        this.storeEnhancers = compose(
            applyMiddleware(thunk),
            // @ts-ignore //
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        );
        this.store = createStore(allReducer, this.storeEnhancers);
    }


    render(): React.ReactElement {
        return (
            <Provider store={this.store}>
                {/* <NavBar style="vertical" navItems={this.navItems} /> */}
                <MainContainer title={this.title} />
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById("app"));

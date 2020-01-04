
import React, { useState } from "react";
import ReactDom from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import uuid from "uuid/v4";
import {
    BrowserRouter as Router, Switch, Link, Route, Redirect, withRouter,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import allReducer from "./reducers/index";
import ControlPanelRoot from "./views/controlPanel/components/ControlPanelRoot";
import ArchiveRoot from "./views/archive/components/ArchiveRoot";
import NavBar from "./utility_components/NavBar";
import { RootContainer } from "./styles/AppStyle";
import "@babel/polyfill";
import { ThemeContext, tempTheme } from "./styles/GlobalUserTheme";


interface Props {
    history?: string[];
}

function App(props: Props): React.ReactElement {
    let [route, setRoute] = useState();

    let storeEnhancers = compose(
        applyMiddleware(thunk),
        // @ts-ignore //
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    const navMenuItems: MenuItemData[] = [];
    navMenuItems.push({ title: "Control Panel", callback: () => setRoute("/control-panel") });
    navMenuItems.push({ title: "Archive", callback: () => setRoute("/archive") });
    navMenuItems.push({ title: "Event History", callback: () => console.log("Hello World") });
    navMenuItems.push({ title: "Docs", callback: () => console.log("Hello World") });
    navMenuItems.push({ title: "Login", callback: () => console.log("Hello World") });

    //TODO: THEMING Create awesome polygon based background that slightly manipulates color based on mouse position

    //TODO: MOBILE add media queries and make the page reponsive and mobile friendly
    let store = createStore(allReducer, storeEnhancers);

    return (
        <Provider store={store}>
            <Router>

                {
                //If route state var changes, then redirect to that route
                    (route !== window.location.pathname && route
                        ? <Redirect to={route} />
                        : <></>
                    )
                }

                <GlobalStyle backgroundColor="#c8eafa" color="#000" />
                <ThemeContext.Provider value={tempTheme}>
                    <RootContainer id="rootContainer" theme={tempTheme}>
                        <NavBar theme={tempTheme.navbar} menuItemData={navMenuItems} />

                        <Switch>
                            <Route exact path={["/", "/control-panel"]} render={() => <ControlPanelRoot currentApplication="MyApp" />} />
                            <Route exact path="/archive" render={() => <ArchiveRoot currentApplication="MyApp" />} />
                        </Switch>
                    </RootContainer>
                </ThemeContext.Provider>
            </Router>
        </Provider>
    );
}

ReactDom.render(<App />, document.getElementById("app"));

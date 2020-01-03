
import React from "react";
import ReactDom from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import GlobalStyle from "./styles/GlobalStyle";
import allReducer from "./reducers/index";
import MainContainer from "./components/MainContainer";
import NavBar from "./utility_components/NavBar";
import { RootContainer } from "./styles/AppStyle";
import "@babel/polyfill";
import { ThemeContext, tempTheme } from "./styles/GlobalUserTheme";

function App(): React.ReactElement {
    let storeEnhancers = compose(
        applyMiddleware(thunk),
        // @ts-ignore //
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    //TODO: SERVER replace this with db data
    const tempNavMenuItems: MenuItemData[] = [];
    tempNavMenuItems.push({ title: "Control Panel", callback: () => console.log("Hello World") });
    tempNavMenuItems.push({ title: "Archive", callback: () => console.log("Hello World") });
    tempNavMenuItems.push({ title: "Event History", callback: () => console.log("Hello World") });
    tempNavMenuItems.push({ title: "Docs", callback: () => console.log("Hello World") });
    tempNavMenuItems.push({ title: "Login", callback: () => console.log("Hello World") });

    //TODO: THEMING Create awesome polygon based background that slightly manipulates color based on mouse position

    //TODO: MOBILE add media queries and make the page reponsive and mobile friendly
    let store = createStore(allReducer, storeEnhancers);
    let title = "My Application 1";

    return (
        <Provider store={store}>
            <GlobalStyle backgroundColor="#c8eafa" color="#000" />
            <ThemeContext.Provider value={tempTheme}>
                <RootContainer id="rootContainer" theme={tempTheme}>
                    <NavBar theme={tempTheme.navbar} menuItemData={tempNavMenuItems} />
                    <MainContainer title={title} />
                </RootContainer>
            </ThemeContext.Provider>
        </Provider>
    );
}
ReactDom.render(<App />, document.getElementById("app"));

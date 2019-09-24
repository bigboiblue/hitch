import React from "react";
import ReactDom from "react-dom";
import "./scss/index_main.scss";

class App extends React.Component {
    render(): React.ReactElement {
        return (
            <h1>Template</h1>
        );
    }
}

ReactDom.render(<App />, document.getElementById("app"));

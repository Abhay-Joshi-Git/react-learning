import React from "react";
import ReactDom from "react-dom";
import App from "./components/app.js";

setInterval(() => {
    ReactDom.render(<App date={new Date()}/>,
        document.getElementById('app')
    ), 2000
});

import React from "react";

import TimeDisplay from "./timeDisplay.js";
import RefMethodtest from "./refMethodTest.js";

const obj = {
    p1: 1,
    p2: 2
};

var myObj = {
    ...obj,
    test: 2
};

console.log(myObj);

export default class App extends React.Component {

    onBtnClick () {
        console.log(this._refMethodTestComp);
        this._refMethodTestComp.changeMyValue();
    }

    render () {

        let propsWithChecked = {
            ...this.props,
            checked: false
        }

        return (<div>
            Let's experiment and react!!

            <br />
            <br />

            <TimeDisplay  {...propsWithChecked}/>

            <br />

            <br />

            <button onClick={this.onBtnClick.bind(this)}> call ref comp method </button>

            <RefMethodtest
                ref = {(comp) => this._refMethodTestComp = comp }
            />

            </div>
        )
    }
}

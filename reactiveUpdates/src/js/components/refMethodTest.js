import React from "react";

export default class RefMethodtest extends React.Component {
    constructor () {
        super();
        this.state = {
            myValue: ''
        }
    }

    render () {
        return (
            <div>
                this is to test public methods
            </div>
        )
    }

    changeMyValue () {
        console.log('changing my value ... ');
    }

}

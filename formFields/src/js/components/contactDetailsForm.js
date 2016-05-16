import React from 'react';

export default class ContactDetails extends React.Component {
    constructor () {
        super();
        this.state = {
            contactName: '',
            contanctAltered: false
        };
    }

    getContactNameField() {
        let invalid = false;
        if ( (!this.state.contactName) && this.state.contanctAltered) {
            invalid = true
        }
        return (
            < input
                ref = {
                    (input) => {
                        this.contactNameInput = input;
                    }
                }
                className = {invalid ? 'invalid-input' : ''}
                value = {this.state.contactName}
                onChange = {
                    (event) => {
                        this.setState({contanctAltered: true});
                        this.setState({contactName: event.target.value});
                    }
                }
            />
        )
    }

    render() {
        console.log(this.state);
        return (
            < div >
                < label > Name: < /label>
                {this.getContactNameField()}

                <br />
                <br />

                < button
                    onClick = {
                        () => {
                            console.log(this.contactNameInput.value);
                        }
                    }
                >
                Submit
                < /button>
            < /div>
        )
    }
}

ContactDetails.defaultProps = {
    companyName: 'Synerzip'
}

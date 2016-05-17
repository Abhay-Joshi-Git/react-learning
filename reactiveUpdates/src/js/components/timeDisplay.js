import React from "react";

export default (props) => (
    <div>
        <input placeholder="your name" value="test"/>

        <br />

        <label><input type="checkbox" defaultChecked={props.checked}/> check it </label>

        <br />

        <br />
        <br />

        <select defaultValue="B">
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
        </select>

        <br />
        <br />

            <br />
            <br />

        It is, { props.date.toTimeString()}

    </div>
)

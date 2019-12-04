import React from 'react';
import { Typography } from '@material-ui/core';


const LabelText = props => {
	const labelStyle = { marginRight: 8, display: 'inline-block', verticalAlign: 'middle', fontWeight: 'bold', width: '6rem' };
	return (
	    <Typography noWrap={true} title={props.children} style={labelStyle}>{props.children}</Typography>
	)
};

export {
    LabelText
}
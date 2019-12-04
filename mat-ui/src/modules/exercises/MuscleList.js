import React from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
        margin: '0px 16px'
	}
});

const MuscleList = ({ classes, muscles, selectedMuscle, onChange }) => {
	const localClasses = useStyles();
	const availableMuscleTypes = [ 'All', ...muscles ];
	const selectedMuscleId = selectedMuscle
		? muscles.findIndex(m => m === selectedMuscle) + 1
		: 0;
	const onSelectionChange = (e, value) => onChange(value > 0 ? muscles[value-1] : '');

	return (
		<Paper className={`${localClasses.root} ${classes.muscleList}`}>
			<Tabs value={selectedMuscleId} textColor="primary" onChange={onSelectionChange} centered>
				{availableMuscleTypes.map(muscle => {
					return (
						<Tab
							key={muscle}
							label={muscle}
							className="capitalize hover-shadow"
						></Tab>
					);
				})}
			</Tabs>
		</Paper>
	);
};

export default MuscleList;

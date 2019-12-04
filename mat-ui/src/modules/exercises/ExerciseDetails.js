import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { getExerciseById } from "./exercise.service";
import { LabelText } from 'components/text'

const exerciseDetailsStyle = {
	root: {
		padding: 16
	},
	body: {
		textAlign: "left",
		padding: 16
	}
};


const ExerciseDetails = ({ classesFromParent, classes, selectedExercise }) => {
	const exercise = selectedExercise
		? getExerciseById(selectedExercise)
		: null;
	return (
		<Paper className={`${classesFromParent.Paper} ${classes.root}`}>
			{exercise ? (
				<>
					<Typography variant="h5">{exercise.title}</Typography>
					<Box className={classes.body}>
						<Typography variant="body1">
							<LabelText>Description: </LabelText>{exercise.description}
						</Typography>
						<Typography variant="body1">
							<LabelText>Muscles: </LabelText>{exercise.muscles}
						</Typography>
					</Box>
				</>
			) : (
				<Typography variant="h5">
					Please select an exercise from the list
				</Typography>
			)}
		</Paper>
	);
};

export default withStyles(exerciseDetailsStyle)(ExerciseDetails);

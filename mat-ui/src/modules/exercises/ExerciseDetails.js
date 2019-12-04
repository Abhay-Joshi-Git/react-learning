import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { getExerciseById } from "./exercise.service";
import { LabelText } from "components/text";

const exerciseDetailsStyle = {
	root: {
		padding: 16
	},
	body: {
		textAlign: "left",
		padding: 16
	},
	inlineText: {
		display: 'inline-block'
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
						<LabelText variant="body1" className={classes.inlineText}>Description: </LabelText>
						<Typography variant="body1" className={classes.inlineText}>
							{exercise.description}
						</Typography>
						<br />
						<LabelText className={classes.inlineText}>Muscles: </LabelText>
						<Typography variant="body1" className={classes.inlineText}>
							{exercise.muscles}
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

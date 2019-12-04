import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import {
	muscles,
	getExercisesByMuscle,
	getExercisesGroupedByMuscle,
	subscribe
} from "./exercise.service";
import MuscleList from "./MuscleList";
import ExercisesList from "./ExercisesList";
import ExerciseDetails from "./ExerciseDetails";

const styles = () => ({
	exercisesContent: {
		padding: "16px 16px",
		flex: 1,
		minHeight: 0,
		marginBottom: 10
	},
	paneContainer: {
		minHeight: 0,
		maxHeight: "100%",
		overflowY: "auto",
		paddingBottom: 10,
		paddingRight: 10
	},
	Paper: {
		height: "100%",
		overflowY: "auto"
	}
});

class Exercises extends React.Component {
	state = {
		selectedMuscle: "",
		selectedExercise: null
	};

	onMuscleTypeChange = selectedMuscle => {
		this.setState({
			selectedMuscle
		});
	};

	onExerciseSelect = id => {
		this.setState({
			selectedExercise: id
		})
	}

	render() {
		const { classes } = this.props;
		const { selectedMuscle } = this.state;
		const exercises = selectedMuscle
			? getExercisesByMuscle(selectedMuscle)
			: getExercisesGroupedByMuscle();
		return (
			<Grid
				container
				direction="column"
				className="flex-1 overflow-y-auto"
			>
				<MuscleList
					muscles={muscles}
					selectedMuscle={selectedMuscle}
					onChange={this.onMuscleTypeChange}
					classes={classes}
				/>
				<Grid container className={`${classes.exercisesContent}`}>
					<Grid
						item
						xs={12}
						sm={3}
						className={classes.paneContainer}
					>
						<ExercisesList
							classesFromParent={classes}
							selectedMuscle={selectedMuscle}
							exercises={exercises}
							onExerciseSelect={this.onExerciseSelect}
						/>
					</Grid>
					<Grid item xs={12} sm={9} className={classes.paneContainer}>
						<ExerciseDetails classesFromParent={classes} selectedExercise={this.state.selectedExercise} />
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

class SubscriptionWrapper extends React.Component {
	state = {
		exercises: []
	}

	componentDidMount() {
		subscribe((updatedExercises) => {
			this.setState({
				exercises: updatedExercises
			})
		})
	}

	render() {
		const { exercises } = this.state;
		return this.props.render(exercises);
	}
}

const withSubscription = (WrappedComponent) => (props) => {
	return (
		<SubscriptionWrapper render={exercise => (
			<WrappedComponent {...props} />
		)} />
	)
}

export default withSubscription(withStyles(styles)(Exercises));

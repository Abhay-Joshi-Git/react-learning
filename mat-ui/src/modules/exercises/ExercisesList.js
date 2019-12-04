import React, { Fragment } from "react";
import { List, ListItem, ListItemText, Paper, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const listStyle = {
	listItem: {
		textTransform: 'capitalize'
	},
	muscleItem: {
		paddingLeft: 20
	}
}

const ExercisesList = ({ classesFromParent, classes, exercises, selectedMuscle, onExerciseSelect }) => (
	<Paper className={classesFromParent.Paper}>
		{selectedMuscle ? (
			<>
				<ListItem button>
					<ListItemText className={classes.listItem} primary={selectedMuscle} />
				</ListItem>
				<MuscleListItem classesFromParent={classes} exercises={exercises} onExerciseSelect={onExerciseSelect} />
			</>
		) : (
			<List>
				{Object.keys(exercises).map((key, index) => (
					<Fragment key={key}>
						<ListItem button>
							<ListItemText className={classes.listItem} primary={key} />
						</ListItem>
						<MuscleListItem classesFromParent={classes} onExerciseSelect={onExerciseSelect} exercises={exercises[key]} />
					</Fragment>
				))}
			</List>
		)}
	</Paper>
);

const MuscleListItem = ({ exercises, classesFromParent, onExerciseSelect }) => (
	<>
		{exercises.map(({ title, id }) => (
			<ListItem button key={title} onClick={() => onExerciseSelect(id)}>
				<ListItemText className={`${classesFromParent.muscleItem}`} primary={title} />
				<ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <MoreVertIcon />
              </IconButton>
            </ListItemSecondaryAction>
			</ListItem>
		))}
	</>
);

export default withStyles(listStyle)(ExercisesList);

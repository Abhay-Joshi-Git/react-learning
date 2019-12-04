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
			<List>
				<ListItem button>
					<ListItemText className={classes.listItem} primary={selectedMuscle} />
				</ListItem>
				{exercises.map((exercise) => (
					<MuscleListItem key={exercise.title} classesFromParent={classes} exercise={exercise} onExerciseSelect={onExerciseSelect} />
				))}
			</List>
		) : (
			<List>
				{Object.keys(exercises).map((key, index) => (
					<Fragment key={key}>
						<ListItem button>
							<ListItemText className={classes.listItem} primary={key} />
						</ListItem>
						{exercises[key].map(exercise => (
							<MuscleListItem  key={exercise.title} classesFromParent={classes} exercise={exercise} onExerciseSelect={onExerciseSelect} />
						))}
					</Fragment>
				))}
			</List>
		)}
	</Paper>
);

const MuscleListItem = ({ exercise: { title, id }, classesFromParent, onExerciseSelect }) => (
	<ListItem button onClick={() => onExerciseSelect(id)}>
		<ListItemText className={`${classesFromParent.muscleItem}`} primary={title} />
		<ListItemSecondaryAction>
			<IconButton edge="end" aria-label="comments">
				<MoreVertIcon />
			</IconButton>
			{/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
		</ListItemSecondaryAction>
	</ListItem>
);

export default withStyles(listStyle)(ExercisesList);

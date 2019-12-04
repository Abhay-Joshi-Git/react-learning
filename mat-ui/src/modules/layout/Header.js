import React, { useState } from "react";
import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Icon from '@material-ui/core/Icon';
import CreateExerciseDialog from "modules/exercises/CreateExerciseDialog";

import { addExercise } from 'modules/exercises/exercise.service';

const Header = () => {
	const [ open, setOpen ] = useState(false);

	const handleDialogClose = () => setOpen(false);
	const openCreateExerciseDialog = () => setOpen(true);
	const onAddExercise = (exercise) => {
		addExercise(exercise);
		setOpen(false);
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Container>
					<Typography variant="h4">E</Typography>
				</Container>
				<IconButton onClick={openCreateExerciseDialog}>
					<AddCircleIcon htmlColor="white" />
				</IconButton>
				<CreateExerciseDialog open={open} handleClose={handleDialogClose} addExercise={onAddExercise} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;

import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from "@material-ui/core";
import { muscles  } from './exercise.service';

const defaultState = {
    exercise: {
        title: "",
        muscle: "",
        description: ""
    }
}


class CreateExerciseDialog extends React.Component {
	state = { ...defaultState };

	onChange = event => {
        const { name, value } = event.target;
		this.setState(state => {
			return {
				exercise: {
					...state.exercise,
					[name]: value
				}
            };
		});
    };

    onClose = () => {
        this.setState({ ...defaultState })
        this.props.handleClose();
    }

    onSubmit = () => {
        const { title, muscle, description } = this.state.exercise;
        this.setState({ ...defaultState })
        const exercise = {
            title,
            description,
            muscles: muscle
        }
        this.props.addExercise(exercise);
    }

	render() {
		const { open } = this.props;
        const { title, muscle, description } = this.state.exercise;
        const validExercise = !!(title && muscle && description);
		return (
			<Dialog
				open={open}
				onClose={this.onClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Add Exercise</DialogTitle>
				<DialogContent>
					<DialogContentText color="textPrimary">
						To add an exercise, please fill the details
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						label="Title"
						name="title"
						type="text"
						value={title}
						onChange={this.onChange}
						fullWidth
					/>
					<FormControl fullWidth>
						<InputLabel id="muscle-select-label">
							Muscle
						</InputLabel>
						<Select
							labelId="muscle-select-label"
                            id="muscle-select-label"
                            name='muscle'
							value={muscle}
							onChange={this.onChange}
						>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {muscles.map(muscleItem => (
                                <MenuItem key={muscleItem} value={muscleItem}>{muscleItem}</MenuItem>
                            ))}
						</Select>
					</FormControl>
					<TextField
						multiline
						rows={4}
						margin="dense"
						name="description"
						label="Description"
						value={description}
						onChange={this.onChange}
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={this.onClose}>
						Cancel
					</Button>
					<Button color="primary" variant="contained" disabled={!validExercise}  onClick={this.onSubmit} >
						Add
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default CreateExerciseDialog;

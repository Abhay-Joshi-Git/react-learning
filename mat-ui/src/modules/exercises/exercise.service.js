const muscles = ["shoulders", "chest", "arms", "back", "legs"];
let exercises = [
	{
		id: "overhead-press",
		title: "Overhead Press",
		description: "Delts exercise...",
		muscles: "shoulders"
	},
	{
		id: "dips",
		title: "Dips",
		description: "Triceps exercise...",
		muscles: "arms"
	},
	{
		id: "barbell-curls",
		title: "Barbell Curls",
		description: "Biceps exercise...",
		muscles: "arms"
	},
	{
		id: "bench-press",
		title: "Bench Press",
		description: "Chest exercise...",
		muscles: "chest"
	},
	{
		id: "pull-ups",
		title: "Pull Ups",
		description: "Back and biceps exercise...",
		muscles: "back"
	},
	{
		id: "deadlifts",
		title: "Deadlifts",
		description: "Back and leg exercise...",
		muscles: "back"
	},
	{
		id: "squats",
		title: "Squats",
		description: "Legs exercise...",
		muscles: "legs"
	}
];

const getAllExercises = () => [ ...exercises ];
const getExercisesByMuscle = muscle => exercises.filter(({ muscles }) => muscles === muscle);
const getExerciseById = exerciseId => exercises.find(({ id }) => exerciseId === id);
const getExercisesGroupedByMuscle = () => {
	return exercises.reduce((group, exercise) => {
    const { muscles } = exercise;
    group[muscles] = group[muscles]
        ? [ ...group[muscles],  exercise ]
        : [ exercise ]
    return group;
}, {})
}

const addExercise = val => {
	console.log('addExercise', val)
	const exercise = { ...val, id: val.title.replace(/\s/g, '-') }
	exercises.push(exercise);
	notify();
}


const subscriptionArray = []
const subscribe = (subscription) => {
	subscriptionArray.push(subscription)
}

const notify = () => {
	subscriptionArray.forEach(subscription => subscription(exercises))
}

export {
    muscles,
    getAllExercises,
	getExercisesByMuscle,
	getExerciseById,
	getExercisesGroupedByMuscle,
	addExercise,
	subscribe
}

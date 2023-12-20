const legExcerciseList = [
  { id: 1, text: "squat", set: 3 },
  { id: 2, text: "lunge", set: 3 },
  { id: 3, text: "leg press", set: 3 },
];

const chestExcerciseList = [
  { id: 1, text: "dumbbell bench press", set: 3 },
  { id: 2, text: "dips", set: 3 },
  { id: 3, text: "chin up", set: 3 },
];

const backExcerciseList = [
  { id: 1, text: "pullup", set: 3 },
  { id: 2, text: "barbell row", set: 3 },
  { id: 3, text: "lat pulldown", set: 3 },
];

const shoulderExcerciseList = [
  { id: 1, text: "dumbbell front raise", set: 3 },
  { id: 2, text: "dumbbell lateral raise", set: 3 },
  { id: 3, text: "reverse fly", set: 3 },
];

const allExcercistList = {
  leg: legExcerciseList,
  chest: chestExcerciseList,
  back: backExcerciseList,
  shoulder: shoulderExcerciseList,
};

export default allExcercistList;

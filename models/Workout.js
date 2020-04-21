const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      duration: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      type: {
        type: String,
        required: true,
        trim: true,
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema
  .virtual('totalDuration')
  .get(function () {
    return this.exercises.reduce((sum, exercise) => sum + exercise.duration, 0);
  });


//virtuals
//loop through exercises array, add up all the durations
//can use reduce or regular for loop
//call it totalDuration

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

const mongoose = require("mongoose");
const schema = mongoose.schema
const workoutSchema = new schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Resistance or Cardio"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter Exercise Name"
        },
        duration: {
            type: Number,
            required: "Enter a Duration"
        },
        weight: {
            type: Number,
            required: "Enter a Weight"
        },
        reps: {
            type: Number,
            required: "Enter Reps"
        },
        sets: {
            type: Number,
            required: "Enter a Sets"
        }
    }]
})

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;

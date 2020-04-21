const db = require("../models")

module.exports = function (server) {

    server.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });




    server.post("/api/workouts", ({ body }, res) => {
        const workout = new Workout(body);
        workout.addExercise(data);
        workout.createWorkout(data = {});

        Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    server.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

}
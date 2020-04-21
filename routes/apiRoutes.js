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
        // const workout = new db.Workout(body);
        // workout.addExercise(data);
        // workout.createWorkout(data = {});

        db.Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    server.put("/api/workouts/:id", ({body, params}, res)=>{
        //let {body, params} = req;
        db.Workout.updateOne({_id: params.id}, { $push: { exercises: body } })
            .then(data => {
                res.json(data);
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
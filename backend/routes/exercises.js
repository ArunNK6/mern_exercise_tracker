  const router = require('express').Router();
  let Exercise = require('../models/exercise.model');

        router.get('/', (req,res) => {
        Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' +err));
        });
        router.post('/add',(req,res) => {
        const body = req.body;
        const newExercise = new Exercise(body);
        newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: '+err));
        });
    router.get('/:id',(req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+err));
    });
    router.delete('/:id', (req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error: '+err));
    });
    router.put('/update/:id', (req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.firstname = req.body.firstname;
        exercise.lastname = req.body.lastname;
        exercise.email = req.body.email;
        exercise.password = req.body.password;
        exercise.save()
    .then(() => res.json('Exercise updated !'))
    .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: 😒 '+err));
    });


  
    


   module.exports = router;
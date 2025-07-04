const express = require('express');
const router = express.Router();
const aluno = require('../models/aluno');


// GET: get aluno by id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const aluno = await aluno.findOne({ _id: id });
        res.status(200).json(aluno);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});

// POST: create aluno
router.post('/', async (req, res) => {
    try {
        const aluno = new aluno(req.body);
        const savedaluno = aluno.save();
        res.status(200).json(savedaluno);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});

// PUT: update aluno
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const aluno = req.body;
        const updatedaluno = await aluno.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: aluno
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedaluno);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});

// DELETE: delete aluno
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let deletedaluno = await aluno.deleteOne({ _id: id });
        res.status(200).json(deletedaluno);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});


const professor = require('../models/professor');


// GET: get professor by id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const professor = await professor.findOne({ _id: id });
        res.status(200).json(professor);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});

// POST: create professor
router.post('/', async (req, res) => {
    try {
        const professor = new professor(req.body);
        const savedprofessor = professor.save();
        res.status(200).json(savedprofessor);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});

// PUT: update professor
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const professor = req.body;
        const updatedprofessor = await professor.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: professor
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedprofessor);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});

// DELETE: delete professor
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let deletedprofessor = await professor.deleteOne({ _id: id });
        res.status(200).json(deletedprofessor);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});


module.exports = router;
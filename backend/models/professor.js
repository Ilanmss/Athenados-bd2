const mongoose = require('mongoose');

const ProfessorSchema = mongoose.Schema(
    {
        date: {
            type: Date,
        },
        name: {
            type: String,
            required: true
        },
        disciplina: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    }
);

const professor = mongoose.model('professors', ProfessorSchema);

module.exports = professor;
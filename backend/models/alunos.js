const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema(
    {
        date: {
            type: Date,
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    }
);

const aluno = mongoose.model('alunos', AlunoSchema);

module.exports = aluno;
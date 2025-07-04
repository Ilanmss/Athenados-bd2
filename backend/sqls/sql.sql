CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    turno VARCHAR(20) CHECK (turno IN ('vespertino', 'noturno')),
    tipo VARCHAR(10) CHECK (tipo IN ('aluno', 'professor', 'admin')),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Aluno (
    usuario_id INTEGER PRIMARY KEY REFERENCES Usuario(id),
    matricula VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE Professor (
    usuario_id INTEGER PRIMARY KEY REFERENCES Usuario(id),
    registro VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE Admin (
    usuario_id INTEGER PRIMARY KEY REFERENCES Usuario(id)
);

CREATE TABLE Disciplina (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT
);

CREATE TABLE Aula (
    id SERIAL PRIMARY KEY,
    dia_semana VARCHAR(20) NOT NULL CHECK (dia_semana IN ('segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo')),
    horario_inicio TIME NOT NULL,
    horario_fim TIME NOT NULL,
    turno VARCHAR(20) CHECK (turno IN ('vespertino', 'noturno')),
    disciplina_id INTEGER REFERENCES Disciplina(id),
    professor_id INTEGER REFERENCES Professor(usuario_id),
    sala VARCHAR(20)
);

CREATE TABLE Presenca (
    id SERIAL PRIMARY KEY,
    aluno_id INTEGER REFERENCES Aluno(usuario_id),
    aula_id INTEGER REFERENCES Aula(id),
    data DATE NOT NULL,
    presente BOOLEAN DEFAULT FALSE,
    justificativa TEXT,
    UNIQUE(aluno_id, aula_id, data)
);

CREATE TABLE EstudoDoDia (
    id SERIAL PRIMARY KEY,
    aluno_id INTEGER REFERENCES Aluno(usuario_id),
    disciplina_id INTEGER REFERENCES Disciplina(id),
    descricao TEXT NOT NULL,
    data_entrega DATE NOT NULL,
    concluida BOOLEAN DEFAULT FALSE,
    data_conclusao DATE
);

CREATE TABLE Comunicado (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    texto TEXT NOT NULL,
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor_id INTEGER REFERENCES Usuario(id),
    visivel BOOLEAN DEFAULT TRUE
);
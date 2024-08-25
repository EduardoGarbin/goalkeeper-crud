import { db } from "../db.js";

export const getGoleiros = (_, res) => {
    const q = "SELECT * FROM goleiros";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addGoleiro = (req, res) => {
    const q = 
        "INSERT INTO goleiros(`nome`, `email`, `altura`, `idade`) VALUES (?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.altura,
        req.body.idade
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    });
};

export const updateGoleiro = (req, res) => {
    const q = 
        "UPDATE goleiros SET `nome` = ?, `email` = ?, `altura` = ?, `idade` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.altura,
        req.body.idade
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};

export const deleteGoleiro = (req, res) => {
    const q = 
        "DELETE FROM goleiros WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!");
    });
};
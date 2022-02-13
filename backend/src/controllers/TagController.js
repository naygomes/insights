const { response } = require('express');
const Tag = require('../models/Tag');

const create = async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        return res.status(201).json({ message: "Tag cadastrada com sucesso!", tag: tag });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const list = async (req, res) => {
    const filter = req.query;
    try {
        const tags = await Tag.findAll();
        return res.status(200).json({ tags });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const tag = await Tag.findByPk(id);
        return res.status(200).json({ tag });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Tag.update(req.body, { where: { id: id } });
        if (updated) {
            const tag = await Tag.findByPk(id);
            return res.status(200).send(tag);
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Tag não encontrada");
    }
};

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Tag.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json("Tag deletada com sucesso.");
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Tag não encontrada.");
    }
};

module.exports = {
    list,
    show,
    create,
    update,
    destroy
};





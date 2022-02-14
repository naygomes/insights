const { response } = require('express');
const Card = require('../models/Card');
const Tag = require('../models/Tag');

const create = async (req, res) => {
    const { tags, ...data } = req.body;
    const tagData = tags.split(";");
    const tagId = [];

    if (tagData && tagData.length > 0) {
        for (let i = 0; i < tagData.length; i++) {
            const tag = await Tag.findOrCreate({
                where: { name: tagData[i] },
                defaults: {
                  name: tagData[i]
                }
            });
            tagId.push(tag[0].dataValues.id);
        }
        
    }

    try {
        const card = await Card.create(data);
        if (tagId && tagId.length > 0) {
            card.setTags(tagId);
        }
        return res.status(201).json({ message: "Insight cadastrado com sucesso!", card: card });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const list = async (req, res) => {
    const filter = req.query;
    try {
        console.log(filter.tag)
        const cards = filter.tag ? await Card.findAll({
            include: [
                {
                    model: Tag,
                    as: 'tags',
                    through: { attributes: [] },
                    where: {
                        name: filter.tag
                      }
                }
            ]
        })
            : await Card.findAll({
                include: [{
                    model: Tag,
                    as: 'tags',
                    through: { attributes: [] }
                }]
            });
        return res.status(200).json({ cards });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const card = await Card.findByPk(id, {
            include: [{
                model: Tag,
                as: 'tags',
                through: { attributes: [] }
            }]
        });
        return res.status(200).json({ card });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    const { tags, ...data } = req.body;
    const tagData = tags? tags.split(";"): [];
    try {

        const card = await Card.findByPk(id);
        card.update(data);

        if (tagData && tagData.length > 0) {
            card.setTags(tagData);
        }
        return res.status(200).send(card);
    } catch (err) {
        return res.status(500).json("Insight não encontrado");
    }
};

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const card = await Card.findByPk(id);
        card.removeTags();
        const deleted = await Card.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json("Insight deletado com sucesso.");
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Insight não encontrado.");
    }
};

module.exports = {
    list,
    show,
    create,
    update,
    destroy
};





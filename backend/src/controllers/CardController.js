const { response } = require('express');
const Card = require('../models/Card');

const create = async(req,res) => {
    try{
          const card = await Card.create(req.body);
          return res.status(201).json({message: "Insight cadastrado com sucesso!", card: card});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const list = async(req,res) => {
    const filter = req.query;
    console.log(filter)
    try {
        const cards = filter.tag? await Card.findAll({
            where: {
            tag: filter.tag
          }}) 
          : await Card.findAll();
        return res.status(200).json({cards});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const card = await Card.findByPk(id);
        return res.status(200).json({card});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Card.update(req.body, {where: {id: id}});
        if(updated) {
            const card = await Card.findByPk(id);
            return res.status(200).send(card);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Insight não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Card.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Insight deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
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





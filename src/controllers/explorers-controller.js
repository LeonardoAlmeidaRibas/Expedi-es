import Explorer from '../models/explorers-model.js';

export const store = async (req, res) => {
    try {
        const explorer = await Explorer.create(req.body);
        return res.status(201).json(explorer);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    try {
        const explorer = await Explorer.find().exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const show = async (req, res) => {
    try {
        const explorer = await Explorer.findById(req.params.id).exec();
        res.json(explorer);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const destroy = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
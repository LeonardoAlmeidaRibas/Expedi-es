import Expeditions from '../models/expeditions-model.js';

export const store = async (req, res) => {
    try {
        const expeditions = await Expeditions.create(req.body);
        return res.status(201).json(expeditions);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
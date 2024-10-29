import Species from '../models/species-model.js';

export const store = async (req, res) => {
    console.log(req.body);
    try {
        const species = await Species.create(req.body);
        return res.status(201).json(species);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    

    try {
        const species = await Species.find().exec();
        return res.status(200).json(species);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const show = async (req, res) => {
    try {
        const species = await Species.findById(req.params.id).exec();
        res.json(species);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const species = await Species.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(species);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

export const destroy = async (req, res) => {
    try {
        const species = await Species.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
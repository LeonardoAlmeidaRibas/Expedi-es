import db from "../config/db.js";

const expeditionsSchema = new db.Schema({
    participants: [
        {
            type: db.Schema.Types.ObjectId,
            required: true,
            ref: 'Explorer'
        }
    ],
    speciesFound: [
        {
            type: db.Schema.Types.ObjectId,
            ref: 'Species',
            required: true
        }
    ],
    locations: {
        type: String,
        required: true
        },
    date: {
        type: Date,
        required: true
    }
});

const Expeditions = db.model("Expeditions", expeditionsSchema);

export default Expeditions;

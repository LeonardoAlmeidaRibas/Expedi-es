import db from "../config/db.js";

const speciesSchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    discoveryLocation: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    documented: {
        type: Boolean,
        default: false, 
        required: true
    },
});

const Species = db.model("Species", speciesSchema);

export default Species;

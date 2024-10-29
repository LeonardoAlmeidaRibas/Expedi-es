import db from "../config/db.js";

const explorersSchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    expeditionsParticipated: {
            type: Number,
            required: true
    },
});

const Explorer = db.model("Explorer", explorersSchema);

export default Explorer;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const poolSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
});

<<<<<<< HEAD
module.exports = mongoose.model("Pool", poolSchema);
=======
module.exports = mongoose.model("Pool", poolSchema);
>>>>>>> acffb59ae94b358b69f7836a0da8fc00fd105db9



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type:Number,
        min:1,
        max:5
    },
    createdAt: {
        type: Date,
<<<<<<< HEAD
        default: Date.now
=======
        default: Date.now()
>>>>>>> acffb59ae94b358b69f7836a0da8fc00fd105db9
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});

module.exports = mongoose.model("Review",reviewSchema);   

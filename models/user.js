const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        require:true,
        unique: true,
    },
});

userSchema.plugin(passportLocalMongoose);

<<<<<<< HEAD
module.exports = mongoose.model("User", userSchema);
=======
module.exports = mongoose.model("User", userSchema);
>>>>>>> acffb59ae94b358b69f7836a0da8fc00fd105db9

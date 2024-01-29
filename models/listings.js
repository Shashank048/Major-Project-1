const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { 
        type : String,
        required : true,
    },
    description: String,
    image: {
        url: {
            type: String,
            default: "https://www.peakpx.com/en/hd-wallpaper-desktop-kqhta",

    },
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;

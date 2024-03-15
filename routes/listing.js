const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema , reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const{isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const path = require("path");
const multer = require('multer')
const {storage} = require("..//cloudConfig.js");
const upload = multer({ storage})


const listingController = require("../controllers/listings.js");
//const validateListing = (req,res,next) => {
//    let {error} = listingSchema.validate(req.body);
//    if(error) {
//      let errMsg = error.details.map((el) => el.message).join(",");
 //     throw new ExpressError(400,errMsg);
 //   }else{
  //    next();
  //  }
 // }

router
      .route("/")
      .get( wrapAsync(listingController.index))
      .post( upload.single('listing[image]'),validateListing,isLoggedIn, wrapAsync(listingController.createlisting));

//New Route
router.get("/new", isLoggedIn,listingController.renderNewForm);

router
      .route("/:id")
      .get(wrapAsync (listingController.showlisting))
      .put(validateListing,isLoggedIn,isOwner,wrapAsync(listingController.updatelisting))
      .delete(isLoggedIn, isOwner, upload.single('listing[image]'), wrapAsync(listingController.destroylisting));
//Index Route
//router.get("/", wrapAsync(listingController.index));
  

  //Create Route
// router.post("/",validateListing,isLoggedIn, wrapAsync(listingController.createlisting));


  //show Route
  //router.put("/:id",validateListing,isLoggedIn,isOwner,wrapAsync(listingController.updatelisting));


  //Edit Route
  router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.renderEditform));
  

  //Update Route
 // router.put("/:id",validateListing,isLoggedIn,isOwner,wrapAsync(listingController.updatelisting));
  

  //Delete Route
  //router.delete("/:id",isLoggedIn, isOwner, wrapAsync(listingController.destroylisting));

  module.exports = router;

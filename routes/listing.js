
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listings.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const path = require("path");
const multer = require('multer')
const { storage } = require("..//cloudConfig.js");
const upload = multer({ storage })
const listingController = require("../controllers/listings.js");

router
      .route("/")
      .get(wrapAsync(listingController.index))
      .post(upload.single('listing[image]'), validateListing, isLoggedIn, wrapAsync(listingController.createlisting));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
      .route("/:id")
      .get(wrapAsync(listingController.showlisting))
      .put(validateListing, isLoggedIn, isOwner, wrapAsync(listingController.updatelisting))
      .delete(isLoggedIn, isOwner, upload.single('listing[image]'), wrapAsync(listingController.destroylisting));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditform));


module.exports = router;

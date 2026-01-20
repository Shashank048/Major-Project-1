
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
const Pool = require("../models/pool"); 

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
router.get('/category/:category', async (req, res) => {
  const category = req.params.category;

  try {
    const allListings = await Listing.find({ category });

    if (req.xhr) {
      // AJAX request: return only partial
      return res.render('partials/listing', { allListings });
    } else {
      // Full page load
      return res.render('listings/index', { allListings });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Server error');
  }
});


router.post("/category", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    const pools = await Pool.find({});
    res.render("listings/shas", { allListings, pools });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error loading page.");
  }
});


router.get("/dashboard", async (req, res) => {
    const listings = await Listing.find({});
    const pools = await Pool.find({});
    res.render("dashboard", { listings, pools });
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> acffb59ae94b358b69f7836a0da8fc00fd105db9

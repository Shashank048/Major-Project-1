const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");
const Booking = require("../models/booking");
const { isLoggedIn } = require("../middleware");

// // Show payment page
// router.get("/:listingId", isLoggedIn, async (req, res) => {
//   const listing = await Listing.findById(req.params.listingId);
//   res.render("payment/pay", {
//     listingId: listing._id,
//     amount: listing.price
//   });
// });

router.get("/:listingId", isLoggedIn, async (req, res) => {
  const listing = await Listing.findById(req.params.listingId);

  const gstRate = 0.18;
  const totalWithGst = listing.price + listing.price * gstRate;

  res.render("payment/pay", {
    listingId: listing._id,
    amount: totalWithGst.toFixed(2)
  });
});


// Confirm fake payment
router.post("/confirm", isLoggedIn, async (req, res) => {
  const { listingId, amount, method } = req.body;

  await Booking.create({
    user: req.user._id,
    listing: listingId,
    amount,
    paymentMethod: method
  });

  res.redirect("/payment/success");
});

// Success page
router.get("/success", isLoggedIn, (req, res) => {
  res.render("payment/success");
});

module.exports = router;

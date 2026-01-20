
// const Listing = require("../models/listings");
// const Review = require("../models/review");

// module.exports.createReview = async(req,res) =>{
//     console.log(req.params.id);
//     let listing = await Listing.findById(req.params.id);
//     let newReview = new Review(req.body.review);
//     newReview.author = req.user._id;
//   //  console.log(newReview);   
  
//     listing.reviews.push(newReview);
  
//     await newReview.save();
//     await listing.save();

//     req.flash("success"," New Review created");
//     res.redirect(`/listings/${listing._id}`);
//   };


// //module.exports.destroyReview = async (req,res) => {
// //    let { id , reviewId } = req.params;
  
// //    await Listing.findByIdAndUpdate(id , { $pull: {reviews:reviewId}});
  
// //    await Review.findByIdAndDelete(reviewId);

// //    req.flash("success"," New Review created");
  
// //    res.redirect(`/listings/${id}`);
// //   };


// module.exports.destroyReview = async (req, res) => {
//   let { id, reviewId } = req.params;

//   await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
//   await Review.findByIdAndDelete(reviewId);

//   req.flash("success", "Review deleted successfully");
//   res.redirect(`/listings/${id}`);
// };


// module.exports.destroyReview = async (req,res) => {
//      try {
//         let { id, reviewId } = req.params;
//         await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
//         await Review.findByIdAndDelete(reviewId);
//         req.flash("success", "Review deleted successfully");
//         res.redirect(`/listings/${id}`); // Correctly formatted redirect
//     } catch (error) {
//         console.error("Error deleting review:", error);
//         req.flash("error", "Could not delete review.");
//         res.redirect(`/listings/${id}`); // Redirect back to the listing on error
//      }
//    };

const Listing = require("../models/listings");
const Review = require("../models/review");

// -------------------- CREATE REVIEW --------------------
module.exports.createReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  req.flash("success", "New review created!");
  res.redirect(`/listings/${listing._id}`);
};

// -------------------- DELETE REVIEW --------------------
module.exports.destroyReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId }
    });

    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error("Error deleting review:", err);
    req.flash("error", "Could not delete review.");
    res.redirect(`/listings/${id}`);
  }
};

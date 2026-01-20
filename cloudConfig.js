



//  // Old code 

// // const cloudinary = require('cloudinary').v2;
// // const { CloudinaryStorage} = require('multer-storage-cloudinary');

// // cloudinary.config({
// //     cloud_name: process.env.CLOUD_NAME,
// //     _key: process.env.CLOUD_API_KEY,
// //     _secret: process.env.CLOUD_API_SECRET
// // })

// // const storage = new CloudinaryStorage({
// //     cloudinary: cloudinary,
// //     params: async (req, file) => {
// //       // async code using `req` and `file`
// //       // ...
// //       return {
// //         folder: 'wanderlust_DEV', 
// //         allowerdFormats: ["png","jpg","jpeg"]
// //       };
// //     },
// //   });

// // module.exports = {
// //     cloudinary,
// //     storage,
// // }


   



// //new code 


// require("dotenv").config(); // 🔥 IMPORTANT

// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,       // ✅ FIXED
//   api_secret: process.env.CLOUD_API_SECRET  // ✅ FIXED
// });

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "wanderlust_DEV",
//     allowedFormats: ["png", "jpg", "jpeg"]  // ✅ FIXED
//   }
// });

// module.exports = {
//   cloudinary,
//   storage
// };
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage} = require('multer-storage-cloudinary');

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// })

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: async (req, file) => {
//       // async code using `req` and `file`
//       // ...
//       return {
//         folder: 'wanderlust_DEV', 
//         allowerdFormats: ["png","jpg","jpeg"]
//       };
//     },
//   });

// module.exports = {
//     cloudinary,
//     storage,
// }

require("dotenv").config(); // Load env variables

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowedFormats: ["png", "jpg", "jpeg"]
  }
});

module.exports = {
  cloudinary,
  storage
};

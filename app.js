
// if(process.env.NODE_ENV != "production"){
//   require('dotenv').config();
// }

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate= require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const session = require("express-session"); 
// const MongoStore = require('connect-mongo');
// const flash = require("connect-flash");
// const passport = require("passport");
// const localstrategy = require("passport-local");
// const User = require("./models/user.js");
// const paymentRoutes = require("./routes/payment");




// //const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// const dbUrl= process.env.ATLASDB_URL;

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(dbUrl);
// }


// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.engine("ejs",ejsMate);
// app.use(express.static(path.join(__dirname,"/public")));

// app.use("/payment", paymentRoutes); 

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: {
//     secret: process.env.SECRET,
//   },
//   touchAfter: 24 * 3600,
// });

// store.on("error",() => {
//   console.log("Error in Mongo Session Store",err);
// });

// const sessionOption = {
//   store,
//   secret : "mysupersecretcode",
//   resave:false,
//   saveUninitialized: true,
//   cookie: { 
//     expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//     httpOnly: true,    
//    }
// };

// //app.get("/", (req, res) => {
// //  res.send("Hi, I am root");
// //});

// //const store = MongoStore.create({
// //  mongoUrl: dbUrl,
// //  crypto: {
// //    secret: "mysupersecretcode"
// //  },
// //  touchAfter: 24 * 3600,
// //});

// app.use(session(sessionOption));
// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.currUser = req.user;
//   next();
// });



// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new localstrategy(User.authenticate()) );

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req,res,next)=>{
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");  
//   res.locals.currUser = req.user;
//   next();
// });


// const listingsRouter = require("./routes/listing.js");
// const reviewsRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");
// ''
// app.use("/listings",listingsRouter);
// app.use("/listings/:id/reviews", reviewsRouter );
// app.use("/",userRouter);

// app.all("*", (req,res,next) => {
//   next(new ExpressError(404,"PAGE NOT FOUND!"));
// });

// app.use((err,req,res,next) =>{
//   let {statusCode = 500,message = "Something went Wrong!"} = err;
//   res.status(statusCode).render("error.ejs",{ message });
// // res.status(statusCode).send(message);
// });

// app.listen(8080, () => {
//   console.log("server is listening to port 8080");
// });


                               



                                    // THIS IS OLD CODE 





// require("dotenv").config();


// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const ExpressError = require("./utils/ExpressError");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user");

// // ROUTES
// const listingsRouter = require("./routes/listing");
// const reviewsRouter = require("./routes/review");
// const userRouter = require("./routes/user");
// const paymentRoutes = require("./routes/payment");

// // DB
// const dbUrl = process.env.ATLASDB_URL;

// mongoose.connect(dbUrl)
//   .then(() => console.log("connected to DB"))
//   .catch(err => console.log(err));

// // VIEW ENGINE
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // MIDDLEWARE
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// // SESSION STORE
// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: { secret: process.env.SECRET },
//   touchAfter: 24 * 3600,
// });

// const sessionOptions = {
//   store,
//   secret: process.env.SECRET || "mysupersecretcode",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//   },
// };

// app.use(session(sessionOptions));
// app.use(flash());

// // 🔐 PASSPORT (VERY IMPORTANT ORDER)
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // 🌍 GLOBAL LOCALS (ONLY ONCE, AFTER PASSPORT)
// app.use((req, res, next) => {
//   res.locals.currUser = req.user || null;
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });

// // ROUTES (AFTER LOCALS)
// app.use("/listings", listingsRouter);
// app.use("/listings/:id/reviews", reviewsRouter);
// app.use("/payment", paymentRoutes);
// app.use("/", userRouter);

// // 404
// app.all("*", (req, res, next) => {
//   next(new ExpressError(404, "PAGE NOT FOUND!"));
// });
// app.disable("view cache");

// // // ERROR HANDLER
// // app.use((err, req, res, next) => {
// //   const { statusCode = 500, message = "Something went wrong!" } = err;
// //   res.status(statusCode).render("error.ejs", { message });
// // });

// app.use((err, req, res, next) => {
//   console.error("🔥 ERROR DETAILS:", err);   // 👈 ADD THIS
//   const { statusCode = 500, message = "Something went Wrong!" } = err;
//   res.status(statusCode).render("error.ejs", { message });
// });


// app.listen(8080, () => {
//   console.log("server is listening on port 8080");
// });



      // NEW CODE

      // 🔥 LOAD ENV VARIABLES FIRST (ONLY ONCE)


      
// require("dotenv").config();

// if(process.env.NODE_ENV != "production"){
//   require('dotenv').config();
// }


// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const ExpressError = require("./utils/ExpressError");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user");

// // ROUTES
// const listingsRouter = require("./routes/listing");
// const reviewsRouter = require("./routes/review");
// const userRouter = require("./routes/user");
// const paymentRoutes = require("./routes/payment");

// // -------------------- DATABASE --------------------
// const dbUrl = process.env.ATLASDB_URL;

// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ Mongo Error:", err));

// // -------------------- VIEW ENGINE --------------------
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // -------------------- GLOBAL MIDDLEWARE --------------------
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// // -------------------- SESSION STORE --------------------
// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: { secret: process.env.SECRET },
//   touchAfter: 24 * 3600,
// });

// store.on("error", (e) => {
//   console.log("❌ Session Store Error:", e);
// });

// const sessionOptions = {
//   store,
//   name: "wanderlust-session",
//   secret: process.env.SECRET || "mysupersecretcode",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//   },
// };

// app.use(session(sessionOptions));
// app.use(flash());

// // -------------------- PASSPORT CONFIG --------------------
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // -------------------- GLOBAL LOCALS (VERY IMPORTANT) --------------------
// app.use((req, res, next) => {
//   res.locals.currUser = req.user || null;
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });

// // -------------------- ROUTES --------------------
// app.use("/listings", listingsRouter);
// app.use("/listings/:id/reviews", reviewsRouter);
// app.use("/payment", paymentRoutes);
// app.use("/", userRouter);

// // -------------------- 404 HANDLER --------------------
// app.all("*", (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });


// // -------------------- ERROR HANDLER --------------------
// app.use((err, req, res, next) => {
//   console.error("🔥 ERROR DETAILS:", err);
//   const { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).render("error.ejs", { message });
// });

// // -------------------- SERVER --------------------
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);

// const ejsMate= require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const session = require("express-session"); 
// const MongoStore = require('connect-mongo');
// const flash = require("connect-flash");
// const passport = require("passport");
// const localstrategy = require("passport-local");
// const User = require("./models/user.js");




// //const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// const dbUrl= process.env.ATLASDB_URL;

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(dbUrl);
// }


// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.engine("ejs",ejsMate);
// app.use(express.static(path.join(__dirname,"/public")));

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: {
//     secret: process.env.SECRET,
//   },
//   touchAfter: 24 * 3600,
// });

// store.on("error",() => {
//   console.log("Error in Mongo Session Store",err);
// });

// const sessionOption = {
//   store,
//   secret : "mysupersecretcode",
//   resave:false,
//   saveUninitialized: false,
//   cookie: { 
//     expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//     httpOnly: true,    
//    }
// };

// //app.get("/", (req, res) => {
// //  res.send("Hi, I am root");
// //});

// //const store = MongoStore.create({
// //  mongoUrl: dbUrl,
// //  crypto: {
// //    secret: "mysupersecretcode"
// //  },
// //  touchAfter: 24 * 3600,
// //});

// app.use(session(sessionOption));
// app.use(flash());




// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new localstrategy(User.authenticate()) );

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req,res,next)=>{
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");  
//   res.locals.currUser = req.user;
//   next();
// });


// const listingsRouter = require("./routes/listing.js");
// const reviewsRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// app.use("/listings",listingsRouter);
// app.use("/listings/:id/reviews", reviewsRouter );
// app.use("/",userRouter);

// app.all("*", (req,res,next) => {
//   next(new ExpressError(404,"PAGE NOT FOUND!"));
// });

// app.use((err,req,res,next) =>{
//   let {statusCode = 500,message = "Something went Wrong!"} = err;
//   res.status(statusCode).render("error.ejs",{ message });
// // res.status(statusCode).send(message);
// });

// app.listen(8080, () => {
//   console.log("server is listening to port 8080");
// })


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// ROUTES
const listingsRouter = require("./routes/listing");
const reviewsRouter = require("./routes/review");
const userRouter = require("./routes/user");
const paymentRoutes = require("./routes/payment");

// -------------------- DATABASE --------------------
const dbUrl = process.env.ATLASDB_URL;

mongoose
  .connect(dbUrl)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// -------------------- VIEW ENGINE --------------------
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// -------------------- MIDDLEWARE --------------------
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// -------------------- SESSION STORE --------------------
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: process.env.SECRET },
  touchAfter: 24 * 3600,
});

store.on("error", (e) => {
  console.log("❌ Session Store Error:", e);
});

app.use(
  session({
    store,
    name: "wanderlust-session",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(flash());

// -------------------- PASSPORT --------------------
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// -------------------- GLOBAL LOCALS --------------------
app.use((req, res, next) => {
  res.locals.currUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// -------------------- ROUTES --------------------
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/payment", paymentRoutes);
app.use("/", userRouter);

// -------------------- 404 --------------------
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// -------------------- ERROR HANDLER --------------------
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

// -------------------- SERVER --------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

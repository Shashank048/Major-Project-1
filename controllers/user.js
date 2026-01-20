

const User = require("../models/user");

module.exports.renderSignupForm = (req ,res)=>{
    res.render("users/signup.ejs");
};


<<<<<<< HEAD
module.exports.signup = async(req,res)=>{
=======
module.exports.signup = async(req,res,next)=>{
>>>>>>> acffb59ae94b358b69f7836a0da8fc00fd105db9
    try{
        let{username,email,password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser,(err) =>{
            if(err) {
                return next(err);
            }
            req.flash("Success","Welcome to Wanderlust!");
            res.redirect("/listings");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};


module.exports.renderLoginForm = (req,res)=>{
    res.render("./users/login.ejs");
};

module.exports.login = async(req,res)=>{
   // res.flash("success","Welcome back Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{
    req.logout((err) =>{
        if(err) {
            return next(err);
        }
<<<<<<< HEAD
        req.flash(("success","you are logged out!"));
=======
        req.flash("success","you are logged out!");
>>>>>>> acffb59ae94b358b69f7836a0da8fc00fd105db9
        res.redirect("/listings");
    })
};

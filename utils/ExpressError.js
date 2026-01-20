
class ExpressError extends Error {
    constructor(statusCode,message) {
        super();
        this.statusCode= statusCode;
        this.message = message;
    }
}

module.exports  = ExpressError;
<<<<<<< HEAD
    
=======
    
>>>>>>> acffb59ae94b358b69f7836a0da8fc00fd105db9

'use strict';

const blueprint = require ('@onehilltech/blueprint'),
      mongodb = require ('@onehilltech/blueprint-mongodb'),
      ObjectId = mongodb.Schema.Types.ObjectId,
      MatchCriteria = require('./MatchCriteria'),
      Account = blueprint.app.models.Account;

// User Schema
var userSchema = new mongodb.Schema({

    firstName: {type: String, required: true, trim: true},

    lastName: {type: String, required: true, trim: true},

    gender: {type: String, trim: true},

    bio: {type: String, trim: true},

    homeAddress: {type: String,  trim: true},

    birthday: {type: Date, trim: true},

    activated: {type: Boolean},

    status: {type: String, trim: true},

    avatar: {type: String, trim: true},

    // allow the user to own multiple dogs
    dog: [{

        firstName: {type: String,  trim: true},

        lastName: {type: String, trim: true},

        bio: {type: String, trim: true},

        gender: {type: String,  trim: true},

        breed: {type: String,  trim: true},

        birthday: {type: Date,  trim: true},

        size: {type: String,  trim: true},

        playfulness: {type: String,  trim: true},
        
        energy: {type: String,  trim: true},

        fixed: {type: String,  trim: true},

        vetVerification: {type: Boolean, trim: true},

        avatar: {type: String, trim: true}
    }]
});


userSchema.methods.fullName = function(){
    return this.firstName + " " + this.lastName;
};

userSchema.methods.getAgeOfOwner = function(){
    var now = new Date();
    var age = now.getFullYear() - this.birthday.getFullYear();
    return age;
};

userSchema.methods.getAgeOfDog= function(){
    var now = new Date();
    var age = now.getFullYear() - this.dog.birthday.getFullYear();
    return age;
};


//Registration Methods
userSchema.methods.updateAct = function(varBool){
    this.activated = varBool;
};

userSchema.methods.getActivation = function(){
    return this.activated;
};

userSchema.methods.getUrl = function () {
  return this.avatar;
};

userSchema.methods.getDogUrl = function () {
  return this.avatar;
};


const COLLECTION_NAME = 'users';
const MODEL_NAME = 'user';

module.exports = mongodb.resource(MODEL_NAME, userSchema, COLLECTION_NAME);

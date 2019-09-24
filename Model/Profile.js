const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    fName: {
        type: String
    },
    mName: {
        type: String
    },
    lName: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    userType: {
        type: String
    },
    aboutMe: {
        type: String
    },
    address: {
        type: String
    },
    Contact: {
        type: Number
    },

    dob: {
        type: Date
    },
    gender: {
        type: String
    },
    Badge1: {
        type: Number
    },
    Badge2: {
        type: Number
    },
    Badge3: {
        type: Number
    },
    email: {
        type: String
    },
    profilepic: {
        type: String
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.statics.checkCredentialsDb = async (username, password) => {

    const user1 = await Profile.findOne({ Username: username, Password: password })
    return user1;

}

userSchema.methods.generateAuthToken = async function () {

    console.log("token");

    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'tokens')

    console.log(token);
    user.tokens = user.tokens.concat({ token: token })
    await user.save()
    return token
}


const Profile = mongoose.model("Profile", userSchema);
module.exports = Profile;
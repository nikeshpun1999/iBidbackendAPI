const mongoose = require("mongoose");


const auctionSchema = mongoose.Schema({

    auctionID: {
        type: String
    },
    userId: {
        type: String
    },

    like: {
        type: number
    }

});

const Comment = mongoose.model("Comment", auctionSchema);
module.exports = Comment;
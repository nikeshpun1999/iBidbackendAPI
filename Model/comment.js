const mongoose = require("mongoose");


const auctionSchema = mongoose.Schema({

    auctionID: {
        type: String
    },
    userId: {
        type: String
    },

    comment: {
        type: String
    }

});

const Comment = mongoose.model("Comment", auctionSchema);
module.exports = Comment;
const mongoose = require("mongoose");


const auctionSchema = mongoose.Schema({
    title: {
        type: String
    },
    shippingcost: {
        type: String
    },
    sellerName: {
        type: String
    },
    country: {
        type: String
    },
    year: {
        type: Number
    },
    condition: {
        type: String
    },
    type: {
        type: String
    },
    auctionIssuetime: {
        type: Date
    },

    auctionEndtime: {
        type: Date
    },

    deliveryDate: {
        type: Date
    },
    auctionImage: {
        type: String
    },
    auctionLock: {
        type: Date
    },
    userId: {
        type: String
    },
    progress: {
        type: String
    }
});

const Auction = mongoose.model("Auction", auctionSchema);
module.exports = Auction;
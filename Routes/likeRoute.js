const express = require("express");
const router = express.Router();
const Like = require("../Model/like");



router.post("/postlike", (req, res) => {

    currenttime = Date();




    const auction = new Like({

        recipeId=req.body.recipeid,
        userId=req.body.userid,
        like=

    })
    auction.save()
        .then(result => {
            console.log(req);

            res.status(201).json("Like Saved");


        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })

})


module.exports = router;
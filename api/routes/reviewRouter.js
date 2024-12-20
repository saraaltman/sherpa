const express = require('express');
const reviewRouter = express.Router();
const Review = require('../models/review.model');

// find reviews by user
// query parameters will be used to find reviews ex.
// /reviews?user=
// /reviews?entity=
// request will just have 1 query param
reviewRouter.get('/', async (req, res) => {
    var user = req.query.user;
    var entity = req.query.entity;

    query = {};
    if (user != null) {
        query.user = user;
    } else if (entity != null) {
        query.entity = entity;
    }

    const reviews = await Review.find(query);
    res.json(reviews);
})

reviewRouter.post('/', async (req, res) => {
    const review = new Review({
        user: req.body.user,
        entity: req.body.entity,
        rating: req.body.rating,
        note: req.body.note,
        reviewType: req.body.reviewType,

    });
    
    try {
        const response = await review.save();
        res.json(response);
    } catch (err) {
        res.status(500).json({"error": err});
    }

})

reviewRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Review.findByIdAndUpdate(id, req.body, {"new": true});
        res.json(response);
    } catch (err) {
        res.status(500).json({"error": err});
    }
    
})

reviewRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Review.findByIdAndDelete(id);
        res.send(`Successfully deleted review ${response._id}`);
    } catch (err) {
        res.status(500).json({"error": err});
    }
})

module.exports = reviewRouter;
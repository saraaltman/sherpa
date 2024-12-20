const express = require('express');
const trailRouter = express.Router();
const Trail = require('../models/trail.model');

trailRouter.get("/", async (req, res) => {
    try {
        const trails = await Trail.find();
        res.json(trails);
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
    
});



module.exports = trailRouter;
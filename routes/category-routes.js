const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.post('/', (req, res) => {
    const category = new Category(req.body);
    category.save().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    })
});

router.get("/all", (req, res) => {
    Category.find({}).then((categories) => {
        res.json(categories);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    })
});

module.exports = router;
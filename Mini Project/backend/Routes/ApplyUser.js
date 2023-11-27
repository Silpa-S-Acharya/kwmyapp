const express = require('express')
const router = express.Router()
const Detail = require("../models/Detail")
const { body, validationResult } = require('express-validator');


router.post("/applyuser", [
    body('fname').isLength({ min: 5 }),
    body('email').isEmail(),
    body('address').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try{
            await Detail.insertMany({
                fname: req.body.fname,
                email: req.body.email,
                address: req.body.address
            });
            res.json({ success: true });

        }
        catch (error) {
            console.error(error)
            res.json({ success: false });

        }
    })

module.exports = router;
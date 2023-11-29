const express = require('express')
const router = express.Router()
const Detail = require("../models/Detail")
const { body, validationResult } = require('express-validator');


router.post("/applyuser", [
    body('fname').isLength({ min: 5 }),
    body('email').isEmail(),
    body('address').isLength({ min: 5 }),
    body('mobno'),
    body('gender'),
    body('district'),
    body('dob'),
    body('panchayat'),
    body('cardno')],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try{
            await Detail.insertMany({
                fname: req.body.fname,
                email: req.body.email,
                address: req.body.address,
                mobno: req.body.mobno,
                gender: req.body.gender,
                district: req.body.district,
                dob: req.body.dob,
                panchayat: req.body.panchayat,
                cardno: req.body.cardno
            });
            res.json({ success: true });

        }
        catch (error) {
            console.error(error)
            res.json({ success: false });

        }
    })

module.exports = router;

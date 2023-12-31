const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');


router.post("/createuser", [
    body('fname').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 }),
    body('mobno')
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.insertMany({
                fname: req.body.fname,
                email: req.body.email,
                password: req.body.password,
                mobno: req.body.mobno
            })
            res.json({ success: true });

        }
        catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    })

router.post("/loginuser", [
    body('email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }

            if (req.body.password !== userData.password) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });

            }
            return res.json({ success: true });

        }
        catch (error) {
            console.log(error);
            res.json({ success: false });

        }
    })


module.exports = router;
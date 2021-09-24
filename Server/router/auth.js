const express = require('express');
const router = express.Router();

require('../db/conn');
const Passenger = require('../model/paxSchema');
const User = require('../model/userSchema');


//add user route
router.post('/adduser', (req, res) => {

    const { username, password, usertype } = req.body;

    const user = new User({ username, password, usertype });

    user.save().then(() => {
        res.status(201).json("user details saved to db");
    }).catch((err) => res.status(202).json("failed to add pax details"));
});

// login route by admin or stakeholder
router.post('/login', async(req, res) => {
    try {
        //console.log("inside login");
        const { username, password } = req.body;
        //console.log("un type" + typeof(username) + " and pw type" + typeof(password));
        if (username=="" || password=="") {
            //console.log("inside if");
            return res.status(201).json("User not in DB");
        }
        const userLogin = await User.findOne({ username: username });
        console.log(userLogin);
        if (userLogin === null) {
            return res.status(201).json("User not in DB");
        } else {
            if (userLogin.username === username && userLogin.password === password) {
                return res.json("User Login successful");
            } else {
                return res.json("User Login failed");
            }
        }

    } catch (error) {
        console.log("login route error");
    }
})

// registeration route for passenger by admin
router.post('/register', (req, res) => {

    const { name, email, phone, discounttype, expiryofcoupon, nextdateofjourney, uniquekey } = req.body;

    if (!name || !email || !discounttype || !expiryofcoupon) {
        return res.status(400).json({ error: "Fill pax data properly to add" });
    }

    const pax = new Passenger({ name, email, phone, discounttype, expiryofcoupon, nextdateofjourney, uniquekey });

    pax.save().then(() => {
        return res.status(201).json("pax details saved to db");
    }).catch((err) => res.status(202).json("failed to add pax details"));
});

// Passenger login 
router.post('/paxlogin', async (req, res) => {

    try {
        const { name, email, phone, discounttype, expiryofcoupon, nextdateofjourney, uniquekey } = req.body;
        
        if (!email) {
            return res.status(201).json("Enter login credentials properly");
        }
        const paxLogin = await Passenger.findOne({ email: email });
        //console.log(paxLogin);
        if (paxLogin === null) {
            return res.status(201).json("Pax not in DB");
        } else {
            if (paxLogin.email === email) {
                console.log("phone= " + phone);
                console.log("typeofphone= " + typeof(phone));
                if(phone!=null && phone!="")
                {
                    console.log("inside if condition");
                    const result = await Passenger.updateOne({email},{
                    $set:{
                        phone:phone
                    }
                });}
                
                return res.json("Pax Login successful");
            } else {
                return res.json("Pax Login failed");
            }
        }

    } catch (error) {
        console.log("pax login route error");
    }
});


// get pax info by Pax and Stakeholder
router.post('/getpaxinfo', async (req, res) => {
try {
     //res.json("response from pax info");
     const { email} = req.body;
     console.log("Email from frontend= " + email);
     const paxInfo = await Passenger.findOne({ email: email });
    console.log(paxInfo);
    return res.json(paxInfo);

} catch (error) {
    
}
});


module.exports = router;
const express = require("express");
const router = express.Router();
let Organization = require('../models/Organizations')


//Route to GET all Orgs
router.get('/', (req,res) => {
    Organization.find() 
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
})


// Route to POST new Org
router.post('/', (req, res) => {
    let organization = new Organization({
        name: req.body.name,
        orgType: req.body.orgType,
        description: req.body.description
    })
    organization.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
})

module.exports = router;
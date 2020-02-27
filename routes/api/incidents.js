const express = require("express");
const router = express.Router();
const Incident = require("../../models/Incident");
const validateIncidentForm = require("../../validation/incidents");

router.get("/test", (req, res) => {
  res.json({ msg: "this is incidents route" });
});

router.get("/all", (req, res) => {
  Incident.find({}).then ( (incidents) => {
    res.json({
      incidents
    })
  })
});

router.get("/:incident_id", (req, res) => {
  Incident.find({_id: req.params.incident_id}).then(incident => {
    res.json({
      incident
    });
  });
});

router.post("/create", (req, res) => {
  debugger;
  const { errors, isValid } = validateIncidentForm(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

   const newIncident = new Incident({
     witness: req.body.witness,
     lat: req.body.lat,
     lng: req.body.lng,
     description: req.body.description,
     category: req.body.category
   });

   newIncident.save()
    .then(incident => res.json(incident))
    .catch(err => console.log(err));
   
});

router.patch("/update/:incident_id", (req, res) => {

  // const { errors, isValid } = validateIncidentForm(req.body);
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  
  debugger;
  Incident.findOneAndUpdate({ _id: req.params.incident_id}, req.body, { new: true } )
    .then(incident => {
      debugger
      res.json(incident)
    })
    .catch(err => console.log(err));
    // Incident.find({ _id: req.params.incident_id}).then( (incident)=> {
    //   res.json(
    //     incident
    //   )
    // })
});

module.exports = router;

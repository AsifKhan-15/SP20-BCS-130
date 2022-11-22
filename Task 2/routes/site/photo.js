const express = require("express");
const router = express.Router();
const Car = require("../../models/car");

router.get("/photo/delete/:id", async (req, res) => {
  let car = await Car.findByIdAndDelete(req.params.id);
  res.redirect("/photo");
});
router.get("/photo/edit/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  res.render("photo/edit", { car });
});
router.post("/photo/edit/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  car.model = req.body.model;
  car.make = req.body.make;
  car.variant = req.body.variant;
  await car.save();
  res.redirect("/photo");
});

router.get("/photo/add", (req, res) => {
  res.render("photo/add");
});
router.post("/photo/add", async (req, res) => {
  let car = new Car(req.body);
  await car.save();
  res.redirect("/photo");
});
router.get("/photo", async (req, res) => {
  const pageTitle = "List of photo";
  const photo = await Car.find();
  res.render("photo/list", { pageTitle, photo });
});

module.exports = router;

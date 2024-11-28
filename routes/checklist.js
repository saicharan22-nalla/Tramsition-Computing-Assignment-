const express = require("express");
const router = express.Router();
const fetchData = require("../services/fetchData");
const evaluateRules = require("../services/evaluateRules");

router.get("/", async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateRules(data);
    res.render("dashboard", { results });
  } catch (error) {
    res.status(500).send("An error occurred while processing the checklist.");
  }
});

module.exports = router;

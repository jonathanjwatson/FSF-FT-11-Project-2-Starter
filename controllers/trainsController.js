const express = require("express");

const router = express.Router();

// TODO: Add Database Calls to All Routes. 
router.get("/");

router.get("/:id");

router.post("/");

router.put("/:id");

router.delete("/:id");

module.exports = router;
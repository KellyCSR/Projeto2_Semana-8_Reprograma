const controller = require("../controllers/moviesControllers"); //importei o arquivo controller

const express = require("express");

const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll)
router.get("/titulos", controller.getByTitle)
router.get("/:id", controller.getById)

module.exports = router
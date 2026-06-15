const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../controllers/productController");

const router = express.Router();

// Todas las rutas protegidas con JWT
router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getById);
router.post("/", verifyToken, create);
router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, remove);

module.exports = router;

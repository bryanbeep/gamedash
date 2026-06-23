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

// Todas las rutas publicas
router.get("/", getAll);
router.get("/:id", getById);
// Todas las rutas privadas
router.post("/", verifyToken, create);
router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, remove);

module.exports = router;

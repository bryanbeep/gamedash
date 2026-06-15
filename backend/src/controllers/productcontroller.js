const Product = require("../models/Product");

// Listar todos los productos
async function getAll(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener productos", error: error.message });
  }
}

// Obtener un producto por id
async function getById(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el producto", error: error.message });
  }
}

// Crear un producto
async function create(req, res) {
  try {
    const { title, description, genre, platform, price, stock, imageUrl } =
      req.body;

    if (!title || price === undefined) {
      return res
        .status(400)
        .json({ message: "El título y el precio son obligatorios" });
    }

    const product = await Product.create({
      title,
      description,
      genre,
      platform,
      price,
      stock,
      imageUrl,
    });

    res.status(201).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el producto", error: error.message });
  }
}

// Editar un producto
async function update(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al actualizar el producto",
        error: error.message,
      });
  }
}

// Eliminar un producto
async function remove(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await product.destroy();
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el producto", error: error.message });
  }
}

module.exports = { getAll, getById, create, update, remove };

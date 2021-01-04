import { Router } from "express";
const router = Router();
import * as categoriaProduct from "../controller/controller.main";
router.post("/categoriaProducto", categoriaProduct.addCategoriaProduct);
router.get("/categoriaProducto", categoriaProduct.getCategoriaProduct);
router.get("/categoriaProducto/:id", categoriaProduct.getCategoriaProductById);
router.delete(
  "/categoriaProducto/:id",
  categoriaProduct.deleteCategoriaProduct
);
export default router;

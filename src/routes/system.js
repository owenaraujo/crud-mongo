import { Router } from "express";
const router = Router();
import * as categoriaProduct from "../controller/controller.main";
import * as unidades from "../controller/controller.unidadesMedida";
import * as empresa from "../controller/controller.empresa";
import * as dolar from "../controller/controller.dolar";
router.post("/categoriaProducto", categoriaProduct.addCategoriaProduct);
router.get("/categoriaProducto", categoriaProduct.getCategoriaProduct);
router.get("/categoriaProducto/:id", categoriaProduct.getCategoriaProductById);
router.delete("/categoriaProducto/:id",categoriaProduct.deleteCategoriaProduct);

router.post("/unidades", unidades.addUnidades);
router.get("/unidades", unidades.getUnidades);
router.get("/unidades/:id", unidades.getUnidadesById);
router.delete("/unidades/:id",unidades.deleteUnidades);

router.post("/empresa", empresa.addEmpresa);
router.get("/empresa", empresa.getEmpresa);
router.get("/empresa/:id", empresa.getEmpresaById);
router.put("/empresa/:id", empresa.putEmpresa);
router.delete("/empresa/:id",empresa.deleteEmpresa);

router.post("/dolar", dolar.addDolar);
router.get("/dolar", dolar.getDolar);
router.get("/dolar/:id", dolar.getDolarById);
router.delete("/dolar/:id",dolar.deleteDolar);



export default router;
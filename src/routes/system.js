import { Router } from "express";
const router = Router();
import * as categoriaProduct from "../controller/controller.main";
import * as unidades from "../controller/controller.unidadesMedida";
import * as empresa from "../controller/controller.empresa";
import { verifyToken } from "../middlewares/auth.jwt";
router.post("/categoriaProducto",verifyToken, categoriaProduct.addCategoriaProduct);
router.get("/categoriaProducto", categoriaProduct.getCategoriaProduct);
router.get("/categoriaProducto/activate", categoriaProduct.getCategoriaProductActivate);
router.get("/categoriaProducto/:id", categoriaProduct.getCategoriaProductById);
router.delete("/categoriaProducto/:id",verifyToken,categoriaProduct.deleteCategoriaProduct);
router.delete("/categoriaProducto/activate/:id",verifyToken,categoriaProduct.activateCategoriaProduct);

router.post("/unidades",verifyToken, unidades.addUnidades);
router.get("/unidades", unidades.getUnidades);
router.get("/unidades/activate", unidades.getUnidadesActive);
router.get("/unidades/:id", unidades.getUnidadesById);
router.delete("/unidades/:id",verifyToken,unidades.deleteUnidades);
router.delete("/unidades/activate/:id",verifyToken,unidades.activateUnidades);

//router.post("/empresa", empresa.addEmpresa);
router.get("/empresa", empresa.getEmpresa);
//router.get("/empresa/:id", empresa.getEmpresaById);
router.put("/empresa/:id",verifyToken, empresa.putEmpresa);
//router.delete("/empresa/:id",empresa.deleteEmpresa);
router.put("/empresa/dolar/:id",verifyToken,empresa.putDolar);
router.put("/empresa/datos/:id",verifyToken,empresa.putDatos);





export default router;
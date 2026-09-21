import express from "express";
import {addProductController , getProductsController ,purchaseProductController,restockProductController,getProductHistoryController} from "../controller/productController.js"
import {productValidationRules , productValidate , productPurchaseValidationRules,productPurchaseValidate,productRestockValidationRules,productRestockValidate} from "../validation/productValidation.js";

const router = express.Router();
  router.use(express.json());
  

  router.post("/products",productValidationRules,productValidate,addProductController);
  router.get("/products",getProductsController);
  router.post("/products/purchase",productPurchaseValidationRules,productPurchaseValidate,purchaseProductController);
  router.post("/products/restock",productRestockValidationRules,productRestockValidate,restockProductController);
  router.get("/products/:productName/history",getProductHistoryController);


export default router;
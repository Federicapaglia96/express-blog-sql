import express from "express";
import blogController from "../controllers/blogController.js"
const router = express.Router();

//imposto la prima rotta
router.get ("/",blogController.index);
router.get ("/:id", blogController.show)
export default router;


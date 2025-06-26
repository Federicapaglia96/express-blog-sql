import express from "express";
import postsController from "../controllers/postsController.js"
const router = express.Router();

//imposto la prima rotta
router.get ("/",postsController.index);
router.get ("/:id", postsController.show)
export default router;


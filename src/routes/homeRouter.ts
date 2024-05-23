import { Router } from "express";
import { post } from "../controllers/homeController";

const router = Router();

router.post('/customer-loans', post);


export default router

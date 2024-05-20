import { Router } from "express";
import { get, post } from "../controllers/homeController";

const router = Router();

router.get('/', get)
router.post('/customer-loans', post);


export default router

import express from "express";
import { getBooks, postBooks } from "../controllers/usersBooks.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", postBooks);

export default router;
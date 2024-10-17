import express from "express";
import { getAccount, getBlog, postBlog } from "../controller/blog.controller.js";

const router = express.Router();

router.post("/account", getAccount);
router.get("/", getBlog);
router.post("/", postBlog);

export default router;
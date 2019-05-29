import express = require("express");
import * as ApiController from "./controllers/api";

const router = express.Router();

router.get("/api/todos", ApiController.getTodos);
router.post("/api/todos", ApiController.postTodo);
router.get("/api/todos/:todoId", ApiController.getTodoById);

export default router;
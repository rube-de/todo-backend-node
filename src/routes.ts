import express = require("express");
import * as ApiController from "./controllers/api";

const router = express.Router();

router.route("/api/todos")
.get(ApiController.getTodos)
.post(ApiController.postTodo);
router.route("/api/todos/:todoId")
.get(ApiController.getTodoById)
.put(ApiController.updateTodo)
.delete(ApiController.deleteTodo);

export default router;
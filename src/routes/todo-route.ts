import { Router } from "express";
import todoController from "../controllers/todo-controller";
const router = Router();

router.get("/get/:TASK_ID", todoController.readTask);
router.patch("/update/:TASK_ID", todoController.updateTask);
router.delete("/delete/:TASK_ID", todoController.eraseTask);
router.post("/create", todoController.addTask);

export default router;

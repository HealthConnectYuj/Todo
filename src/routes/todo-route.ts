import { Router } from "express";
import todoController from "../controllers/todo-controller";
import checkToDoRouteEndpoint from "../middlewares/check-todo-routes"


const router = Router();
// router.use(checkToDoRouteEndpoint)

router.post("/create", todoController.addTask);
router.get("/get/:TASK_ID", todoController.readTask);
router.patch("/update/:TASK_ID", todoController.updateTask);
router.delete("/delete/:TASK_ID", todoController.eraseTask);
router.get("/getList/:TASK_PER_PAGE", todoController.listTask)
export default router;

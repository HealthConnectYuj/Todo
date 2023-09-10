"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("../controllers/todo-controller"));
const router = (0, express_1.Router)();
// router.use(checkToDoRouteEndpoint)
router.post("/create", todo_controller_1.default.addTask);
router.get("/get/:TASK_ID", todo_controller_1.default.readTask);
router.patch("/update/:TASK_ID", todo_controller_1.default.updateTask);
router.delete("/delete/:TASK_ID", todo_controller_1.default.eraseTask);
router.get("/getList/:TASK_PER_PAGE", todo_controller_1.default.listTask);
exports.default = router;

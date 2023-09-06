"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../models/todo-model"));
const todo_model_2 = __importDefault(require("../models/todo-model"));
const addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formBody = req.body;
        const task = formBody.TASK;
        const doneFlag = formBody.DONE_FLAG;
        const createdBy = formBody.CREATED_BY;
        const modifiedBy = formBody.MODIFIED_BY;
        const addTaskDetails = {
            task: task,
            doneFlag: doneFlag,
            createdBy: createdBy,
            modifiedBy: modifiedBy,
        };
        const newTask = new todo_model_1.default(addTaskDetails);
        const newTaskEntry = yield newTask.createTask(addTaskDetails);
        res.status(201).send(newTaskEntry);
    }
    catch (error) {
        return error;
    }
});
const readTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = parseInt(req.params.TASK_ID);
        const taskInfo = yield todo_model_1.default.getTask(taskId);
        res.status(201).send(taskInfo);
    }
    catch (error) {
        return error;
    }
});
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formBody = req.body;
        const taskId = parseInt(req.params.TASK_ID);
        const task = formBody.TASK;
        const doneFlag = formBody.DONE_FLAG;
        const createdBy = formBody.CREATED_BY;
        const modifiedBy = formBody.MODIFIED_BY;
        const updateTaskDetails = {
            task: task,
            doneFlag: doneFlag,
            createdBy: createdBy,
            modifiedBy: modifiedBy,
        };
        const newTask = new todo_model_1.default(updateTaskDetails);
        const newTaskEntry = yield newTask.updateTask(updateTaskDetails, taskId);
        res.status(201).send(newTaskEntry);
    }
    catch (error) {
        return error;
    }
});
const eraseTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = parseInt(req.params.TASK_ID);
        const newTaskEntry = yield todo_model_2.default.deleteTask(taskId);
        res.status(201).send(newTaskEntry);
    }
    catch (error) {
        return error;
    }
});
const listTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasksPerPage = parseInt(req.params.TASK_PER_PAGE);
        const taskInfo = yield todo_model_1.default.listOfTask(tasksPerPage);
        res.status(201).send(taskInfo);
    }
    catch (error) {
        return error;
    }
});
exports.default = {
    addTask,
    readTask,
    updateTask,
    eraseTask,
    listTask
};

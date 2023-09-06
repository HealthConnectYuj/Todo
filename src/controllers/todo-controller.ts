import { RequestHandler } from "express";
import ToDoClass from "../models/todo-model";
import TodoClass from "../models/todo-model";

const addTask: RequestHandler = async (req, res, next) => {
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

    const newTask = new ToDoClass(addTaskDetails);
    const newTaskEntry = await newTask.createTask(addTaskDetails);
    res.status(201).send(newTaskEntry);
  } catch (error) {
    return error;
  }
};

const readTask: RequestHandler = async (req, res, next) => {
  try {
    const taskId = parseInt(req.params.TASK_ID);
    const taskInfo = await ToDoClass.getTask(taskId);
    res.status(201).send(taskInfo);
  } catch (error) {
    return error;
  }
};

const updateTask: RequestHandler = async (req, res, next) => {
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

    const newTask = new ToDoClass(updateTaskDetails);
    const newTaskEntry = await newTask.updateTask(updateTaskDetails, taskId);
    res.status(201).send(newTaskEntry);
  } catch (error) {
    return error;
  }
};

const eraseTask: RequestHandler = async (req, res, next) => {
  try {
    const taskId = parseInt(req.params.TASK_ID);
    const newTaskEntry = await TodoClass.deleteTask(taskId);
    res.status(201).send(newTaskEntry);
  } catch (error) {
    return error;
  }
};

const listTask: RequestHandler = async (req, res, next) => {
  try {
    const tasksPerPage = parseInt(req.params.TASK_PER_PAGE);
    const taskInfo = await ToDoClass.listOfTask(tasksPerPage);
    res.status(201).send(taskInfo);
  } catch (error) {
    return error;
  }
};

export default {
  addTask,
  readTask,
  updateTask,
  eraseTask,
  listTask
};

import { Request, Response, RequestHandler, NextFunction } from "express";

const checkValidRoute: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {

const { method, url } = req;
const taskId =req.params.TASK_ID
console.log(taskId)
  // Define the valid routes based on the route parameters (e.g., :TASK_ID)
  const validRoutes = [
    "/create",
    `/get/${req.params.TASK_ID}`,
    `/update/${req.params.TASK_ID}`,
    `/delete/${req.params.TASK_ID}`,
    `/getList/${req.params.TASK_PER_PAGE}`
  ];

 
  if (validRoutes.includes(url)) {
    next();
  } else {
    res.status(404).json({ error: `${method} ${url} not found` });
  }
};

export default checkValidRoute;

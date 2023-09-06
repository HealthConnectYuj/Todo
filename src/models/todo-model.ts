import getCurrentDateAndTime from "../utils/get-date-utils";
import db from "../data/database";
import getDisplay from "../utils/paginate-utils"

interface ToDoTableColumns {
  task: string;
  doneFlag: number;
  createdBy: string;
  modifiedBy: string;
}

class TodoClass implements ToDoTableColumns {
  task: string;
  doneFlag: number;
  createdBy: string;
  modifiedBy: string;

  constructor(todoObject: ToDoTableColumns) {
    this.task = todoObject.task;
    this.doneFlag = todoObject.doneFlag;
    this.createdBy = todoObject.createdBy;
    this.modifiedBy = todoObject.modifiedBy;
  }

  //create
  async createTask(submittedTask: ToDoTableColumns) {
    const dateAndTimeToday = getCurrentDateAndTime();
    const dateToday = dateAndTimeToday.currentDateFull;
    const query = `
    INSERT INTO TO_DO_TABLE (
        task
        ,doneFlag
        ,createdBy
        ,createdDate
  )
  VALUES (
  '${submittedTask.task}',
  ${submittedTask.doneFlag},
  '${submittedTask.createdBy}',
  '${dateToday}'
  )
  `;

    const result = await db.request.query(query);
    if (result.rowsAffected[0] === 1) {
      return { addedNewTask: true };
    } else {
      return { addedNewTask: false };
    }
  }

  //get
  static async getTask(taskId: number) {
    const query = `
    SELECT *
    FROM TO_DO_TABLE
    WHERE taskId = ${taskId}
  `;

    const result = await db.request.query(query);
    const record = result.recordset[0];
    return record;
  }

  //update
  async updateTask(submittedTask: ToDoTableColumns, taskId: number) {
    const dateAndTimeToday = getCurrentDateAndTime();
    const dateToday = dateAndTimeToday.currentDateFull;
    const query = `
    UPDATE TO_DO_TABLE
    SET
    task = '${submittedTask.task}',
    doneFlag = ${submittedTask.doneFlag},
    modifiedBy = '${submittedTask.modifiedBy}',
    modifiedDate = '${dateToday}'
    WHERE taskId = ${taskId}
  `;

    const result = await db.request.query(query);
    if (result.rowsAffected[0] === 1) {
      return { updatedTask: true };
    } else {
      return { updatedTask: false };
    }
  }

  //delete
  static async deleteTask(taskId: number) {
    const query = `
    DELETE
    FROM TO_DO_TABLE
    WHERE taskId = ${taskId}
  `;

    const result = await db.request.query(query);
    if (result.rowsAffected[0] === 1) {
      return { deletedTask: true };
    } else {
      return { deletedTask: false };
    }
  }

  //list
  static async listOfTask(tasksPerPage: number) {
    const query = `
    SELECT taskId, task, doneFlag
    FROM TO_DO_TABLE
  `;

    const result = await db.request.query(query);
    const record = result.recordset
    const tasksWithPage = getDisplay(record, tasksPerPage)
    return tasksWithPage;
  }
}

export default TodoClass;

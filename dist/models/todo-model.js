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
const get_date_utils_1 = __importDefault(require("../utils/get-date-utils"));
const database_1 = __importDefault(require("../data/database"));
const paginate_utils_1 = __importDefault(require("../utils/paginate-utils"));
class TodoClass {
    constructor(todoObject) {
        this.task = todoObject.task;
        this.doneFlag = todoObject.doneFlag;
        this.createdBy = todoObject.createdBy;
        this.modifiedBy = todoObject.modifiedBy;
    }
    //create
    createTask(submittedTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateAndTimeToday = (0, get_date_utils_1.default)();
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
            const result = yield database_1.default.request.query(query);
            if (result.rowsAffected[0] === 1) {
                return { addedNewTask: true };
            }
            else {
                return { addedNewTask: false };
            }
        });
    }
    //get
    static getTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
    SELECT *
    FROM TO_DO_TABLE
    WHERE taskId = ${taskId}
  `;
            const result = yield database_1.default.request.query(query);
            const record = result.recordset[0];
            return record;
        });
    }
    //update
    updateTask(submittedTask, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateAndTimeToday = (0, get_date_utils_1.default)();
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
            const result = yield database_1.default.request.query(query);
            if (result.rowsAffected[0] === 1) {
                return { updatedTask: true };
            }
            else {
                return { updatedTask: false };
            }
        });
    }
    //delete
    static deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
    DELETE
    FROM TO_DO_TABLE
    WHERE taskId = ${taskId}
  `;
            const result = yield database_1.default.request.query(query);
            if (result.rowsAffected[0] === 1) {
                return { deletedTask: true };
            }
            else {
                return { deletedTask: false };
            }
        });
    }
    //list
    static listOfTask(tasksPerPage) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
    SELECT taskId, task, doneFlag
    FROM TO_DO_TABLE
  `;
            const result = yield database_1.default.request.query(query);
            const totalRow = result.rowsAffected[0];
            const record = result.recordset;
            const tasksWithPage = (0, paginate_utils_1.default)(record, tasksPerPage);
            return tasksWithPage;
        });
    }
}
exports.default = TodoClass;

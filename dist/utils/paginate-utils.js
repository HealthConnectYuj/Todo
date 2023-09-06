"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDisplay(allTasks, tasksPerPage) {
    // Iterate through allTasks and assign the pageNumber to each task
    const tasksWithPage = allTasks.map((task, index) => (Object.assign(Object.assign({}, task), { pageNumber: Math.floor(index / tasksPerPage) + 1 })));
    return tasksWithPage;
}
exports.default = getDisplay;

interface TaskDisplay {
    taskId: number;
    task: string;
    doneFlag: number;
}

function getDisplay (allTasks: TaskDisplay[], tasksPerPage: number){

     // Iterate through allTasks and assign the pageNumber to each task
    const tasksWithPage: TaskDisplay[] = allTasks.map((task, index) => ({
      ...task,
      pageNumber: Math.floor(index / tasksPerPage) + 1,
    }));

    return tasksWithPage;
    
}

export default getDisplay
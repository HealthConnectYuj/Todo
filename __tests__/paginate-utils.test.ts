import getDisplay from '../src/utils/paginate-utils'; // Assuming your function is in a file named getDisplay.ts

describe('getDisplay', () => {
  it('should add pageNumber property to each task based on tasksPerPage', () => {
    const tasksPerPage = 3; // Define the number of tasks per page

    // Create an array of tasks without pageNumber
    const allTasks = [
      { taskId: 1, task: 'Task 1', doneFlag: 0 },
      { taskId: 2, task: 'Task 2', doneFlag: 1 },
      { taskId: 3, task: 'Task 3', doneFlag: 0 },
      { taskId: 4, task: 'Task 4', doneFlag: 1 },
      { taskId: 5, task: 'Task 5', doneFlag: 0 },
    ];

    // Calculate the expected result with pageNumber added
    const expectedTasks = [
      { taskId: 1, task: 'Task 1', doneFlag: 0, pageNumber: 1},
      { taskId: 2, task: 'Task 2', doneFlag: 1, pageNumber: 1 },
      { taskId: 3, task: 'Task 3', doneFlag: 0, pageNumber: 1 },
      { taskId: 4, task: 'Task 4', doneFlag: 1, pageNumber: 2 },
      { taskId: 5, task: 'Task 5', doneFlag: 0, pageNumber: 2 },
    ];

    // Call the getDisplay function
    
    const result = getDisplay(allTasks, tasksPerPage);
    console.log(result)
    // Assert that the result matches the expected result
    expect(result).toEqual(expectedTasks);
  });
});

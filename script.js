
let tasks = [];

export function addTask(title, dueTime, priority) {
  try {
    if (!title.trim() || dueTime <= 0 || priority < 1 || priority > 3) {
      throw new Error("Invalid task details provided.");
    }

    const task = { title, dueTime, priority };
    tasks.push(task);
    console.log(`Task "${title}" added successfully.`);
  } catch (error) {
    console.error(error.message);
  }
}

export function sortTasksByPriority() {
  tasks.sort((a, b) => a.priority - b.priority);
  console.log("Tasks sorted by priority.");
}

export function displayTasksDueWithin(timeframe) {
  const dueWithin = tasks.filter((task) => task.dueTime <= timeframe);
  console.log(`Tasks due within the next ${timeframe} minutes:`);
  dueWithin.forEach((task) => {
    console.log(`${task.title} - Due in ${task.dueTime} minutes`);
  });
}

export function sendReminders() {
  tasks.forEach((task) => {
    setTimeout(() => {
      console.log(`Reminder: Task "${task.title}" is due now!`);
    }, task.dueTime * 60000); // Convert minutes to milliseconds
  });
}

export { tasks };

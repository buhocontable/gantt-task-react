import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(2020, currentDate.getMonth(), 1),
      end: new Date(),
      name: "Régimenes fiscales",
      id: "fiscalRegime",
      progress: 0,
      type: "project",
      hideChildren: true,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(),
      name: "Persona física",
      id: "pfae",
      progress: 0,
      type: "task",
      project: "fiscalRegime",
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(),
      name: "Resico",
      id: "resico",
      progress: 0,
      type: "task",
      project: "fiscalRegime",
      displayOrder: 3,
    },
  ];

  const tasks2: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Actividades fiscales",
      id: "taxActivities",
      progress: 0,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(),
      name: "Idea",
      id: "Task0",
      progress: 0,
      type: "task",
      project: "taxActivities",
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(),
      name: "Research",
      id: "Task1",
      progress: 0,
      dependencies: ["Task0"],
      type: "task",
      project: "taxActivities",
      displayOrder: 3,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(),
      name: "Discussion with team",
      id: "Task2",
      progress: 0,
      dependencies: ["Task1"],
      type: "task",
      project: "taxActivities",
      displayOrder: 4,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(),
      name: "Developing",
      id: "Task3",
      progress: 0,
      dependencies: ["Task2"],
      type: "task",
      project: "taxActivities",
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(),
      name: "Review",
      id: "Task4",
      type: "task",
      progress: 70,
      dependencies: ["Task2"],
      project: "taxActivities",
      displayOrder: 6,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(),
      name: "Release",
      id: "Task6",
      progress: 0,
      type: "milestone",
      dependencies: ["Task4"],
      project: "taxActivities",
      displayOrder: 7,
    },
  ];

  return [...tasks, ...tasks2];
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}

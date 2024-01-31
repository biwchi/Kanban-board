import { defineStore } from "pinia";

export type Task = {
  id: number;
  columnId: number;
  title: string;
  description: string;
};

export type Column = {
  id: number;
  title: string;
  tasks: Task[];
};

export const useBoardStore = defineStore("board", () => {
  const columns = ref<Column[]>([
    {
      id: 1,
      title: "Column 1",
      tasks: [
        {
          id: 1,
          columnId: 1,
          title: "Task 1",
          description: "Task 1 description",
        },
        {
          id: 2,
          columnId: 1,
          title: "Task 2",
          description: "Task 2 description",
        },
      ],
    },
    {
      id: 2,
      title: "Column 2",
      tasks: [
        {
          id: 3,
          columnId: 2,
          title: "Task 1",
          description: "Task 1 description",
        },
        {
          id: 4,
          columnId: 2,
          title: "Task 2",
          description: "Task 2 description",
        },
        {
          id: 5,
          columnId: 2,
          title: "Task 3",
          description: "Task 3 description",
        },
      ],
    },
  ]);

  const isEditModal = ref(false);
  const editingTask = ref<Task>();

  function createColumn(title: string) {
    title = title.length > 0 ? title : "Untitled";
    columns.value.unshift({ id: Date.now(), title, tasks: [] });
  }

  function deleteColumn(id: number) {
    columns.value = columns.value.filter((column) => column.id !== id);
  }

  function createTask(columnId: number, title: string, description: string) {
    const column = columns.value.find((column) => column.id === columnId);

    if (column) {
      column.tasks.push({
        id: Date.now(),
        columnId,
        title,
        description,
      });
    }
  }

  function editTask(task: Task, title: string, description: string) {
    task.title = title;
    task.description = description;
  }

  function deleteTask(task: Task) {
    const column = columns.value.find((column) => column.id === task.columnId);

    if (column) {
      column.tasks = column.tasks.filter((t) => t.id !== task.id);
    }
  }

  function getTaskById(id: number) {
    let task: Task | undefined;

    columns.value.forEach((column) => {
      if (task) return;
      task = column.tasks.find((t) => t.id === id);
    });

    return task;
  }

  return {
    columns,
    editingTask,
    isEditModal,
    createColumn,
    deleteColumn,
    createTask,
    editTask,
    deleteTask,
    getTaskById,
  };
});

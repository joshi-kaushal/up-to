import { TaskState } from "../types";

export default function getCategory(task: TaskState): any {
  switch (task.priority) {
    case "high":
      if (task.energy === "low") return "now";
      else if (task.energy === "medium" || task.energy === "high")
        return "asap";
      break;
    case "medium":
      if (task.energy === "low") return "now";
      else if (task.energy === "medium" || task.energy === "high")
        return "soon";
    case "low":
      if (task.energy === "low" || task.energy === "medium") return "next";
      else return "rethink";
    default:
      break;
  }
}

import BaseHttpService from "./base-http.service";

export default class TasksService extends BaseHttpService {
  fetchTasks(filter) {
    return this.post("tasks", filter);
  }

  async deleteTask(id) {
    await this.delete(`tasks/${id}`);
  }

  updateTaskStatus(id, status) {
    return this.post(`tasks/${id}/status`, { status });
  }

  createTask(title, description) {
    return this.post(`tasks/create`, { title, description });
  }
}

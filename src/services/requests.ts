import { api } from "./api";

export const requests = {
  async getUsers() {
    return await (
      await api.get("/users")
    ).data;
  },
  async getProcess() {
    return (await api.get("/process")).data;
  },
};

export const requestsTasks = {
  async createTask(data: any) {
    return (await api.post("/tasks", data)).data;
  },

  async findAll() {
    return (await api.get("/tasks")).data;
  },
};

export const requestsProcess = {
  async getProcess() {
    return await (
      await api.get("/process")
    ).data;
  },

  async createProcess(process: any) {
    (await api.post("/process", process)).data;
  },

  async getProcessPerId(processId: string) {
    return await (
      await api.get(`/process/${processId}`)
    ).data;
  },

  async delete(processId: string) {
    await api.delete(`/process/${processId}`);
  },

  async update(processId: string, process: any) {
    await api.patch(`/process/${processId}`, process);
  },
};

export const requestsArea = {
  async create(area: any) {
    await api.post("/areas", area);
  },

  async getAreas() {
    return (await api.get("/areas")).data;
  },

  async getAreaById(areaId: string) {
    return (await api.get(`/areas/${areaId}`)).data;
  },
};

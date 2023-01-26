import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/cadastro");
  }

  get(id) {
    return http.get(`/cadastro/${id}`);
  }

  create(data) {
    return http.post("/cadastro", data);
  }

  update(id, data) {
    return http.put(`/cadastro/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cadastro/${id}`);
  }

  deleteAll() {
    return http.delete(`/cadastro`);
  }

  findByName(nome) {
    return http.get(`/cadastro?nome=${nome}`);
  }
}

export default new TutorialDataService();
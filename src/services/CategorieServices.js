import http from "@/http-common";

class CategorieService {
  async add(addCategorie) {
    try {
      const response = await http.post('/Categoria', addCategorie);
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar a categoria:", error);
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await http.get('/Categoria');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar as categorias:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await http.delete(`/Categoria/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir a categoria:", error);
      throw error;
    }
  }
}

export default new CategorieService();
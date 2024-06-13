import http from "@/http-common";

class ProductService {
    async add(addProduct) {
        try {
            const response = await http.post('/Produto', addProduct);
            return response.data;
        } catch (error) {
            console.error("Erro ao adicionar o produto:", error);
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await http.get('/Produto');
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar os produtos:", error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await http.get(`/Produto/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar o produto:", error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await http.delete(`/Produto/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao excluir o produto:", error);
            throw error;
        }
    }

    async update(id, updateProduct) {
        try {
            const response = await http.put(`/Produto/${id}`, updateProduct);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar o produto:", error);
            throw error;
        }
    }
}

export default new ProductService();
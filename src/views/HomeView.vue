<template>
  <div class="container">
    <form class="d-flex mt-5" role="search">
      <input v-model="searchProducts" class="form-control me-2" type="search" placeholder="Nome Produto"
        aria-label="Search">
      <button class="btn btn-success" @click="filteredProducts">Pesquisar</button>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th style="width: 22%;">Nome Produto</th>
          <th style="width: 22%;">Preço</th>
          <th>Quantidade</th>
          <th>Categoria</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.nome }}</td>
          <td>{{ product.preco }}</td>
          <td>{{ product.quantidade }}</td>
          <td>{{ product.categoria.nome }}</td>
          <td>
            <RouterLink :to="`/editproduct/${product.id}`" class="edit btn" title="Editar" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </RouterLink>
            <button class="delete btn" title="Deletar" @click="deleteProduct(product.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DeleteButton from '../components/DeleteButton.vue';
import EditeButton from '../components/EditButton.vue';
import ProductService from '@/services/ProductServices.js';

export default {
  name: 'ProductTable',
  components: {
    DeleteButton,
    EditeButton
  },
  data() {
    return {
      searchProducts: '',
      products: [],
      filteredProducts: []
    };
  },
  async mounted() {
    await this.getProducts();
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.nome.toLowerCase().includes(this.searchProducts.toLowerCase());
      });
    }
  },
  methods: {
    async getProducts() {
      try {
        const response = await ProductService.getAll();
        console.log(response);
        this.products = response;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        const confirm = window.confirm('Tem certeza que deseja excluir esse registro?');
        
        if (confirm) {
          await ProductService.delete(id);
          this.getProducts();
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 60px;
  padding-left: 20px;
}
</style>

<style scoped>
.edit {
  color: #FFC107;
  margin-right: 15px;
}

.delete {
  color: #dc3545;
}
</style>
<template>
  <div class="container">
    <form class="d-flex mt-3" role="search">
      <input v-model="searchCategories" class="form-control me-2" type="search" placeholder="Nome Categoria"
        aria-label="Search">
      <button class="btn btn-success" type="submit">Pesquisar</button>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th style="width: 22%;">Nome Categoria</th>
          <th style="width: 22%;">Descrição</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in filteredCategories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.nome }}</td>
          <td>{{ category.descricao }}</td>
          <td>
            <EditButton />
            <button @click="deleteCategory(category.id)" class="delete btn" title="Deletar" data-toggle="tooltip">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="color: red;" fill="currentColor"
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
import EditButton from '../components/EditButton.vue';
import CategoryService from '../services/CategorieServices.js';

export default {
  name: 'CategoryTable',
  components: {
    DeleteButton,
    EditButton
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await CategoryService.getAll();
        this.categories = response;
        console.log(this.categories);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCategory(id) {
      try {
        await CategoryService.delete(id);
        this.getCategories();
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    filteredCategories() {
      return this.categories.filter(category => {
        return category.nome.toLowerCase().includes(this.searchCategories.toLowerCase());
      });
    }
  },
  data() {
    return {
      categories: [],
      searchCategories: ''
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 60px;
  padding-left: 20px;
}
</style>

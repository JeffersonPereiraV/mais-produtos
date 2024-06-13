<template>
  <section class="bg-gray-100" style="margin-top: 80px;">
    <div class="mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-8">
        <div class="rounded-lg bg-white p-6 shadow-lg">
          <form @submit.prevent="submit" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Nome</label>
              <input v-model="product.nome"
                class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                placeholder="Name" type="text" id="name" />
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="preco">Preço</label>
                <input v-model="product.preco"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                  placeholder="Preço" type="text" id="preco" />
              </div>
              <div>
                <label class="sr-only" for="quantidade">Quantidade</label>
                <input v-model="product.quantidade"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                  placeholder="Quantidade" type="text" id="quantidade" />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Categoria</label>
              <select v-model="product.categoriaId" class="form-control p-3" id="exampleFormControlSelect1">
                <option v-for="option in categorias" :value="option.id" :key="option.value">{{ option.nome }}</option>
              </select>
            </div>
            <div>
              <label class="sr-only" for="message">Descrição</label>
              <textarea v-model="product.descricao"
                class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                placeholder="Descrição " rows="4" id="message"></textarea>
            </div>
            <div class="">
              <button type="submit" class="btn my-2 me-2 bg-dark text-white font-bold py-2 px-4 rounded">
                Adicionar
              </button>
              <RouterLink to="/" class="text-decoration-none btn btn-outline-danger py-2 px-4 rounded">
                Cancelar
              </RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SubmitButton from '../components/SubmitButton.vue';
import CancelButton from '../components/CancelButton.vue';
import Name from '../components/Name.vue';
import ProductPrice from '../components/ProductPrice.vue';
import ProductQuantity from '../components/ProductQuantity.vue';
import ProductCategory from '../components/ProductCategory.vue';
import Description from '../components/Description.vue';
import ProductService from '../services/ProductServices.js';
import CategoryService from '../services/CategorieServices.js';

export default {
  data() {
    return {
      categorias: [],
      product: {},
    };
  },
  async mounted() {
    await this.getProduct();
    await CategoryService.getAll().then((response) => {
      this.categorias = response;
      console.log(this.categorias);
    })
  },
  methods: {
    async getProduct() {
      const { id } = this.$route.params;
      try {
        const response = await ProductService.getById(id);
        this.product = response;
        this.product.categoriaId = this.product.categoria.id
      } catch (error) {
        console.error(error);
      }
    },
    async submit() {
      try {
        await ProductService.update(this.product.id, {
          "nome": this.product.nome,
          "preco": this.product.preco,
          "quantidade": this.product.quantidade,
          "categoriaId": this.product.categoriaId,
          "descricao": this.product.descricao,
          "status": this.product.status
        });
        alert('Produto atualizado com sucesso!');
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    SubmitButton,
    CancelButton,
    Name,
    ProductPrice,
    ProductQuantity,
    ProductCategory,
    Description,
  },
};
</script>

<style>
input[type="text"],
textarea {
  width: calc(100% - 2rem);
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
}
</style>

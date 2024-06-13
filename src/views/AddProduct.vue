<template>
  <section class="bg-gray-100" style="margin-top: 80px;">
    <div class="mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-8">
        <div class="rounded-lg bg-white p-2 shadow-lg">
          <form @submit.prevent="submit" action="#" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Nome</label>
              <input v-model="addProduct.Name" class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                placeholder="Name" type="text" id="name" />
            </div>
            <div class="">
              <div class="mb-2 flex flex-col">
                <label class="sr-only" for="preco">Preço</label>
                <input type="text" v-model.number="addProduct.Price"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                  placeholder="Preço" id="preco" />
              </div>
              <div class="mb-2">
                <label class="sr-only" for="quantidade">Quantidade</label>
                <input type="text" v-model.number="addProduct.Quantity"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                  placeholder="Quantidade" id="quantidade" />
              </div>
            </div>
            <div class="mb-2">
              <label for="exampleFormControlSelect1">Categoria</label>
              <select v-model="addProduct.CategoryId" class="form-control p-3" id="exampleFormControlSelect1">
                <option v-for="option in categorias" :value="option.id" :key="option.value">{{ option.nome }}</option>
              </select>
            </div>
            <div>
              <label class="sr-only" for="message">Descrição</label>
              <textarea v-model="addProduct.Description"
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
import Name from '../components/Name.vue';
import ProductPrice from '../components/ProductPrice.vue';
import ProductQuantity from '../components/ProductQuantity.vue';
import ProductCategory from '../components/ProductCategory.vue';
import Description from '../components/Description.vue';
import ProductService from '../services/ProductServices.js';
import CategoryService from '../services/CategorieServices.js';

export default {
  name: 'AddProduct',
  data() {
    return {
      addProduct: {
        Name: "",
        Price: "",
        Quantity: "",
        Description: "",
        CategoryId: "",
      },
      categorias: []
    };
  },
  methods: {
    async submit() {
      try {
        await ProductService.add({
          nome: this.addProduct.Name,
          preco: this.addProduct.Price,
          quantidade: this.addProduct.Quantity,
          categoriaId: this.addProduct.CategoryId,
          descricao: this.addProduct.Description,
          status: 1
        })
        this.resetForm();
        alert('Produto adicionado com sucesso!');
      } catch (error) {
        console.log(error);
      }
    },
    resetForm() {
      this.addProduct = {
        Name: "",
        Price: "",
        Quantity: "",
        Description: "",
        CategoryId: "",
      };
    },
  },
  mounted() {
    CategoryService.getAll().then((response) => {
      this.categorias = response;
      console.log(this.categorias);
    })
  },
  components: {
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
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
}
</style>

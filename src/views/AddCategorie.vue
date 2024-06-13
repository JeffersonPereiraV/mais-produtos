<template>
  <section class="bg-gray-100" style="margin-top: 80px;">
    <div class="mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-8">
        <div class="rounded-lg bg-white p-3 shadow-lg">
          <form @submit.prevent="submit" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Nome</label>
              <input v-model="addCategorie.Name"
                class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                placeholder="Nome" type="text" id="name" required />
            </div>
            <div>
              <label class="sr-only" for="description">Descrição</label>
              <textarea v-model="addCategorie.Description"
                class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600"
                placeholder="Descrição" rows="4" id="description" required></textarea>
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
import { ref } from 'vue';
import SubmitButton from '../components/SubmitButton.vue';
import CancelButton from '../components/CancelButton.vue';
import CategorieService from '../services/CategorieServices.js';

export default {
  components: {
    SubmitButton,
    CancelButton,
  },
  data() {
    return {
      addCategorie: {
        Name: "",
        Description: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        await CategorieService.add({
          nome: this.addCategorie.Name,
          descricao: this.addCategorie.Description,
        });
        alert('Categoria adicionada com sucesso!');
        this.resetForm();
      } catch (error) {
        console.error("Erro ao adicionar a categoria:", error);
        alert('Erro ao adicionar a categoria.');
      }
    },
    resetForm() {
      this.addCategorie = {
        Name: "",
        Description: "",
      };
    }
  },
  setup() {
    const addCategorie = ref({
      Name: "",
      Description: "",
    });

    const resetForm = () => {
      addCategorie.value = {
        Name: "",
        Description: ""
      };
    };

    return {
      addCategorie,
      resetForm,
    };
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

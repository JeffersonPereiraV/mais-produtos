<template>
    <div>
      <label class="sr-only" for="preco">Preço</label>
      <input 
        class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600" 
        placeholder="Preço" 
        type="text" 
        id="preco" 
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductPrice',
  };
  </script>
  
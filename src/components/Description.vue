<template>
    <div>
      <label class="sr-only" for="message">Descrição</label>
      <textarea 
        class="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-pink-600" 
        placeholder="Descrição " 
        rows="4" 
        id="message"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Description',
  };
  </script>
  
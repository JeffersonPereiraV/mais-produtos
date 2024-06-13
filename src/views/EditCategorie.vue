<template>
    <section class="bg-gray-100" style="margin-top: 80px;">
      <div class="mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-y-8">
          <div class="rounded-lg bg-white p-6 shadow-lg">
            <form action="#" class="space-y-4">
              <Name />
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              </div>
              <Description />
              <div class="flex justify-center space-x-4">
                <SubmitButton />
                <CancelButton />
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
  import Description from '../components/Description.vue';
  
  export default {
    components: {
      SubmitButton,
      CancelButton,
      Name,
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
  
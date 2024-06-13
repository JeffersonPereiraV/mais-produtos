<template>
    <footer class="bg-dark text-light">
        <div>Unimar | ADS | {{ new Date().getFullYear()}}</div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
 footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;  
  }
</style>
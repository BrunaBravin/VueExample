<script setup>
  import HeaderHome from './components/HeaderHome.vue'
  import ListCadastro from './components/ListCadastro.vue'
  import Cadastro from "./pages/Cadastro.vue";
</script>


<template>
  <header>
    <HeaderHome />
  </header>
  <main>
    <Cadastro/>
    <ListCadastro />
  </main>
  <div id="modal-container"></div>
</template>




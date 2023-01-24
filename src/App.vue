<script setup>
  import HeaderHome from './components/HeaderHome.vue'
  import ListCadastro from './components/ListCadastro.vue'
  import CadastroMenu from './components/CadastroMenu.vue'
</script>


<template>
  <header>
    <HeaderHome />
  </header>
  <main>
    <CadastroMenu />
    <ListCadastro />
  </main>
  <div id="modal-container"></div>
</template>




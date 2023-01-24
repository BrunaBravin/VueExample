<template>
<div class="box">
    <div class="columns is-mobile">
      <div class="column is-two-thirds">
        <h2 class="title">Cadastro de Funcionários</h2>
      </div>
      <div class="column">
        <CadastroModal />
      </div>
      <div class="column">
        <button class="button is-success is-small">Buscar dados</button>
        <input id="pesquisa" type="search"/>
      </div>
    </div>    
</div>
</template>

<script>
import CadastroModal from './CadastroModal.vue'
export default {
  name: 'CadastroMenu',
  components: {
    CadastroModal
  }
}
</script>
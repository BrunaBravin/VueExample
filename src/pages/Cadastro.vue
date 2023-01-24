<template>
  <header>
    <cadastro-menu>
      <button class="button is-success" @click="incluir = !incluir" id="new">Incluir</button>
    </cadastro-menu>
  </header>
  <cadastro-modal :incluir="incluir"/>
</template>

<script>
import CadastroMenu from "../components/CadastroMenu.vue";
import CadastroModal from "../components/CadastroModal.vue";
export default {
  name: "Cadastros",
  components: {CadastroModal, CadastroMenu},
  data(){
    return{
      incluir: false
    }
  }
}
</script>
<template>
  <cadastro-modal v-if="incluir" :arrCadastros="arrCadastro" :cadastro="cadastro" :cadEditar="cadEditar" :index="index" >

    <button id="btnSalvar" class="button" type="submit" @click.prevent="salvar()" value="Enviar">Enviar</button>

    <button id="btnCancelar" class="button" @click.prevent="fechar()">Cancel</button>

  </cadastro-modal>
  <div class="box">
  <ListCadastro @editarCadastro="editar" @buscar-cadastro="buscar" :incluir="incluir" :index="index" :cadastro="cadastro" :arrCadastros="arrayFiltrado">
   
   
    <button class="button is-default is-success is-light" id="botao2" @click="abrirModal()">Cadastrar usuário</button>
     
    <!-- <button id="btnSalvar" class="button" type="submit" @click.prevent="salvar()" value="Enviar">Enviar</button>

    <button id="btnCancelar" class="button" @click.prevent="incluir = !incluir">Cancel</button> -->
  </ListCadastro>
  <div id="modal-container"></div>
</div>
</template>

<script>
import CadastroMenu from "../components/CadastroMenu.vue";
import ListCadastro from "../components/ListCadastro.vue"
import CadastroModal from "../components/CadastroModal.vue";
export default {
  name: "Cadastros",
  components: {
    CadastroModal,
    ListCadastro,
    CadastroMenu  
  },
  data(){
    return{
      arrCadastro:JSON.parse(localStorage.getItem("data")) || [],  // passar o botão salva como slot, metodo salvar nessa pagina
      incluir: false,
      arrayCadastros: JSON.parse(localStorage.getItem("arrCadastros")) || [],
      cadastro:{
          nome: '',
          email: '',
          senha: '',
          idade: '', 
          id: '',
        },
      index: -1,
      cadEditar: 0,
      arrayFiltrado: []
    }
  },
  watch:{
    arrCadastro:{
      handler(newValue, oldValue){
        this.arrayFiltrado = this.arrCadastro.filter(cadastro => cadastro.id == this.arrayFiltrado[0].id)||[]
                
      },
      deep: true
    }
  },
  methods:{ 
    abrirModal(){
      
      this.incluir = !this.incluir
    },
    fechar(){
      this.cadastro.nome = "";
        this.cadastro.idade = "";
        this.cadastro.email = "";
        this.cadastro.senha = "";
        this.cadastro.id = "";
        this.incluir = false;
        this.index = -1
    },
    salvar(){  
      console.log("entrou");
        var data = {
            nome: this.cadastro.nome,
            idade: this.cadastro.idade,
            email: this.cadastro.email,
            senha: this.cadastro.senha,
            id: this.index === -1 ? new Date().getTime().toString() : this.cadastro.id
        };
        
        this.index === -1 ? this.arrCadastro.push(data) :  this.arrCadastro[this.index] = data

        localStorage.setItem("data", JSON.stringify(this.arrCadastro));

        this.cadastro.nome = "";
        this.cadastro.idade = "";
        this.cadastro.email = "";
        this.cadastro.senha = "";
        this.incluir = false;
        this.index = -1

    },
    editar({cadastro}){
      this.index = this.arrCadastro.indexOf(this.arrCadastro.find(arrcad => arrcad.id == cadastro.id))
      this.cadEditar = cadastro;
      this.incluir = true;       
      }, 


    buscar(search){
      //const existe = this.arrCadastro.find(cadastro => cadastro.nome == search) consigo acessar SEARCH e EXISTE
      this.arrayFiltrado = this.arrCadastro.filter(cadastro => cadastro.nome == search)||[]
      console.log(this.arrayFiltrado)  // array de cadastros original(com todos os cadastros)
      if (this.arrayFiltrado.length === 0) {
        this.arrayFiltrado = this.arrCadastro
      }
    } 
  },
  created(){
      this.arrayFiltrado =  this.arrCadastro
    }
}
</script>

<style scoped>
  .box{
    margin-top: 2px;
  }

  #botao2 {
    border-radius: 12px;
    border-style: outset;
    padding: 20px 30px;;
    font-weight: 400;
    box-shadow: 0px 2px #dfdfdf;
  }

</style>
<template>
    <div class="columns">
      <div class="column is-2">
        <div class="field">
          <div class="control has-icons-left">
            <input id="pesquisa" class="input is-default is-link" :id="pesquisa" v-model="search" type="search"/>
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="column">
          <p class="control">
            <button class="button is-default is-link is-light" id="botao" @click="$emit('buscarCadastro', search)">
              Buscar usuários
            </button>  
          </p> 
      </div>

      <div class="column is-2">
          <p class="control">
            <button class="button is-default is-link is-light" v-show="excluir_selecionados" @click="excluiVarios()">Excluir selecionados</button>  
          </p> 
      </div>

      <div class="column is-2">
        <slot></slot>
      </div> 

    </div>

      <div class="table is-vcentered">
        <table class="table is-fullwidth">
          <tbody>
            <tr v-for="(cadastro, index) in arrCadastros" :key="index">
              <div class="box">
                <td>{{ cadastro.id }}</td>
                <td>{{ cadastro.nome }}</td>
                <td>{{ cadastro.idade }}</td>
                <td>{{ cadastro.email }}</td>
                <td>
                  <button @click="$emit('editarCadastro', {cadastro:cadastro})" class="waves-effect btn-small blue darken-1">
                    <i class="material-icons">editar</i>
                  </button>
                  <button @click="confirma(cadastro)" class="waves-effect btn-small red darken-1">
                    <i class="material-icons">excluir</i>
                  </button>
                </td>
                <td><input v-bind:id="cadastro.id" type="checkbox" @change="verificaSelecionados()" class="checkbox"></td>
              </div>
            </tr>
          </tbody>
        </table>
        <span class="bulma-arrow-mixin"></span>
      </div>

  </template>
  
  <script>
  import CadastroModal from './CadastroModal.vue'
  import CadastroMenu from './CadastroMenu.vue'
  export default {
    name: 'HeaderHome',
    components:{
    CadastroModal,
    CadastroMenu
    },
    props:{
      arrCadastros: {
        required: true
      },
      cadastro:{
      required: true
      },
      index:{
      required: true
      },
      incluir:{
      required: true
      }
    },
    data(){
        return {
            excluir_selecionados: false,
            ckList: [],
            cadEditar: 0,
            search: "",
        }
    },
    watch:{
    arrayFiltrado(){
      console.log("entrou no watch")
      console.log(this.arrayFiltrado)
    }
    },
    methods: {
      verificaSelecionados(){
        document.querySelectorAll("input[type=checkbox]:checked").length > 0 ? this.excluir_selecionados = true : this.excluir_selecionados = false;
      },

      pegarSelecionados(){
        let selecionados = document.querySelectorAll("input[type=checkbox]:checked") 
        for (let index = 0; index < selecionados.length; index++) {
          let existe = this.ckList.findIndex(el => el === selecionados[index].id)
          if (existe == -1){     //se ele n existe no ckList, será incluido
            this.ckList.push(selecionados[index].id)
          }          
        }
      },

      excluiVarios(){
        this.pegarSelecionados()
        console.log(this.ckList)
        this.ckList.forEach(id => {
          this.excluirUm(id).then(() => {
            let deselecionados = document.querySelectorAll("input[type=checkbox]:checked")
            for (let index = 0; index < deselecionados.length; index++) {
              deselecionados[index].checked = false          
            }
            this.ckList = []
          }).catch((e) => {
            console.log(e)
          })
        });
      },

      async excluirUm(cadastroId){
        console.log(this.arrCadastros.findIndex(el => el.id === cadastroId))
        console.log(this.arrCadastros)
        this.arrCadastros.splice(this.arrCadastros.findIndex(el => el.id === cadastroId), 1)
        localStorage.setItem('data', JSON.stringify(this.arrCadastros))
      },

      confirma(cadastro){
        var r=confirm("Excluir cadastro(s)?");
        if (r==true){
          this.excluirUm(cadastro.id);  // cadastro.id é igual o index do elemento a ser excluído
        } else { 
          console.log("cancelado");
        }
      },
    },

  }
  </script>

<style scoped>

  .button{
    border-radius: 12px;
    border-style: outset;
    padding: 20px 30px;
    font-weight: 400;
    box-shadow: 0px 2px #dfdfdf;
  }

 #pesquisa{
  border-radius: 12px;
  border-color: #136fb9;
  border-width: 3px;
  padding: 17px;
  padding-left: 30px;
  /* primeira forma de fazer o icon da barra de pesquisa(porém é a maneira "crua"):
  background: url("../assets/Icons/search-interface-symbol.png") no-repeat; 
  background-size: 15px;
  background-position: 0.2cm;
  padding-left: 30px; */
 }



</style>
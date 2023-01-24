<template>
    <div class="table is-vcentered">
      <table class="table-is-stripped">
        <thead>
          <tr>
            <th>Nome:</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Senha</th>
            <th class="acao">Editar</th>
            <th class="acao">Excluir</th>   
            <th class="acao">Selecionar</th>    
            <th>
              <button v-show="excluir_selecionados">Excluir selecionados</button>
            </th>
            <th>
              <button @click="pegarSelecionados">Teste</button>
            </th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="index in 10" :key="index">
          <td><input type="checkbox" @change="verificaSelecionados" class="checkbox"></td>
          <td>{{index}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderHome',
    data(){
        return {
            excluir_selecionados: false
        }
    },
    methods: {
      verificaSelecionados(){
        document.querySelectorAll("input[type=checkbox]:checked").length > 0 ? this.excluir_selecionados = true : this.excluir_selecionados = false
      },
      pegarSelecionados(){
        document.querySelectorAll("input[type=checkbox]:checked")
        for(let item in document.querySelectorAll("input[type=checkbox]:checked")){
          console.log(item)
        }
      }
    }
  }
  </script>
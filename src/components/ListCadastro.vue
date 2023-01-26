<template>
    <div class="table is-vcentered">
      <table class="table-is-stripped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
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
          <ul>
            <li v-for="(erro, index) of errors" :key="index">
              campo <b>{{  erro.field }}</b> - {{ erro.defaultMessage }}
            </li>
          </ul>
          <tr v-for="cadastro of cadastro" :key="cadastro.id">

            <td>{{ cadastro.nome }}</td>
            <td>{{ cadastro.idade }}</td>
            <td>{{ cadastro.email }}</td>
            <td>
              <button @click="editar(cadastro)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="excluir(cadastro)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>
            <td><input type="checkbox" @change="verificaSelecionados" class="checkbox"></td>
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
      },

    }
  }
  </script>
<template>
    <div class="table is-vcentered">
      <table class="table-is-stripped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Senha</th>
            <th class="acao">Editar</th>
            <th class="acao">Excluir</th>   
            <th class="acao">Selecionar</th>    
            <th>
              <button v-show="excluir_selecionados">Excluir selecionados</button>
            </th>        
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderHome',
    Data(){
        return {
            excluir_selecionados: false
        }
    },
    methods: {
    excluir_selecionados() {
      this.excluir_selecionados = !this.excluir_selecionados
    }
  }
  }
  </script>
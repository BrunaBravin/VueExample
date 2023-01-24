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
              <button class="acao" id="extra">Excluir selecionados</button>
            </th>        
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <p> {{ teste }}</p>
  </template>
  
  <script>
  export default {
    name: 'HeaderHome',
    Data(){
        return {
            teste: 'Testando'
        }
    }
  }
  </script>
<template>
    <form class="box">
          <div class="field">
            <label class="label" for="m-nome">Nome</label>
            <div class="control">
              <input id="m-nome" class="input" type="text">
            </div>
          </div>
        
          <div class="field">
            <label for="m-idade" class="label">Idade</label>
            <div class="control">
              <input id="m-idade" class="input" type="text">
            </div>
          </div>
    
          <div class="field">
            <label for="m-email" class="label">Email</label>
            <div class="control">
              <input id="m-email" class="input" type="text">
            </div>
          </div>
    
          <div class="field">
            <label for="m-senha" class="label">Senha</label>
            <div class="control">
              <input id="m-senha" class="input" type="password">
            </div>
          </div>
        
          <button id="btnSalvar" class="button">Salvar</button>
          <button class="button">Cancel</button>
        </form>
</template>

<script>
export default {
  name: 'FormCadastro'
}
</script>
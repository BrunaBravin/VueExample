<template>
    <div class="modal" :style="'display: block'">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <form class="box">
                    <div class="field">
                        <label class="label" for="m-nome">Nome</label>
                        <div class="control">
                            <input id="m-nome" class="input" type="text" v-model="cadastro.nome">
                        </div>
                    </div>

                    <div class="field">
                        <label for="m-idade" class="label">Idade</label>
                        <div class="control">
                            <input id="m-idade" class="input" type="text" v-model="cadastro.idade">
                        </div>
                    </div>
                    <div class="field">
                        <label for="m-email" class="label">Email</label>
                        <div class="control">
                            <input id="m-email" class="input" type="text" v-model="cadastro.email">
                        </div>
                    </div>

                    <div class="field">
                        <label for="m-senha" class="label">Senha</label>
                        <div class="control">
                            <input id="m-senha" class="input" type="password" v-model="cadastro.senha">
                        </div>
                    </div>

                    <slot></slot>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CadastroModal',
  props:{
    arrCadastros: {
      required: true
    },
    cadEditar: {
      default: 0
    },
    index:{
      default: -1
    },
    cadastro:{
      required: true
    }
  },
  // data(){
  //     return{
  //       cadastro:{
  //         nome: '',
  //         email: '',
  //         senha: '',
  //         idade: '', 
  //         id: '' 
  //       }
  //     }
  // },
  created(){
    console.log(this.cadEditar)
    if (this.index >= 0){
        this.cadastro.nome = this.arrCadastros[this.index].nome
        this.cadastro.idade = this.arrCadastros[this.index].idade
        this.cadastro.email = this.arrCadastros[this.index].email
        this.cadastro.senha = this.arrCadastros[this.index].senha
        this.cadastro.id = this.arrCadastros[this.index].id  //usar .this quando for prop ou data
        // console.log(this.cadEditar)
    }

  }
}
</script>
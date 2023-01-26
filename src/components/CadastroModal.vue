<template>
    <div class="modal" :style="incluir ? 'display: block' : ''">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <form class="box" @submit.prevent="salvar">
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
                    <input id="btnSalvar" class="button" type="submit" value="Enviar">

                    <button class="button" @click="incluir = !incluir">Cancel</button>
                </form>
                <!-- <button class="button" id="btnSalvar" form="formulariocadastro" type="submit"  value="Enviar">Enviar</button> -->
                <!-- <input id="btnSalvar"  form="formulariocadastro" class="button" type="submit" value="Enviar"></input> -->
            </div>
        </div>
    </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService"
export default {
    name: 'CadastroModal',
  props:{
    incluir: {
      required: true
    }
  },
  data(){
      return{
        cadastro:{
          nome: '',
          email: '',
          senha: '',
          idade: ''
        },
        arrCadastros: [],
        errors: []
      }
  },
  mounted(){
    this.listar()
  },

  methods:{
    listar(){
      this.cadastro.listar().then(response => {
        this.cadastro = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    salvar(){
        var data = {
            nome: this.cadastro.nome,
            idade: this.cadastro.idade,
            email: this.cadastro.email,
            senha: this.cadastro.senha
        };
      
        TutorialDataService.create(data)
        .then(response => {
            alert('Salvo com sucesso!')
            // this.cadastro.id = responde.data.id;
            // console.log(response.data);
            this.arrCadastros.push(this.cadastro)
            this.listar()
            this.errors = []
        }).catch(e => {
            console.log(e.response.data.errors)
        })
    }
  }
}
</script>
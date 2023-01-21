<template>
    <v-container fluid>
    <v-textarea
      name="input-7-1"
      v-model="question"
      data-cy="question"
      filled
      label="Question:"
      auto-grow
      value=""
      clearable
    ></v-textarea>
    please put check to the right answer...
    <v-radio-group>
      <v-row>
        <v-checkbox v-model="s1"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field data-cy="choice1" v-model="choice1" label="A" outlined dense clearable></v-text-field></v-col>
        <v-checkbox v-model="s2"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field data-cy="choice2" v-model="choice2" label="B" outlined dense clearable></v-text-field></v-col>
      </v-row>
      <v-row>
        <v-checkbox data-cy="cb" value="cb1" v-model="s3"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field data-cy="choice3" v-model="choice3" label="C" outlined dense clearable></v-text-field></v-col>
        <v-checkbox v-model="s4"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field data-cy="choice4" v-model="choice4" label="D" outlined dense clearable ></v-text-field></v-col>
      </v-row>
    </v-radio-group>
    <v-btn elevation="2" data-cy="sub_btn" @click="submit" >Submit</v-btn>
  </v-container>
  </template>
  
  <script>

  export default {
    name: 'addquestionPage',
    data(){
    return{
      question:'',
      choice1:'',
      choice4:'',
      choice3:'',
      choice2:'',
      s1:'',
      s2:'',
      s3:'',
      s4:'',
      answer:''

      
    }
  },
  methods: {
    submit() {
      if(this.s1 == true){
        this.answer = this.choice1
      }
      if(this.s2 == true){
        this.answer = this.choice2
      }
      if(this.s3 == true){
        this.answer = this.choice3
      }
      if(this.s4 == true){
        this.answer = this.choice4
      }
        let qlistData = {
        question: this.question,
        choice1: this.choice1,
        choice2: this.choice2,
        choice3: this.choice3,
        choice4: this.choice4,
        answer: this.answer
      }
      console.log(qlistData)
      location.reload()
        this.$axios.$post('http://localhost:3001/questions', qlistData)
        .then((response)=>{
        
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      },
  }
  }
 
  </script>
  
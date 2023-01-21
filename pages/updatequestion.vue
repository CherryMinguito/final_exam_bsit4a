<template>
    <v-container fluid>
        <v-select :items="qList" data-cy="select"  item-text="_id" label="select the question to update" v-model="item._id" v-on:change="getData(item._id)" return-object outlined></v-select>
    <v-textarea
      name="input-7-1"
      v-model="question"
      filled
      label="Question:"
      auto-grow
      value=""
      clearable
    ></v-textarea>
    please put check to the right answer...
      <v-row>
        <v-checkbox v-model="s1"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field v-model="choice1" label="A" outlined dense clearable></v-text-field></v-col>
        <v-checkbox v-model="s2"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field v-model="choice2" label="B" outlined dense clearable></v-text-field></v-col>
      </v-row>
      <v-row>
        <v-checkbox v-model="s3"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field v-model="choice3" label="C" outlined dense clearable></v-text-field></v-col>
        <v-checkbox v-model="s4"></v-checkbox>
        <v-col cols="12" sm="6" md="4"><v-text-field v-model="choice4" label="D" outlined dense clearable ></v-text-field></v-col>
      </v-row>
    <v-btn elevation="2" data-cy="upbtn" @click="update" >Update</v-btn>
    <v-btn elevation="2" data-cy="delbtn" @click="qdelete" >Delete</v-btn>
  </v-container>
  </template>
  
  <script>

  export default {
    mounted(){
        this.getQuestion();
      },
    name: 'updatePage',
    data() {
    return{
    
      len:'',
      id:'',  
      question:'',
      choice1:'',
      choice4:'',
      choice3:'',
      choice2:'',
      s1:'',
      s2:'',
      s3:'',
      s4:'',
      answer:'',
      qList:[],
      newqList:[],
      item:['1','2','3']

      
    }
  },
  methods: {
    async getQuestion(){
        const questions = await this.$axios.$get('http://localhost:3001/questions')
          this.qList = questions;
          console.log(questions)
          console.log(this.qList)
        },
        reset(){
            this.s1 = false
            this.s2 = false
            this.s3 = false
            this.s4 = false
            this.question = ''
            this.choice1 = ''
            this.choice2 = ''
            this.choice3 = ''
            this.choice4 = ''
        },
        getData(item){
            this.reset();
             
            this.id = item._id
            this.question = item.question
            this.choice1 = item.choice1
            this.choice2 = item.choice2
            this.choice3 = item.choice3
            this.choice4 = item.choice4
            if(this.s1 == true){
        this.answer = this.choice1
      }
      if(this.choice1 == item.answer){
        this.s1 = true
      }
      if(this.choice2 == item.answer){
        this.s2 = true
      }
      if(this.choice3 == item.answer){
        this.s3 = true
      }
      if(this.choice4 == item.answer){
        this.s4 = true
      }
        },
      update(){
        
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
        this.$axios.$patch('http://localhost:3001/questions'+ '/' + this.id, qlistData)
        .then((response)=>{
        
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      },
    qdelete() {
        
        location.reload()
        this.$axios.$delete('http://localhost:3001/questions'+'/'+this.id)
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
  
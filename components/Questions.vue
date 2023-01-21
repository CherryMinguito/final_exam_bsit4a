<template>

  <div class="float-container">
    <div class="float-child bck" style="padding: 4rem;">
      <div>
      <h3>QUESTIONS</h3>
      <hr>
      <h4></h4>
      </div>
      <br>
      <div class="form-inline" action="#">
      
      <div>
        Question
        <input v-model="item.question" id="FName"  type="text"  placeholder="Question" class="form-control">
      </div>
      
      <br/>
      <br/>
      Choice 1: 
      <input v-model="item.choice_1" id="LName" type="text" placeholder="Choice 1" class="form-control">
      <br/>
      Choice 2:
      <input v-model="item.choice_2" id="choice2" type="text" placeholder="Choice 2" class="form-control">
      <br/>
      Choice 3:
      <input v-model="item.choice_3" id="choice3" type="text" placeholder="Choice 3" class="form-control">
      <br/>
      Answer:
      <input v-model="item.answer" id="answer" type="text" placeholder="Answer" class="form-control">
      <br/>
      <button class="btn btn-dark" @click="addItem" id="AddUser">Add</button>
      </div>
      <br>
  </div>
  <div class="float-child">
    <button class="btn btn-success" @click="showAnswer()" id="ShowAnsKey">{{ showBtn }} Answer Key</button>
    <table class="bck" id="MyTable">
        <thead class="thead-light">
          <th>Question</th>
          <th>Answer</th>
          <th class="col-2">Edit/Delete</th>
        </thead>
        <tr v-for="item in items" v-bind:key="item.question">
          <td>
            <input v-if="item.edit" v-model="item.question" type="text">
            <span v-else class="col-lg-2">{{item.question}}</span>
          </td>
          <td>
            <input v-if="item.edit" v-model="item.choice_1" type="text" >
            <span v-else class="col-lg-2">Choice 1: {{item.choice_1}}</span>
            <br/>
            <input v-if="item.edit" v-model="item.choice_2" type="text" >
            <span v-else class="col-lg-2">Choice 2: {{item.choice_2}}</span>
            <br/>
            <input v-if="item.edit" v-model="item.choice_3" type="text" >
            <span v-else class="col-lg-2">Choice 3: {{item.choice_3}}</span>
            <br/>
            <br/>
            <div v-if="show">
              <input v-if="item.edit" v-model="item.answer" type="text" >
              <span v-else class="col-lg-2">Answer: {{item.answer}}</span>
            </div>  
            
          </td>
          <td>
            <button class="btn btn-info" @click="ItemEdit(item)">EDIT</button>
            <button class="btn btn-danger" @click="removeItem(item)">DELETE</button></td>
        </tr>
      </table>
  </div>    
  </div>

  </template>

  <script scope>
  const url = "http://localhost:3002/users";
    export default {
      data() {
      return {
        item: {id: 0, question: "", choice_1: "", choice_2:"", choice_3:"", answer:"", edit: false},
        items: [],
        tempData: [],
        showBtn: "Show",
        show: false
      }
    },
    methods:{
      async addItem() {
        console.log(this.item.id);
        await this.$axios.$post(url + '/insert', this.item)
        .then((res) => {
          console.log(res);
          this.item = {id: 0, question: "", choice_1: "", choice_2:"", choice_3:"", answer:"", edit: false};
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      async removeItem(item){
        await this.$axios.$post(url + '/delete', { id: item.id })
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      GetCurrentID(){
      this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
      console.log(this.item);
      },
      async GetAllData(){
        await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.tempData = res;
      })
      .catch((err) => console.log(err));
      this.items = this.tempData;
      this.GetCurrentID();
      },
      async ItemEdit(item)
      {
        if(!item.edit)
        {
          item.edit = !item.edit
        }
        else
        {
          item.edit = !item.edit
          console.log(item);
          await this.$axios.$post(url + '/update', item)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        }
      },
      async showAnswer(){
            this.show = !this.show;
            this.showBtn = (this.show) ? "Hide" : "Show";
        }
    },
    async mounted(){
      await this.GetAllData();
    }
    }
  </script>

<style scoped>



</style>

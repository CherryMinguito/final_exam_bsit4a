<template>
  <section style="background-color: #6b8f71;">
    <div>
    <div class="container">
      <br>
      <div class="form-inline" action="#">
        <div class="col-sm-10">
          <input type="text" id="form-name" v-model="item.Question" placeholder="Question" class="form-control" style="background-color: white;">
        </div>
        <div class="col-sm-2">
          <input type="text" id="form-name" v-model="item.Choice1" placeholder="Choice 1" class="form-control" style="background-color: white;">
        </div>
        <div class="col-sm-2">
          <input type="text" id="form-name" v-model="item.Choice2" placeholder="Choice 2" class="form-control" style="background-color: white;">
        </div>
        <div class="col-sm-2">
          <input type="text" id="form-name" v-model="item.Choice3" placeholder="Choice 2" class="form-control" style="background-color: white;">
        </div>
        <div class="col-sm-2">
          <input type="text" v-model="item.Answer" placeholder="Answer" class="form-control" v-on:keyup.enter="addItem" style="background-color: white;">
        </div>

        <v-btn @click="addItem" color="dark"> Add Items</v-btn>
      </div>

      <br><br>
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <th class="col-2" style="background-color: #c2a878;">Question</th>
          <th class="col-2" style="background-color: #c2a878;">Answer</th>
          <th class="col-2" style="background-color: #c2a878;"></th>
        </thead>
        <tr v-for="item in items" :key="item.name">
          <td>
            <input v-if="item.edit" type="text" v-model="item.Question" style="" v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.Question}}</span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.Answer" v-on:keyup.enter="item.edit = !item.edit" disabled>
            <span v-else></span>
          </td>
          <td>
            <v-btn @click="item.edit = !item.edit" color="blue">Show/Edit</v-btn>
            <v-btn @click="removeItem(index)" color="red">Delete</v-btn></td>
        </tr>
      </table>
  </div>
  </div>
  </section>
  </template>

  <script scope>

    export default {
      name: 'IndexPage',
      data() {
      return {
        item: {Question: "",  Choice1: "", Choice2: "", Choice3: "", Answer: "", edit: false},
        items: []
      }
    },
    methods:{
      addItem() {
        this.items.push({
          Question:this.item.Question, Choice1:this.item.Choice1, Choice2:this.item.Choice2, Choice3:this.item.Choice3, Answer:this.item.Answer, edit: false}
          );
        this.item = [];
      },
      removeItem(index){
        this.items.splice(index, 1)
      }
    }
    }
  </script>

  <style scoped>
  .form-inline input {
    margin-right:8px;
  }
  </style>

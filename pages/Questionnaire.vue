<template>
    <div>
       <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>

        <div class="container">
            <h1 style="20px">Nico Cabilan Crud Final</h1>
            <input style="width:100px;" v-model="item.number" placeholder="Number" type="number" class="form-control mb-3">
            <input v-model="item.question" placeholder="Question" type="text" class="form-control mb-3">
            <div class="col">Choices Input 1<input v-model="item.a" type="text" class="form-control mb-3"></div>
            <div class="col">Choices Input 2<input v-model="item.b" type="text" class="form-control mb-3"></div>
            <div class="col">Choices Input 3<input v-model="item.c" width="30px" type="text" class="form-control mb-3"></div>
            <input v-model="item.answer" placeholder="Correct Answer" type="text" class="form-control mb-3">
            <div class="button">
                <button  class="btn btn-danger" @click="addItem">Add<i class="fa fa-user"></i></button>
            </div>
        </div>
        <div class="container">
            <table class="table table-striped table-bordered table-sm bg-light text-dark">
                <thead class="thead-warning">
                    <th style="width:10px">Number</th>
                    <th style="width:20px">Question</th>
                    <th style="width:20px">Choices Input 1</th>
                    <th style="width:20px">Choices Input 2</th>
                    <th style="width:20px">Choices Input 3</th>
                    <th style="width:20px">Answer</th>
                    <th style="width:20px">Modify</th>
                </thead>


                <tr v-for="item in items" :key="item.number">
                    <td>
                        <input v-if="item.edit" v-model="item.number" type="number" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.number}} </span>
                    </td>

                    <td>
                        <input v-if="item.edit" v-model="item.question" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.question}} </span>
                    </td>

                    <td>
                        <input v-if="item.edit" v-model="item.a" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.a}} </span>
                    </td>

                   <td>
                        <input v-if="item.edit" v-model="item.b" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.b}} </span>
                    </td>

                    <td>
                        <input v-if="item.edit" v-model="item.c" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.c}} </span>
                    </td>

                    <td>
                        <input v-if="item.edit" v-model="item.answer" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.answer}} </span>
                    </td>
                   
                    <td>
                        <button class="btn btn-success" @click="item.edit = !item.edit">Edit</button>
                        <button class="btn btn-secondary" @click="removeItem(item)">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
export default{
        data(){
            return {
                item: {number: "", question: "",a: "",b: "",c: "", answer: "", edit: false},
                items: []
            }
        },
        methods:{
            addItem(){
                this.items.push({
                    number:this.item.number, question:this.item.question,a:this.item.a,b:this.item.b,c:this.item.c, answer:this.item.answer, edit: false
                });
                this.item = [];
            },
            removeItem(index){
                this.items.splice(index, 1)
            }
        }
    }
</script>


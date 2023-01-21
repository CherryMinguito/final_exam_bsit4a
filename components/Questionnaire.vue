<template>
    <div class = "container">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        <br>
        <div class="form-inline" action="#">
            <input type="text" style="background-color: white;" id="form-question" v-model="item.question" placeholder="Question" class="form-control">
            <input type="text" style="background-color: white;" id="form-choices" placeholder="Choices" class="form-control">
            <input type="text" style="background-color: white;" id="form-answer" v-model="item.answer" placeholder="Answer" class="form-control">
            <button @click="addItem" style="background-color: grey;" class="btn">Add<i class="fas fa-plus"></i></button>
          
        </div>   
        <br><br>
        <table class="table table-striped table-bordered table-sm" style="background-color: white">
            <thead class="thead-light">
                <th>Questions</th>
                <th>Answer</th>
                <th class="col-2">Edit, Delete and Show Answer</th>
            </thead>
        <tr v-for="item in items" :key="item.question">
            <td>
                <input v-if="item.edit" type="text" v-model="item.question"  v-on:keyup.enter="item.edit = !item.edit">
                <span v-else>{{item.question}}</span>
            </td>
            <td>
                <input v-if="item.edit" type="text" v-model="item.answer" v-on:keyup.enter="item.edit = !item.edit" disabled>
                <span v-else></span>
            </td>
            <td>
                <button @click="removeItem(row)"  style="background-color: grey;" class="btn btn-info">Delete<i class="far fa-edit"></i></button>
                <button @click="item.edit = !item.edit" style="background-color: grey;" class="btn btn-info">Show Answer/Edit<i class="far fa-edit"></i></button>
            </td>
        </tr>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                item: {question: "", answer: "", edit: false},
                items: []
            }
        },
        methods:{
            addItem(){
                this.items.push({
                    question:this.item.question, answer:this.item.answer, edit: false
                });
                this.item = [];
            },
            removeItem(row){
                 this.items.splice(row, 1);
            }
        }
    }
</script>
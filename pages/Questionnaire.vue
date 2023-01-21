<template>
    <div>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        


        <div class="container">
            
            <h5>Please type the Question</h5>
            <input v-model="item.question" placeholder="Question" type="text" class="form-control mb-3">
            <div class="col-md-4">A<input v-model="item.a" type="text" class="form-control mb-3"></div>
            <div class="col-md-4">B<input v-model="item.b" type="text" class="form-control mb-3"></div>
            <div class="col-md-4">C<input v-model="item.c" type="text" class="form-control mb-3"></div>
            <h5>Please type the Correct Answer</h5>
            <input v-model="item.answer" placeholder="Correct Answer" type="text" class="form-control mb-3">
            <div class="button">
                <button class="btn btn-danger" @click="addItem">Add<i class="fa fa-user"></i></button>
            </div>
        </div>
        <div class="container">
            <table class="table table-striped table-bordered table-sm bg-light text-dark">
                <thead class="thead-dark">
                    
                    <th>Question</th>
                    <th>Answer</th>
                    <th></th>
                    <th></th>
                </thead>
                <tr v-for="item in items" :key="item.number">
                    <td>
                        <input v-if="item.edit" v-model="item.question" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.question}} </span>
                    </td>
                    <td>
                        <input v-if="item.edit" v-model="item.answer" type="text" @keyup.enter="item.edit = !item.edit" disabled>
                        <span v-else> </span>
                    </td>
                    <td>
                        <button class="btn btn-success" @click="item.edit = !item.edit">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-secondary" @click="removeItem(item)">Delete</button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click="item.edit = !item.edit">Show</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
export default{
        data(){
            return {
                item: {question: "", a: "", b: "", c: "", answer: "", edit: false},
                items: []
            }
        },
        methods:{
            addItem(){
                this.items.push({
                    question:this.item.question, a:this.item.a, b:this.item.b, c:this.item.c, answer:this.item.answer, edit: false
                });
                this.item = [];
            },
            removeItem(index){
                this.items.splice(index, 1)
            }
        }
    }
</script>
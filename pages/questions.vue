<template>
    <div>
      <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

        <div class="container">
            <input style="width:100px;" v-model="item.number" placeholder="Number" type="number" class="form-control mb-3">
            <div class="col">Please Type Question</div>
            <input v-model="item.question" placeholder="Question" type="text" class="form-control mb-3">
            <div class="col">Choices</div>
            <div class="row justify-content-between">
              <div class="col-md-auto text-center">A<input v-model="item.choice1" type="text" class="form-control mb-3"></div>
              <div class="col-md-auto text-center">B<input v-model="item.choice2" type="text" class="form-control mb-3"></div>
              <div class="col-md-auto text-center">C<input v-model="item.choice3" type="text" class="form-control mb-3"></div>
            </div>

            <div class="col">Please input correct answer</div>
            <input v-model="item.answer" placeholder="Correct Answer" type="text" class="form-control mb-5">
            <div class="button">
                <button class="btn btn-danger" @click="addItem">Add<i class="fa fa-user"></i></button>
            </div>
        </div>
        <div class="container">
            <table class="table table-striped table-bordered table-sm bg-light text-dark">
                <thead class="thead-dark">
                    <th style="width:50px">Number</th>
                    <th>Question</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>Answer</th>
                    <th>Modify</th>
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
                        <input v-if="item.edit" v-model="item.choice1" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.choice1}} </span>
                    </td>
                    <td>
                        <input v-if="item.edit" v-model="item.choice2" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.choice2}} </span>
                    </td>
                    <td>
                        <input v-if="item.edit" v-model="item.choice3" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else >{{item.choice3}} </span>
                    </td>
                    <td>
                        <input v-if="item.edit" v-model="item.answer" type="text" @keyup.enter="item.edit = !item.edit" disabled>
                        <span v-else> </span>
                    </td>
                    <td>
                        <button class="btn btn-success" @click="item.edit = !item.edit">Edit</button>
                        <button class="btn btn-secondary" @click="removeItem(item)">Delete</button>
                        <button class="btn btn-success" @click="item.edit = !item.edit">Show</button>
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
                item: {number: "", question: "", choice1: "", choice2: "", choice3: "", answer: "", edit: false},
                items: []
            }
        },
        methods:{
            addItem(){
                this.items.push({
                    number:this.item.number, question:this.item.question, choice1:this.item.choice1, choice2:this.item.choice2, choice3:this.item.choice3, answer:this.item.answer, edit: false
                });
                this.item = [];
            },
            removeItem(index){
                this.items.splice(index, 1)
            },
        }
    }
</script>

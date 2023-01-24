<template>
    <div>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
     <h1 style="text-align:center;">Questionnaire</h1>
   
        <div class="container">
            <input style="width:100px;" v-model="item.number" placeholder="Number" type="number" class="form-control mb-3" disabled hidden>
            <input v-model="item.question" placeholder="Question" type="text" class="form-control mb-3">
            <div class="row">
                <div class="col">A<input v-model="item.choicesa" type="text" class="form-control mb-3"></div>
                <div class="col">B<input v-model="item.choicesb" type="text" class="form-control mb-3"></div>
                <div class="col">C<input v-model="item.choicesc" type="text" class="form-control mb-3"></div>
            </div>
            <input v-model="item.answer" placeholder="Correct Answer" type="text" class="form-control mb-3">
            <div class="button">
                <button class="btn btn-danger" @click="addItem">Add<i class="fa fa-user"></i></button>
            </div>
        </div>
        <div class="container">
            <table class="table table-striped table-bordered table-sm bg-light text-dark">
                <thead class="thead-dark">
                    <th style="width:50px">Number</th>
                    <th style="width:500px">Question</th>
                    <!-- <th>A</th>
                    <th>B</th>
                    <th>C</th> -->
                    <th style="width:150px">Correct Answer</th>
                    <th>Modify</th>
                </thead>

                <tr v-for="item in items" :key="item.number">
                    <td>
                        <input style="width:50px;" v-if="item.edit" v-model="item.number" type="number" @keyup.enter="item.edit = !item.edit" disabled>
                        <span v-else>{{item.number}} </span>
                    </td>
                    <td>
                        <input style="width:500px;" v-if="item.edit" v-model="item.question" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.question}} </span>
                    </td>
                    <!-- <td>
                        <input v-if="item.edit" v-model="item.choicesa" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.choicesa}} </span>
                    </td>
                    <td>
                        <input v-if="item.edit" v-model="item.choicesb" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.choicesb}} </span>
                    </td>
                    <td>
                        <input v-if="item.edit" v-model="item.choicesc" type="text" @keyup.enter="item.edit = !item.edit">
                        <span v-else>{{item.choicesc}} </span>
                    </td> -->
                    <td>
                        <input style="width:150px;" v-if="item.edit" v-model="item.answer" type="text" @keyup.enter="item.edit = !item.edit" hidden>
                        <span v-else>{{item.answer}} </span>
                    </td>
                    <td>
                        <button class="btn btn-success" style="background-color: green;" @click="item.edit = !item.edit">Update</button>
                        <button class="btn btn-secondary" style="background-color: red;"  @click="removeItem(item)">Delete</button>
                        <button class="btn btn-info"  style="background-color: blue;" @click="item.edit = !item.edit">Show/Hide</button>
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
                item: {number: 0, question: "", choicesa: "",choicesb: "",choicesc: "", answer: "", edit: true,},
                currentNumber: 1,
                items: []
            }
        },
        methods:{
            addItem(){
                this.item.number = this.getNextNumber();
                this.items.push({
                   number:this.item.number, question:this.item.question, choicesa:this.item.choicesa, choicesb:this.item.choicesb, choicesc:this.item.choicesc, answer:this.item.answer, edit: false
                });
                this.item = [];
            },
            getNextNumber() {
                return this.currentNumber++;
            },
            removeItem(index){
                this.items.splice(index, 1)
            },
            showItem(){
                this.item.showAnswer = !this.item.showAnswer;
            }
        }
    }
</script>


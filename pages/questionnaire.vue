<template>
    <div>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

        <div class="container" style="background-color: #81BABB; border-radius: 15px; padding: 30px;">
            <p style="text-align: left; font-size: 35px; color: white">Add New Question</p>
            <p style="text-align: left; font-size: 18px; color: white; margin-top: -20px; margin-bottom: 50px">Input a question and its choices with the corresponding answer.</p>
            <input style="width:100px" v-model="item.number" placeholder="Number" type="number" class="form-control mb-3" disabled hidden>
            <input v-model="item.question" placeholder="Question" type="text" class="form-control mb-3">
            <input v-model="item.choicesa" type="text" placeholder="Choice A" class="form-control mb-3">
            <input v-model="item.choicesb" type="text" placeholder="Choice B" class="form-control mb-3">
            <input v-model="item.choicesc" type="text" placeholder="Choice C" class="form-control mb-3">
            <input v-model="item.answer" placeholder="Answer" type="text" class="form-control mb-3">
            <div class="button">
                <button class="btn btn-info" style="margin-left: 45%; margin-top: 30px" @click="addItem">Insert<i class="fa fa-user"></i></button>
            </div>
        </div>
        <div class="container" style="background-color:#81BABB; border-radius: 15px; margin-top: 20px">
            <table class="table table-striped table-bordered table-sm bg-light text-dark">
                <thead class="thead-dark">
                    <th style="width:500px; text-align: center">Question</th>
                    <th style="width:150px; text-align: center">Answer</th>
                    <th style="text-align: center">Edit</th>
                </thead>
                <tr v-for="item in items" :key="item.number" style="text-align: center">
                    <td>
                        <input style="width:500px;" v-if="item.edit" v-model="item.question" type="text" @keyup.enter="item.edit = !item.edit">
                        <span style="text-align: center" v-else>{{item.question}} </span></td>
                    <td>
                        <input style="width:150px;" v-if="item.edit" v-model="item.answer" type="text" @keyup.enter="item.edit = !item.edit" hidden>
                        <span style="text-align: center" v-else>{{item.answer}} </span></td>
                    <td>
                        <button style="background-color: green; color: white; margin: 5px; padding: 10px; border-radius: 10px" @click="item.edit = !item.edit">Update</button>
                        <button style="background-color: red; color: white; margin: 5px; padding: 10px; border-radius: 10px" @click="removeItem(item)">Remove</button>
                        <button style="background-color: blue; color: white; margin: 5px; padding: 10px; border-radius: 10px" @click="item.edit = !item.edit">Show Answer</button></td>
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

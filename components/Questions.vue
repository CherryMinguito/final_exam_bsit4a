<template>
    <div class="container-fluid">
      <div class="row" style="padding: 46px;background: rgba(0,194,255,0.67);">
        <div class="col-md-12" style="padding: 59px;background: var(--bs-body-bg);color: var(--bs-gray-900);border-radius: 42px;">
            <h1>Add New Question</h1>
            <div>
                <div class="row">
                    <div class="col">
                        <p>Input a question select its corresponding answer.</p>
                    </div>
                </div>
            </div>
            <div>
                <form>
                    <div class="row">
                        <div class="col-lg-5">
                            <label class="form-label">Question:</label>
                            <b-form-input id="Question" required v-model="item.Question" class="d-flex flex-grow-1" :state="CheckQuestion" type="text" style="height: 36px;border: 1px solid black; border-radius: 25px;" />
                        </div>
                        <div class="col-lg-5">
                            <div>
                                <label class="form-label">Answer: (Choose the correct answer)</label>
                            </div>
                            <div class="row mt-2 ml-7">

                                <input id="RdChoiceA" class="form-check-input" type="radio" value="A" v-model="item.Answer" />
                                <label class="form-label mr-2">A:</label>
                                <b-form-input id="ChoiceA" required v-model="item.ChoiceA" class="d-flex flex-grow-1" :state="CheckChoiceA" type="text" style="height: 36px; border: 1px solid black; border-radius: 25px;"/>
                            </div>
                            <div class="row mt-6 ml-7">

                              <input id="RdChoiceB" class="form-check-input" type="radio" value="B" v-model="item.Answer" />
                                <label class="form-label mr-2">B:</label>
                                <b-form-input id="ChoiceB" required v-model="item.ChoiceB" class="d-flex flex-grow-1" :state="CheckChoiceB" type="text" style="height: 36px;border: 1px solid black; border-radius: 25px;" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                            <div class="" v-if="!edit">
                                <button class="btn" id="InsertBtn" @click="InsertClick()" type="submit" style="border: 2px solid #108cb4; border-radius: 25px; padding: 14px 28px;">Insert</button>
                            </div>
                            <div class="" v-if="edit">
                                <button class="btn" id="UpdateBtn" @click="UpdateClick()" type="button" style="border: 2px solid #108cb4; border-radius: 25px; padding: 14px 28px;">Confirm</button>
                            </div>
                     </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row" style="padding: 46px;background: rgba(0,194,255,0.67);">
        <div class="col-md-12" style="padding: 59px;background: var(--bs-body-bg);color: var(--bs-gray-900);border-radius: 42px;">
            <h1>List of Questions</h1>
            <div>
                <div class="row">
                    <div class="col">
                        <p>Here is the list of the questions and their corresponding answer</p>
                    </div>
                </div>
                <div class="row">
                  <div class="col" style="color: white !important;">
                        <b-table id="MongoTable"  sticky-header="70vh" style="overflow-x: hidden; color: white;" no-border-collapse borderless :items="items" :fields="fields" class="mytable">
                            <template v-slot:cell(Choices)="{ item, index }">
                                <div class="d-flex" style="flex-direction: row;">
                                    <div v-if="!show">
                                        <strong>A : </strong><span>{{ item.ChoiceA }}</span><br>
                                        <strong>B : </strong><span>{{ item.ChoiceB }}</span>
                                    </div>
                                    <div v-if="show">
                                        <div v-if="item.Answer == 'A'"><strong>A : </strong><span>{{ item.ChoiceA }}</span></div>
                                        <div v-if="item.Answer == 'B'"><strong>B : </strong><span>{{ item.ChoiceB }}</span></div>
                                    </div>
                                </div>
                            </template>
                            <template v-slot:cell(actions)="{ item, index }">
                                <div class="row">
                                    <div class="col">

                                        <b-button @click="EditClick(item, index)" style="background-color: #108cb4;">Edit</b-button>
                                        <b-button @click="DeleteClick(item)" style="background-color: #CE2E17;">Delete</b-button>
                                    </div>
                                </div>
                            </template>
                        </b-table>
                    </div>
                </div>
                <div class="row ml-1">
                   <button @click="showAnswer()" class="btn"
                    data-bss-hover-animate="rubberBand" type="button" style="background-color: #108cb4; sans-serif;text-align: center;width: 208px;border-style: none;">{{ showBtn }} Answer Key</button></div>
                </div>

            </div>
            <div>

            </div>
        </div>
        </div>
</template>

<script>
const url = "http://localhost:3001/question/";
export default{
    data(){
        return{
            item: {id: 0, Question: "", ChoiceA: "", ChoiceB: "", Answer: ""},
            items: [],
            fields: [{key: 'Question', sortable: true},{key: 'Choices', sortable: false}, 'actions'],
            show: false,
            showBtn: "Reveal",
            edit: false
        };
    },
    methods: {
        async InsertClick(){
            if(this.item.Question === "" || this.item.ChoiceA === "" || this.item.ChoiceB === "" || this.item.Answer === ""){
                this.$bvToast.toast("Please Fill All Fields", {
                title: "Insert Fields",
            });
            }
            else{
                console.log('Question: ' + this.item.Question + ' Choice A: ' + this.item.ChoiceA + ' Choice B: ' + this.item.ChoiceB + ' Answer Key: ' + this.item.Answer);
                let vrnt = "";
                let ttl = "";
                await this.$axios.$post(url + 'new', this.item)
                .then((res) => {
                  console.log(res);
                  this.item = {id: 0, Question: "", ChoiceA: "", ChoiceB: "", Answer: ""}
                  this.GetAllQuestions();
                })
                .catch((err) => {
                  console.log(err)
                });
                this.$bvToast.toast(ttl, {
                  title: "Insert",
                });
            }
        },
        async EditClick(item, index){
            this.edit = true;
            this.item = {id: item["id"], Question: item["Question"], ChoiceA: item["ChoiceA"], ChoiceB: item["ChoiceB"], Answer: item["Answer"]};
        },
        async UpdateClick(){
            let vrnt = "";
            let ttl = "";
            await this.$axios.$post(url + 'update', this.item)
            .then((res) => {
              this.item = {id: 0, Question: "", ChoiceA: "", ChoiceB: "", Answer: ""}
              this.GetAllQuestions();
            })
            .catch((err) => {
            });
            this.$bvToast.toast(ttl, {
                title: "Update",
            });
        },
        async DeleteClick(item){
            await this.$axios.$post(url + 'delete', {id: item.id})
            .then((res) => {
            this.$bvToast.toast("Question with ID: " + item.id + " Deleted Successfully", {
              title: "Delete",
            });
            this.GetAllQuestions();
            })
            .catch((err) => {
            this.$bvToast.toast("Failed to Delete " + item.id+ "", {
              title: "Delete",
            });
            console.log(err)
             });
        },
        ResetInput(){
            this.edit = false;
            this.GetCurrentID();
            this.item.Question = "";
            this.item.ChoiceA = "";
            this.item.ChoiceB = "";
            this.item.Answer = "";
        },
        async GetAllQuestions(){
            await this.$axios.$get(url)
                    .then((res) => {
                        console.log("Response");
                        console.log(res);
                        this.items = res;
                        this.GetCurrentID();
                    });
        },
        GetCurrentID(){
            if(this.items.length > 0){
                this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
            }
            else{
                this.item.id = 100;
            }
            console.log(this.item.id);
        },
        showAnswer(){
            this.show = !this.show;
            this.showBtn = (this.show) ? "Hide" : "Reveal";
        }
    },
    computed:{
        CheckQuestion(){
            if(this.item.Question.length == 0){
                return null;
            }
            return (this.item.Question.length > 0);
        },
        CheckChoiceA(){
            if(this.item.ChoiceA.length == 0){
                return null;
            }
            return (this.item.ChoiceA.length > 0);
        },
        CheckChoiceB(){
            if(this.item.ChoiceB.length == 0){
                return null;
            }
            return (this.item.ChoiceB.length > 0);
        },
    },
    mounted(){
        this.GetAllQuestions();
    }
}
</script>

<style>

.b-table tr td {
    color: black;
    font-size: .8vw;
}

.b-table-sticky-header > .table.b-table > thead > tr > th {
    position: sticky !important;
    color: black;
    font-style: bold;
    background: #108cb4!important;
    font-size: 15px !important;
  }
.mytable{
    font-size: 30%;
    backdrop-filter: blur(15px);
    background-color: whitesmoke;
}
.isHidden{
    display: none;
}
</style>

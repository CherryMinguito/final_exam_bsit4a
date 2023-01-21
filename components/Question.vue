<template>
    <div class="container-fluid">
        <div class="row" style="margin-bottom: 30px;">
            <div class="col">
                <h1 style="text-align: center;font-weight: bold;font-family: Alatsi, sans-serif;font-size: 95px;background: lightgray;--bs-body-font-size: 1rem;color: black;"><em><span style="font-weight: normal !important;">Cross-Platform Development</span></em></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4 col-xxl-4">
                <div class="card">
                    <div class="card-header">
                        <h1 style="font-family: Alatsi, sans-serif;font-weight: bold;color:black;"><em>Insert A Question</em></h1>
                    </div>
                    <div class="card-body" style="background: lightgray;">
                        <hr>
                        <div class="row d-flex flex-column align-items-xxl-center">
                            <div class="col"><label class="col-form-label" style="font-family: Alatsi, sans-serif;font-weight: bold;font-size: 23px;color:black;"><em>Question</em></label></div>
                            <div class="col d-flex justify-content-xxl-center align-items-xxl-center" style="  padding-left: 45px;"><input class="d-flex flex-grow-1" type="text" style="border: 1px solid white; height: 36px;"></div>
                        </div>
                        <div class="row d-flex flex-column align-items-xxl-center">
                            <div class="col"><label class="col-form-label" style="font-family: Alatsi, sans-serif;font-weight: bold;font-size: 23px;color:black;"><em>Choice A</em></label></div>
                            <div class="col d-flex justify-content-xxl-center align-items-xxl-center" style="padding-left: 45px;"><input class="d-flex flex-grow-1" type="text" style="border: 1px solid white; height: 36px;"></div>
                            <b-form-input id="ChoiceA" required v-model="item.ChoiceA" class="d-flex flex-grow-1" :state="CheckChoiceA" type="text" />
                            <div></div>
                        </div>
                        <div class="row d-flex flex-column align-items-xxl-center">
                            <div class="col"><label class="col-form-label" style="font-family: Alatsi, sans-serif;font-weight: bold;font-size: 23px;color:black;"><em>Choice B</em></label></div>
                            <div class="col d-flex justify-content-xxl-center align-items-xxl-center" style="padding-left: 45px;"><input class="d-flex flex-grow-1" type="text" style="border: 1px solid white; height: 36px;"></div>
                        <b-form-input id="ChoiceB" required v-model="item.ChoiceB" class="d-flex flex-grow-1" :state="CheckChoiceB" type="text" />
                        </div>
                        <div class="row d-flex flex-column align-items-xxl-center">
                            <div class="col"><label class="col-form-label" style="font-family: Alatsi, sans-serif;font-weight: bold;font-size: 23px;color: black;">Answer Key</label></div>
                            <div class="col d-flex justify-content-xxl-start align-items-xxl-center" style="padding-left: 45px;">
                                <div class="row d-flex" style="flex-direction: row;">
                                    <div>
                                        <div class="col-3 form-check">
                                            <input id="RdChoiceA" class="form-check-input" type="radio" value="A" v-model="item.Answer" />
                                            <label class="form-check-label" for="ChoiceA">Choice A</label>
                                        </div>
                                        <div class="col-3 form-check">
                                            <input id="RdChoiceB" class="form-check-input" type="radio" value="B" v-model="item.Answer" />
                                            <label class="form-check-label" for="ChoiceB">Choice B</label>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-footer">
                        <div class="row" >
                            <div class="col-6 d-flex justify-content-xxl-end align-items-xxl-center" style="padding-right: 35px;padding-left: 35px;">
                                <button class="btn btn-primary" id="ResetBtn" @click="ResetInput()" data-bss-hover-animate="shake" type="button" style="font-family: Aboreto, serif;font-weight: bold;background: var(blue);text-align: center;width: 208px;border-style: none;">Reset</button>
                            </div>
                            <div class="col-6 d-flex justify-content-xxl-start align-items-xxl-center" v-if="!edit" style="padding-right: 35px;padding-left: 35px;">
                                <button class="btn btn-primary" id="InsertBtn" @click="InsertClick()" data-bss-hover-animate="pulse" type="submit" style="background: var(blue);font-family: Aboreto, serif;font-weight: bold;text-align: center;width: 208px;border-style: none;">Insert</button>
                            </div>
                            <div class="col-6 d-flex justify-content-xxl-end align-items-xxl-center" v-if="edit" style="padding-right: 35px;padding-left: 35px;">
                                <button class="btn btn-primary" id="UpdateBtn" @click="UpdateClick()" data-bss-hover-animate="shake" type="button" style="font-family: Aboreto, serif;font-weight: bold;background: var(blue);text-align: center;width: 208px;border-style: none;">Update</button>
                           </div>
                       </div>
                     </div>
                  </div>
            </div>
            <div class="col-xxl-7" style="padding-right: 40px;padding-left: 40px;background: #dae0df;">
                <div class="row d-flex flex-column justify-content-xxl-center">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h1 style="text-align: left;font-family: Alatsi, sans-serif;font-weight: bold;font-size: 60px;width: 995.86px;color: black;"><em>Questions</em></h1>
                            </div>
                            <div class="col-3 d-flex justify-content-xxl-center align-items-xxl-center">
                                <button @click="showAnswer()" class="btn btn-primary d-flex justify-content-xxl-center align-items-xxl-center" 
                                data-bss-hover-animate="rubberBand" type="button" style="background: var(blue);font-family: Alatsi, sans-serif;text-align: center;width: 208px;border-style: none;">{{ showBtn }} Answer Key</button></div>
                        </div>

                    </div>
                    <div class="col" style="color: white !important;">
                        <b-table id="MongoTable"  sticky-header="70vh" style="overflow-x: hidden; color: white;" head-variant="light" no-border-collapse borderless :items="items" :fields="fields" class="mytable">
                            <template v-slot:cell(Choices)="{ item }">
                                <div class="d-flex" style="flex-direction: row;">
                                    <div v-if="!show">
                                        <strong>Choice A : </strong><span>{{ item.ChoiceA }}</span><br>
                                        <strong>Choice B : </strong><span>{{ item.ChoiceB }}</span>
                                    </div>
                                    <div v-if="show">
                                        <div v-if="item.Answer == 'A'"><strong>Choice A : </strong><span>{{ item.ChoiceA }}</span></div>
                                        <div v-if="item.Answer == 'B'"><strong>Choice B : </strong><span>{{ item.ChoiceB }}</span></div>
                                    </div>
                                </div>
                            </template>
                            <template v-slot:cell(actions)="{ item, index }">
                                <div class="row">
                                    <div class="col">
                                        <b-button v-b-tooltip.hover title="Delete User" @click="DeleteClick(item)" variant="warning"><img src="/delete.png" style="width: 1.5vw; height: 1.5vw;" /></b-button>
                                    </div>
                                    <div class="col">
                                        <b-button v-b-tooltip.hover title="Edit User Info" @click="EditClick(item, index)" variant="info"><img src="/edit.png" style="width: 1.5vw; height: 1.5vw;" /></b-button>
                                    </div>
                                </div>
                            </template>
                        </b-table>
                    </div>
                </div>
                </div>
            </div>
         </div>
</template>
<script scope>
//import { Script } from 'vm';

 
export default{
    data(){
        return{
            item: {id: 0, Question: "", ChoiceA: "", ChoiceB: "", Answer: ""},
            items: [],
            fields: [{key: 'Question', sortable: true},{key: 'Choices', sortable: false}, 'actions'],
            show: false,
            showBtn: "Show",
            edit: false
      };
    },
    methods: {
        async InsertClick(){
            if(this.item.Question === "" || this.item.ChoiceA === "" || this.item.ChoiceB === "" || this.item.Answer === "")
            {
                
                console.log("Missing Fields"); //this.$bvToast.toast("Please Fill All Fields", {
                           //         title: "Missing Fields",
                //                    autoHideDelay: 10000,
                    //                appendToast: false,
                     //               variant: "warning"
                     //               });
            }
            else{
                console.log('Question: ' + this.item.Question + ' Choice A: ' + this.item.ChoiceA + ' Choice B: ' + this.item.ChoiceB + ' Answer Key: ' + this.item.Answer);
                let vrnt = "";
                let ttl = "";
                await this.$axios.$post(url + 'new', this.item)
                        .then((res) => {
                            vrnt = "success";
                            ttl = "Success Adding Question";
                            console.log(res);
                            this.item = {id: 0, Question: "", ChoiceA: "", ChoiceB: "", Answer: ""}
                            this.GetAllQuestions();
                        })
                        .catch((err) => {
                            vrnt = "danger";
                            ttl = "Failed Adding To Add Question";
                            console.log(err)
                        });
                this.$bvToast.toast(ttl, {
                            title: "Insert Question",
                            autoHideDelay: 3000,
                            appendToast: false,
                            variant: vrnt
                            });
            }
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
            if(this.items.length > 0)
            {
                this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
            }
            else{
                this.item.id = 100;
            }
            console.log(this.item.id);
        },
        showAnswer(){
            this.show = !this.show;
            this.showBtn = (this.show) ? "Hide" : "Show";
        }
    },
    computed:{
        CheckQuestion(){
            if(this.item.Question.length == 0)
            {
                return null;
            }
            return (this.item.Question.length > 0);
        },
        CheckChoiceA(){
            if(this.item.ChoiceA.length == 0)
            {
                return null;
            }
            return (this.item.ChoiceA.length > 0);
        },
        CheckChoiceB(){
            if(this.item.ChoiceB.length == 0)
            {
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
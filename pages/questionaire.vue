
<template>

      
       <table>
        <tr v-for="item in qList">
          <v-card style="padding: 20px; width:900px ;">
             <td><v-card  style="padding: 10px; overflow-wrap: break-word; height: 100px; width: 700px;">{{ item.question }}</v-card></td>
             <td><v-input  v-show="value" style="padding: 10px;"> {{ item.answer }}</v-input ></td>
          <tr>
          <v-input style=" overflow-wrap: break-word;"><v-checkbox v-model="s1"></v-checkbox>
           A. {{ item.choice1 }}
          </v-input >
          <v-input  style="overflow-wrap: break-word;" ><v-checkbox v-model="s2"></v-checkbox>
           B. {{ item.choice2 }}
          </v-input >
          <v-input  style="overflow-wrap: break-word;"><v-checkbox v-model="s3"></v-checkbox>
           C. {{ item.choice3 }}
          </v-input >
          <v-input  style="overflow-wrap: break-word;"><v-checkbox v-model="s4"></v-checkbox>
           D. {{ item.choice4 }}
          </v-input >
        </tr>
        </v-card>
        </tr> 
        <v-btn data-cy="show_btn" @click="showAnswer">show answer</v-btn>
      </table>

</template>
  
  <script>
  export default {
    name: 'questionairePage',
    mounted(){
        this.getQuestion();
      },
    data(){
        return {
            qList: [],
            value: false,
            s1:'',
            s2:'',
            s3:'',
            s4:'',
            i: 0
        }
    },
    methods:{
        async getQuestion(){
          const questions = await this.$axios.$get('http://localhost:3001/questions')
          this.qList = questions;
          console.log(questions)
          console.log(this.qList)
        },
        showAnswer(){
          this.value = true
          //fade answer in 5sec
         setTimeout(() => {
          this.value = false
         }, 5000)
        },
      
    }
  }
  </script>
  
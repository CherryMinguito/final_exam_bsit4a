<template>
  <div>
    <h1>Multiple Choice Questionnaire</h1>
     <button type="button" @click="addQuestion">Add Question</button>
    <div v-if="editingIndex !== -1">
      <h2>Add/Edit Question</h2>

      <form @submit.prevent="saveQuestion">
        <label>Question:</label>
        <input type="text" v-model="newQuestion.Question" required>
        <br>
        <label>Answer Choices:</label>
        <input type="text" v-model="newAnswer" @keyup.enter="addAnswer">
        <button type="button" @click="addAnswer">Add</button>
        <ul>
          <li v-for="(answer, index) in newQuestion.answers" :key="index">
            {{ answer }}
            <button type="button" @click="deleteAnswer(index)">Delete</button>
          </li>
        </ul>
        <label>Correct Answer:</label>
        <input type="text" v-model="newQuestion.correct" required>
        <br>
        <button type="submit">Save</button>
        <button type="button" @click="cancelEdit">Cancel</button>
    
    
   
      </form>
       
    </div>
<v-data-table :items="questions" :headers="headers" :sort-by="sortBy" :sort-desc.sync="sortDesc" class="elevation-1">
      <template v-slot:item.Question="{ item }">
        {{ item.Question }}
      </template>

      <template v-slot:item.selected="{ item }">
        <input type="text" v-model="item.selected">
      </template>

      <template v-slot:item.answers="{ item }">
        <ul>
          <li v-for="answer in item.answers" :key="answer">{{ answer }}</li>
        </ul>
      </template>


      <template v-slot:item.actions="{ item, index }">
        <button type="button" @click="showAnswer(index)">Show Correct Answer</button>
        <button type="button" @click="editQuestion(index)">Edit</button>
        <button type="button" @click="deleteQuestion(index)">Delete</button>
      </template>

    </v-data-table>
  </div>
  
</template>


<script>
export default {
  data() {
    return {
      questions: [
        {
          Question: "What is the capital of Philippines",
          answers: ["Davao", "Caloocan", "Manila", "Cebu"],
          correct: "Paris",
          selected: ""
        },
        {
          Question: "What is the largest planet in our solar system?",
          answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
          correct: "Jupiter",
          selected: ""
        }
      ],
      headers: [
        { text: 'Question',value: 'Question' },
        { text: 'Answer Choices', value: 'answers' },
        { text: 'Your Answer', value: 'selected' },
        { text: 'Actions', value: 'actions' }
      ],
      sortBy: 'Question',
      sortDesc: false,
      editingIndex: -1,
      newQuestion: {
        Question: '',
        answers: [],
        correct: ''
      },
      newAnswer: ''
      }
    },
    methods: {
      addQuestion() {
        this.editingIndex = this.questions.length;
        this.newQuestion = { Question: "",
        answers: [], correct: "", selected: ""};
        this.newAnswer = "";
      },
      addAnswer() {
        if (this.newAnswer) {
        this.newQuestion.answers.push(this.newAnswer);
        this.newAnswer = "";
        }
      },
      deleteAnswer(index) {
        this.newQuestion.answers.splice(index, 1);
      },
      editQuestion(index) {
        this.editingIndex = index;
        this.newQuestion = { ...this.questions[index] };
      },
      saveQuestion() {
        if (this.editingIndex !== -1) {
          this.$set(this.questions, this.editingIndex, this.newQuestion);
        } 
        else {
          this.questions.push(this.newQuestion);
          }
        this.newQuestion = { Question: "", answers: [], correct: "", selected: ""};
        this.editingIndex = -1;
      },
      cancelEdit() {
        this.editingIndex = -1;
        this.newQuestion = { Question: "", answers: [], correct: "", selected: ""};
      },
      deleteQuestion(index) {
        this.questions.splice(index, 1);
      },
      showAnswer(index) {
    alert('The correct answer is: '+ this.questions[index].correct);
}
    }
  }
</script>






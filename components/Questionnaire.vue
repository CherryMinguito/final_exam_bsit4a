<template>
  <div class="body">
    <h1 class="title">Questionnaire</h1>
    <button @click="addQuestion" class="btnAdd">Add Question</button>
    <table class="table table-striped table-bordered table-sm tablerows" style="border: 0px; font-size: 13px; padding: 10px;">
      <thead class="thead-light">
        <tr>
          <th style="background-color: #06283d; color: #d8e4e9; width: 430px; height: 28px;">Question</th>
          <th style="background-color: #06283d; color: #d8e4e9; width: 400px;">Choices</th>
          <th style="background-color: #06283d; color: #d8e4e9; width: 222px;">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="question in questions" :key="question.id">
          <td>{{ question.text }}</td>
          <td>
            <span v-if="question.showAnswer">{{ question.answer }}</span>
            <span v-if="!question.showAnswer" v-for="choice in question.choices">{{ choice }}</span>
          </td>
          <td>
            <button @click="question.showAnswer = !question.showAnswer">{{ question.showAnswer ? 'Hide' : 'Show' }} Answer</button>
            <button @click="editQuestion(question)" id="Edit">Edit</button>
            <button @click="deleteQuestion(question)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="isEditing" class="form">
      <form>
        <label for="text" style="padding: 8px;">Question:</label>
        <input type="text" id="text" v-model="editingQuestion.text" class="floating-label__input" />
        <br />
        <label for="answer" style="padding: 8px;">Answer:</label>
        <input type="text" id="answer" v-model="editingQuestion.answer" class="floating-label__input" />
        <br />
        <label for="choices" style="padding: 8px;">Choices:</label>
        <input type="text" id="choices" v-model="editingQuestion.choices" class="floating-label__input" />
        <br />
        <button @click.prevent="saveQuestion" id="btnSave" class="btnSaveCan">Save</button>
        <button @click.prevent="cancelEdit" id="btnCancel" class="btnSaveCan">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      isEditing: false,
      editingQuestion: {}
    };
  },
  methods: {
    addQuestion() {
      this.isEditing = true;
      this.editingQuestion = { text: "", answer: "", choices: "", showAnswer: false };
    },
    editQuestion(question) {
      this.isEditing = true;
      this.editingQuestion = { ...question };
    },
    saveQuestion() {
      if (this.editingQuestion.id) {
        // Update existing question
        const questionIndex = this.questions.findIndex(
          q => q.id === this.editingQuestion.id
        );

       this.questions.splice(questionIndex, 1, this.editingQuestion);
      } else {
        // Add new question
        this.editingQuestion.id = Date.now();
        this.questions.push(this.editingQuestion);
        }
        this.isEditing = false;
    },
      cancelEdit() {
      this.isEditing = false;
    },
    deleteQuestion(question) {
      const questionIndex = this.questions.findIndex(q => q.id === question.id);
      this.questions.splice(questionIndex, 1);
    }
}
};
</script>

<style>
.body {
  background-color: #fec261;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.btnAdd {
  text-align: center;
  background: #338476;
  border-radius: 50px;
  padding: 5px;
  margin-left: 8px;
  width: 150px;
  height: 37px;
  border: 1px solid #338476;
  box-shadow: inset 2px 3px 3px rgba(0, 0, 0, 0.25);
}
.btnSaveCan {
  text-align: center;
  border-radius: 50px;
  padding: 3px;
  margin-left: 8px;
  width: 90px;
  height: 30px;
}
.title {
  font-weight: 700;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  line-height: 40px;
  color: #d8e4e9;
  text-shadow: 2px 1px 1px rgb(14, 11, 31);
  margin: 5px;
  padding: 5px;
}
.form {
  background-color: #b73e3e;
  width: auto;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 8px;
  padding: 10px;
}
.floating-label__input {
  border: none;
  background: rgba(192, 192, 192, 0.51);
  border-radius: 18px;
  height: 25px;
  width: 500px;
}
</style>

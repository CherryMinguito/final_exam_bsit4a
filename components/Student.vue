<template>

  <body class="body">
    <div class="wrapper align-center-item">
      <div class="row">

        <div class="column">
          <div class="content" style="color:black;padding:50px;">
            <p style="font-size: 30px; text-align: center;">MAKE A QUESTION</p>

            <label class="form-label" for=""><strong>Question:</strong></label>
            <input type="text" name="Question" id="Question" class="form-control item" placeholder="Input the question"
              v-model="item.question" required>
            <br>
            <label class="form-label" for=""><strong>Choice A:</strong></label>
            <input type="text" name="Question" id="A" class="form-control item" placeholder="Input Choice Letter A"
              v-model="item.choiceA" required>
            <br>
            <label class="form-label" for=""><strong>Choice B:</strong></label>
            <input type="text" name="Question" id="B" class="form-control item" placeholder="Input Choice Letter B"
              v-model="item.choiceB" required>
            <br>
            <label class="form-label" for=""><strong>Choice C:</strong></label>
            <input type="text" name="Question" id="C" class="form-control item" placeholder="Input Choice Letter C"
              v-model="item.choiceC" required>
            <br>

            <label class="form-label" for=""><strong>Letter of Answer:</strong></label>
            <input type="text" name="Answer" id="Answer" class="form-control item" placeholder="Input the correct answer"
              v-model="item.answer" required>
            <br>

            <div class="form-group row">
              <div class="form-group col md-2">
                <button type="button" class="btn btn-primary float-right" style="width: 100px; color: white;"
                  id="btnAdd" @click="addItem">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="content" style="color:black;padding:30px;">
            <div class="form-group row">
              <div class="form-group col md-6">
                <p style="font-size: 30px; text-align: center;">QUESTIONNAIRE</p>
              </div>
              <div class="form-group col md-6">
                <button type="button" class="btn btn-primary float-right mt-2" style="width: 200px; color: white;"
                  id="ShowAnsKey" @click="showAnswer()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg> {{ showBtn }} Answer Key</button>
              </div>
            </div>
            <!-- Questionnaire Table -->
            <div class="table-responsive " id="dataTable" role="grid" aria-describedby="dataTable_info">
              <table class="table table-hover table-bordered pt-3" id="tableQuestionnaire" style="font-size: 12px;">
                <thead class="thead-light">
                  <tr>
                    <th>Question</th>
                    <th style="width:150px;">Choices</th>
                    <th style="width:50px; text-align:center;" v-if="show">Answer</th>
                    <th style="width:100px; text-align: center;">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" v-bind:key="item.question">
                    <td>
                      <input v-if="item.edit" v-model="item.question" type="text">
                      <span v-else>{{ item.question }}</span>
                    </td>
                    <td>
                      <template>
                        <span>A. </span><input v-if="item.edit" v-model="item.choiceA" type="text">
                        <span v-else>{{ item.choiceA }}</span><br>
                        <span>B. </span><input v-if="item.edit" v-model="item.choiceB" type="text">
                        <span v-else>{{ item.choiceB }}</span><br>
                        <span>C. </span><input v-if="item.edit" v-model="item.choiceC" type="text">
                        <span v-else>{{ item.choiceC }}</span><br>
                      </template>
                    </td>
                    <td style="text-align:center;" v-if="show"><input v-if="item.edit" v-model="item.answer" type="text">
                        <span v-else>{{ item.answer }}</span><br>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm text-light" @click="ItemEdit(item)" id="btnUpdate"><svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg></button>
                      <button type="button" class="btn btn-danger btn-sm text-light" @click="removeItem(item)" ><svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-trash" viewBox="0 0 16 16">
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<script scope>
const url = "http://localhost:3002/users";
export default {
  data() {
    return {
      item: { id: 0, question: "", choiceA: "", choiceB: "", choiceC: "", answer: "", edit: false },
      items: [],
      tempData: [],
      showBtn: "Show",
      show: false
    }
  },
  methods: {
    async addItem() {
      console.log(this.item.id);
      await this.$axios.$post(url + '/insert', this.item)
        .then((res) => {
          console.log(res);
          this.item = { id: 0, question: "", choiceA: "", choiceB: "", choiceC: "", answer: "", edit: false };
          this.GetAllData();
        })
        .catch((err) => console.log(err));
    },
    async removeItem(item) {
      await this.$axios.$post(url + '/delete', { id: item.id })
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
    },
    GetCurrentID() {
      this.item.id = Math.max.apply(Math, this.items.map(function (o) { return o.id; })) + 1;
      console.log(this.item);
    },
    async GetAllData() {
      await this.$axios.$get(url)
        .then((res) => {
          console.log(res);
          this.tempData = res;
        })
        .catch((err) => console.log(err));
      this.items = this.tempData;
      this.GetCurrentID();
    },
    async ItemEdit(item) {
      if (!item.edit) {
        item.edit = !item.edit
        item.showAnswer = !item.showAnswer
      }
      else {
        item.edit = !item.edit
        item.showAnswer = !item.showAnswer
        console.log(item);
        await this.$axios.$post(url + '/update', item)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    },
    async showAnswer(){
            this.show = !this.show;
            this.showBtn = (this.show) ? "Hide" : "Show";
        }
  },
  async mounted() {
    await this.GetAllData();
  }
}
</script>

<style>
.body {
  background-image: url("@/assets/bg5.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

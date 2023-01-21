<template>
  <div>
    <!-- ADD MODAL -->
    <v-dialog persistent transition="dialog-bottom-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on" @click.stop="addItem()"
          >Add a Question</v-btn
        >
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark>Add a Question</v-toolbar>
          <v-card-text>
            <div class="pa-4">
              <v-text-field
                v-model="item.question"
                filled
                dense
                label="Question here"
              ></v-text-field>
              <v-text-field
                v-model="item.choices.A"
                label="First Choice"
                placeholder="Write here"
                filled
                rounded
                dense
              ></v-text-field>
              <v-text-field
                v-model="item.choices.B"
                label="Second Choice"
                placeholder="Write here"
                filled
                rounded
                dense
              ></v-text-field>
              <v-text-field
                v-model="item.choices.C"
                label="Third Choice"
                placeholder="Write here"
                filled
                rounded
                dense
              ></v-text-field>
              <v-text-field
                v-model="item.choices.D"
                label="Fourth Choice"
                placeholder="Write here"
                filled
                rounded
                dense
              ></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-text-field
              class="mt-6 me-6"
              v-model="item.answer"
              label="Answer"
              placeholder="Write here"
              filled
              rounded
              dense
            ></v-text-field>
            <v-btn
              elevation="2"
              color="#66BB6A"
              @click="
                insertQuestion();
                dialog.value = false;
              "
              >Add</v-btn
            >
            <v-btn elevation="2" color="error" @click="dialog.value = false"
              >Cancel</v-btn
            >
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <!-- EDIT MODAL -->
    <v-dialog persistent v-model="editDialog" max-width="600">
      <v-card>
        <v-card-title class="text-h5"> Edit </v-card-title>

        <v-card-text>
          <div class="pa-4">
            <v-text-field
              v-model="item.question"
              filled
              dense
              label="Question here"
            ></v-text-field>
            <v-text-field
              v-model="item.choices.A"
              label="First Choice"
              placeholder="Write here"
              filled
              rounded
              dense
            ></v-text-field>
            <v-text-field
              v-model="item.choices.B"
              label="Second Choice"
              placeholder="Write here"
              filled
              rounded
              dense
            ></v-text-field>
            <v-text-field
              v-model="item.choices.C"
              label="Third Choice"
              placeholder="Write here"
              filled
              rounded
              dense
            ></v-text-field>
            <v-text-field
              v-model="item.choices.D"
              label="Fourth Choice"
              placeholder="Write here"
              filled
              rounded
              dense
            ></v-text-field>
          </div>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-text-field
            class="mt-6 me-6"
            v-model="item.answer"
            label="Answer"
            placeholder="Write here"
            filled
            rounded
            dense
          ></v-text-field>
          <v-btn
            color="green darken-1"
            text
            @click="
              updateQuestion(item);
              editDialog = false;
            "
          >
            Save
          </v-btn>
          <v-btn text color="error" @click="editDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn
      v-if="!edit"
      color="#66BB6A"
      elevation="2"
      medium
      style="margin: 10px"
      @click="editAction()"
      >Show/Edit</v-btn
    >
    <v-btn
      v-else
      color="error"
      elevation="2"
      medium
      style="margin: 10px"
      @click="editAction()"
      >X</v-btn
    >

    <!-- TABLE -->
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Question</th>
            <th v-if="edit" class="text-center">Answer</th>
            <th v-if="edit" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in questions" :key="item._id">
            <td style="padding: 15px">
              <v-card elevation="3" outlined shaped>
                <v-card-title>{{ item.question }}</v-card-title>
                <v-card-text>
                  <v-radio-group>
                    <v-radio
                      v-for="choice in item.choices"
                      :key="choice"
                      :label="choice"
                      :value="choice"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
            </td>
            <td v-if="edit" class="text-center">
              <h2>{{ item.answer }}</h2>
            </td>
            <td v-if="edit" class="pa-5 d-flex justify-center">
              <v-btn
                class="ma-2"
                color="primary"
                @click.stop="
                  editItem(item);
                  editDialog = true;
                "
              >
                <i class="fas fa-edit"></i>
              </v-btn>
              <v-btn class="ma-2" color="error" @click="deleteQuestion(item)">
                <i class="fas fa-trash"></i>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        _id: "",
        question: "",
        choices: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
        answer: "",
      },
      questions: [],
      edit: false,
      editDialog: false,
    };
  },
  mounted() {
    this.fetchQuestions();
  },
  methods: {
    async fetchQuestions() {
      await this.$axios
        .get("http://localhost:8080/questions")
        .then((result) => {
          this.questions = result.data;
        });

      let i = 0;
      while (i < this.questions.length) {
        this.questions[i].show = false;
        i++;
      }
    },
    async insertQuestion() {
      // Insert Data MongoDB
      await this.$axios.post("http://localhost:8080/questions", {
        question: this.item.question,
        choices: {
          A: this.item.choices.A,
          B: this.item.choices.B,
          C: this.item.choices.C,
          D: this.item.choices.D,
        },
        answer: this.item.answer,
      });

      // Reset the Values
      this.item = {
        _id: "",
        question: "",
        choices: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
        answer: "",
      };

      //Refresh Table
      this.fetchQuestions();
    },
    async deleteQuestion(item) {
      // Delete Data MongoDB
      await this.$axios.delete("http://localhost:8080/questions/" + item._id);

      // Refresh the Table
      this.fetchQuestions();
    },
    async updateQuestion(item) {
      // Update Data MongoDB
      await this.$axios.put(
        "http://localhost:8080/questions/" + this.item._id,
        {
          question: this.item.question,
          choices: {
            A: this.item.choices.A,
            B: this.item.choices.B,
            C: this.item.choices.C,
            D: this.item.choices.D,
          },
          answer: this.item.answer,
        }
      );

      // Reset the Values
      this.item = {
        _id: "",
        question: "",
        choices: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
        answer: "",
      };

      // Refresh the Table
      this.fetchQuestions();
    },
    addItem() {
      // Reset the Values
      this.item = {
        _id: "",
        question: "",
        choices: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
        answer: "",
      };
    },
    editItem(item) {
      this.item = item;
    },
    editAction() {
      if (this.edit) {
        this.edit = false;
      } else {
        this.edit = true;
      }
    },
  },
};
</script>

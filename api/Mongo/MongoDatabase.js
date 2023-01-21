const questions = require('./MongoConnect').db('PracticalExam').collection('Question');


//Get All Documens from Account Collection
const getAllQuestions = async () => {
    const cursor = await questions.find();
    return cursor.toArray();
};

//Search Document by ID
const getQuestions = async (id) =>{
    return await questions.findOne({id: parseInt(id)});
};

//Insert New Document
const insertQuestions = async(id, question, choicea, choicea, answer) => {
    console.log("Database : " + id);
    return await questions.insertOne({id: id, Question: question, ChoiceA: choicea, ChoiceB: choiceb, Answer: answer});
};

//Update Document
const updateQuestions = async(id, question, choicea, choiceb, answer) => {
    return await questions.updateOne({id: parseInt(id)}, {$set: {
        Question: question,
        ChoiceA: choicea,
        ChoiceB: choiceb,
        Answer: answer
    }});
}

//Delete a Document
const deleteQuestions = async (id) => {
    return questions.deleteOne({id: parseInt(id)});
};

module.exports = {getAllQuestions, getQuestions, updateQuestions, insertQuestions, deleteQuestions};
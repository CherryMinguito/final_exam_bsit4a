const question = require('./index').db('Library').collection('questions');

const questionID = require('mongodb').ObjectId;

//store
const storeQuestion = async ({question, choices, answer}) => {
    return await question.insertOne({question, choices, answer});
}

//get all questions
const getAllQuestion  = async () => {
    return await question.find().toArray();
}

//get question by ID
const getQuestion = async id => {
    return await question.findOne({
        id: questionID(id)
    });
}

//update question by id
const updateQuestion = async (id, {question, choices, answer}) => {
    return await question.replaceOne({_id:questionID(id)}, {question, choices, answer});
}

//delete book by id
const deleteQuestion = async (id) => {
    return await question.deleteOne({_id:questionID(id)});
}

module.exports = {storeQuestion, getAllQuestion, getQuestion, updateQuestion, deleteQuestion};

const questions = require('./index').db('Library').collection('questions');

const questionID = require('mongodb').ObjectId;

//store
const storeQuestion = async ({question, choices, answer}) => {
    return await questions.insertOne({question, choices, answer});
}

//get all questions
const getAllQuestion  = async () => {
    return await questions.find().toArray();
}

//get question by ID
const getQuestion = async id => {
    return await questions.findOne({
        id: questionID(id)
    });
}

//update question by id
const updateQuestion = async (id, {question, choices, answer}) => {
    return await questions.replaceOne({_id:questionID(id)}, {question, choices, answer});
}

//delete book by id
const deleteQuestion = async (id) => {
    return await questions.deleteOne({_id:questionID(id)});
}

module.exports = {storeQuestion, getAllQuestion, getQuestion, updateQuestion, deleteQuestion};

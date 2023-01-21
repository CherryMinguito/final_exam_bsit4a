//Get data from Database
const user = require('./mongoConnect.js').db('PracticalExam').collection('Questions');

//Read
const GetUsers = async () => {
    const cursor = await user.find();
    return cursor.toArray();
};

//Create
const insertAccount = async(id, question, choiceA, choiceB, choiceC, answer) => {
    return await user.insertOne({id: parseInt(id), question: question, choiceA: choiceA, choiceB: choiceB, choiceC: choiceC, answer: answer, edit: false});
};

//Update
const updateAccount = async(id, question, choiceA, choiceB, choiceC, answer) =>{
    return await user.updateOne({id: parseInt(id)}, {$set:{
      question: question,
      choiceA: choiceA,
      choiceB: choiceB,
      choiceC: choiceC,
      answer: answer
    }});
};

//Delete
const deleteAccount = async (id) => {
    return await user.deleteOne({id: parseInt(id)});
};

module.exports = {GetUsers, insertAccount, updateAccount, deleteAccount};

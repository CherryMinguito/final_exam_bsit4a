//Data From Mongo
const user = require('./MongoConnect.js').db('ScriptDevFINALEXAM').collection('Questions');


const GetUsers = async () => {
    const cursor = await user.find();
    return cursor.toArray();
};

//Insert new document
const insertAccount = async(id, question, choice_1, choice_2, choice_3, answer) => {
    return await user.insertOne({id: parseInt(id), question: question, choice_1: choice_1, choice_2: choice_2,  choice_3: choice_3, answer: answer, edit: false});
};

//Update Document
const updateAccount = async(id, question, choice_1, choice_2, choice_3, answer) =>{
    return await user.updateOne({id: parseInt(id)}, {$set:{
        question: question,
        choice_1: choice_1,
        choice_2: choice_2,
        choice_3: choice_3, 
        answer: answer
    }});
};

//Delete a Document
const deleteAccount = async (id) => {
    return await user.deleteOne({id: parseInt(id)});
};

module.exports = {GetUsers, insertAccount, updateAccount, deleteAccount};

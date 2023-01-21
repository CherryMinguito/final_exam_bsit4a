//Data From Mongo
const user = require('./MongoConnect.js').db('ScriptDev').collection('Students');


const GetUsers = async () => {
    const cursor = await user.find();
    return cursor.toArray();
};

//Insert new document
const insertAccount = async(id, name, lastname) => {
    return await user.insertOne({id: parseInt(id), name: name, lastname: lastname, edit: false});
};

//Update Document
const updateAccount = async(id, name, lastname) =>{
    return await user.updateOne({id: parseInt(id)}, {$set:{
        name: name,
        lastname: lastname
    }});
};

//Delete a Document
const deleteAccount = async (id) => {
    return await user.deleteOne({id: parseInt(id)});
};

module.exports = {GetUsers, insertAccount, updateAccount, deleteAccount};

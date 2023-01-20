//Get data from Database
const user = require('./mongoConnect.js').db('ScriptDev').collection('Students');

//Read
const GetUsers = async () => {
    const cursor = await user.find();
    return cursor.toArray();
};

//Create
const insertAccount = async(id, fname, lname, course) => {
    return await user.insertOne({id: parseInt(id), fname: fname, lname: lname, course: course, edit: false});
};

//Update
const updateAccount = async(id, fname, lname,course) =>{
    return await user.updateOne({id: parseInt(id)}, {$set:{
        fname: fname,
        lname: lname,
        course: course
    }});
};

//Delete
const deleteAccount = async (id) => {
    return await user.deleteOne({id: parseInt(id)});
};

module.exports = {GetUsers, insertAccount, updateAccount, deleteAccount};

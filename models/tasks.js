const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title :{
        type : String
    },
    description : {
        type : String
    },
    category : {
        Type : String
    },
    due_date : {
        type : Date
    }
},{ timestamps : true });

var Tasks = mongoose.model('Tasks',taskSchema);

module.exports = Tasks;
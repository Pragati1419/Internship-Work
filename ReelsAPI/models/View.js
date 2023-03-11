const mongoose = require('mongoose');
const ViewSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId;
        required:true
    }
    ,
    postId:{
        type:mongoose.Schema.Types.ObjectId;
        required:true
    }
    view:{
        type:number;
        required:true
    }
})
 mongoose.exports=mongoose.model('View',ViewSchema)
const mongoose = require('mongoose');
const ReelSchema=new mongoose.Schema({
userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
},
caption:{
    type:String,
    maxlength:200,
    required: true
},
video:{
    type:String,
    required: true
}
,
createdAt:{
    type:Date,
    default:Date.now

},
reaction:{
    type:[{
        type:mongoose.Schema.Types.Object,
        ref:'Reaction'
    }]
},
comments:{
    type:[{
        type:mongoose.Schema.Types.Object,
        ref:'Comment'
    }]
},
views:{
type:[{
    type:mongoose.Schema.Types.Object,
    ref:'View'
}]
},
location:{
    type:String,
}
})
module.exports =mongoose.model('Reel',ReelSchema);
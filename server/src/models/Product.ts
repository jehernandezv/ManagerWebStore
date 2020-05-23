import mongoose, { Schema, model} from 'mongoose';

const ProductShema = new Schema({
    name: {
        type: String,
        required: true
    },
    cant:{
        type: Number,
        required:true,
    }  
}, {
    timestamps:true
});

export default model('Product', ProductShema);
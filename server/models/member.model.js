const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required: [true, "Name is required."],
        minlength: [5, "Name must be more than 5 chars."],
        maxlength: [50, "Title cannot be greater than or equal 50 chars."],
    },
    email:{
        type: String,
        required: [true, "Email is required."],
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        validate:validateEmail
    },
    gender:{
        type:String,
        required: [true,"Gender is required."],
        enum : ["male" , "female" , "prefer not to say"]
    },
    details:{
        type:String,
        required: [true, "Description is required."],
        minlength: [20, "Description must be more than 20 chars."],
        maxlength: [500, "Description cannot be greater than 500 chars."],
    },
    attending:{
        type:Boolean,
        default:false
    }
})

async function validateEmail(email) {
  const user = await this.constructor.findOne({ email })
  if (user) throw new Error("A user is already registered with this email address.")
}

const Member = mongoose.model('Member',MemberSchema)

module.exports = Member;
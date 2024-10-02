// const { model, models, Schema } = require("mongoose");
// import bcrypt from 'bcrypt';
// const UserSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     validate: (password) => {
//       if (password?.length < 5) {
//         throw new Error("Password length should be more than 5 characters");
      
//       }
        
//     },
//   },
//   name:{
//     type:String,
//     required:true
//   },
//   contact:{
//     type:Number,
//     required:true
//   }
// });
// UserSchema.post('validate',function(user){
//   const notpass=user.password;
//   const salt=bcrypt.genSaltSync(10);
//   const  hash=bcrypt.hashSync(notpass,salt);
//   user.password=hash;
// })

// export const User = models.User || model('User', UserSchema);



const { model, models, Schema } = require("mongoose");
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(password) {
        return password?.length >= 5;
      },
      message: "Password length should be more than 5 characters",
    },
  },
  name: { // Changed to lowercase
    type: String,
    required: true,
  },
  contact: { // Changed to lowercase
    type: Number,
    required: true,
  },
  admin:{
    type:Boolean,
    default:false,
  },
});

UserSchema.post('validate',function(user){
    const notpass=user.password;
    const salt=bcrypt.genSaltSync(10);
    const  hash=bcrypt.hashSync(notpass,salt);
    user.password=hash;
  })
  

export const User = models.User || model('User', UserSchema);

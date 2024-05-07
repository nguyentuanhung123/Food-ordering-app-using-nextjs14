import bcrypt from 'bcrypt'
const { model, models, Schema } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if(!pass?.length || pass.length < 5) {
                new Error('password must be at least 5 characters');
                // return false
            }
        }
    }
}, {
    timestamps: true
});

UserSchema.post('validate', (user) => {
    /// console.log({arguments});
    // user.password = 'hashed'
    const notHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
})

export const User = models?.User || model('User', UserSchema)

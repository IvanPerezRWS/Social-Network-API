
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: 'You need to provide Username!',
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: 'You need to provide an email!',
        unique: true, 
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill out a valid email address!']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, frineds) => total + frineds.length + 1, 0);
});

const User = model('User', userSchema);

module.exports = User;
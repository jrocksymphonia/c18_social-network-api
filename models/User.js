const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');


const userSchema = new Schema(
    {
        username: {
            type: String,
            // Unique
            required: true,
            // Trimmed
        },
        email: {
            type: String,
            required: true,
            // Unique
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends}`;
  })
  .set(function (v) {
    const friend = v.split(' ')[0];
    this.set({ friend });
});

const User = model('user', userSchema);

module.exports = User;
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // Must be between 1 and 280 characters
        },
        createdAt: {
            // Date
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions}`;
  })
  .set(function (v) {
    const reaction = v.split(' ')[0];
    this.set({ reaction });
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
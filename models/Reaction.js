const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            // Use Mongoose's ObjectId data type
            // Default value is set to a new ObjectIds
        },
        reactionBody: {
            type: String,
            required: true,
            // 280 character maximum
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            // Date
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
    }
);


module.exports = reactionSchema;
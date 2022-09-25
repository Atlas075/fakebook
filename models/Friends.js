const { Schema, model, Types } = require("mongoose");

const dateFormat = require("../utils/dateFormat");

const FriendSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
          },
          lastName: {
            type: String,
            required: true,
            trim: true,
          },
    },
    {

    }
)

const Friend = model('Friend', FriendSchema)

module.exports = Friend
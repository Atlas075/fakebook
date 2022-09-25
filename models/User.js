const { Schema, model, Types } = require("mongoose");

const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema(
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
    friends: [],
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model('User', UserSchema)

UserSchema.virtual('thoughtCount').get(function () {
    return this.thought.reduce(
        (total, thought) => total + thought.reaction.lenght + 1, 0
    )
})

module.exports = User;

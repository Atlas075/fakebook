const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => Types.ObjectId,
    },
    writtenBy: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    reactionType: {
      type: String,
      required: true,
      enum: ["Like", "Love", "Lust", "Loathe", "Low-Down"],
      default: "Like",
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const ThoughtSchema = new Schema(
  {
    thoughtID: {
      type: Schema.Types.ObjectId,
      default: () => Types.ObjectId,
    },
    writtenBy: {
      type: String,
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    reactions: [ReactionSchema],
  },
  {
    toJson: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);



const Thought = model("Thought", ThoughtSchema);

ThoughtSchema.virtual("thoughtCount").get(function () {
  return this.thought.length;
});

module.exports = Thought;

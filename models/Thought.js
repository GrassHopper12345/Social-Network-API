const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Reaction(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date.now,
      get: createAtVal => moment(createAtVal).format('DD.MM.YYYY [at] HH:mm:ss'),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
)


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255, xlength: 255,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createAtVal => moment(createAtVal).format('DD.MM.YYYY [at] HH:mm:ss'),
    },
    username: {
      type: Number,
      required: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

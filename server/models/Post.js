const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  to: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

// const Post = mongoose.model("mail", PostSchema);

// module.exports = Post;

module.exports = model("mail", PostSchema);

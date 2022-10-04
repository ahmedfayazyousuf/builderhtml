const mongoose = require('mongoose');
const { Schema } = mongoose;

const Page = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    slug: {
      type: String,
      required: true,
    },
    content: Object,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Pages', Page);
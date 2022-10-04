const mongoose = require('mongoose');
const { Schema } = mongoose;

const Page = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
<<<<<<< HEAD
      maxlength: 100,
=======
      maxlength: 50,
>>>>>>> 032c6226595c9612656c5445398c3b2caac5e650
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

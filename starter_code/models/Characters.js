const charSchema = new Schema({
  id: Number,
  name: String,
  occupation: String,
  weapon: String,
  cartoon: {
    type: Boolean,
    default: cartoon
  }
});

module.exports = mongoose.model('Food', foodSchema)

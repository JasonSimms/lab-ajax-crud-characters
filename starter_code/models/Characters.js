const foodSchema = new Schema({
  id: Number,
  name: String,
  occupation: String,
  weapon: String,
  cartoon: {
    type: Boolean,
    default: cartoon
  }
});

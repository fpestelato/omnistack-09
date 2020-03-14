const moongose = require('mongoose');

const SpotSchema = new moongose.Schema({
  thumbnail: String,
  company: String,
  price: String,
  techs: [String],
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

module.exports = moongose.model('Spot', SpotSchema);
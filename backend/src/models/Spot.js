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
}, {
  toJSON: {
    virtuals: true,
  },
});

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = moongose.model('Spot', SpotSchema);
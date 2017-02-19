var mongoose = require('mongoose');

var TemplateSchema = mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  downloadRank: {
    type: Number
  },
  downloadLink: {
    type: String
  },
  uploadedBy: {
    type: String
  },
  previewLink: {
    type: String
  },
  price: {
    type: Number
  }
});

var Template = module.exports = mongoose.model('Template', TemplateSchema);

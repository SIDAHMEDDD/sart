var mongoose = require('mongoose');

var TemplateSchema = mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  pictureLink: {
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
  language: {
    type: String
  },
  features: {
    type: String
  },
  software: {
    type: String
  },
  Temptype: {
    type: String
  },
  tag: {
    type: String
  },
  planguages: {
    type: String
  }
});

var Template = module.exports = mongoose.model('Template', TemplateSchema);

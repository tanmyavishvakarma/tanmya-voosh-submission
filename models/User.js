const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  facebookId: { type: String },
  twitterId: { type: String },
  githubId: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profileVisibility: { type: String, enum: ['public', 'private'], default: 'public' },
  photo: { type: String },
  bio: { type: String },
  phone: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.model('User', UserSchema);

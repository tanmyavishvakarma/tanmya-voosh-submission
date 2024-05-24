const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();


router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.put('/me', auth, async (req, res) => {
  const { name, email, bio, phone, profileVisibility, photo } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    user.phone = phone || user.phone;
    user.profileVisibility = profileVisibility || user.profileVisibility;
    user.photo = photo || user.photo;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.get('/public', async (req, res) => {
  try {
    const users = await User.find({ profileVisibility: 'public' }).select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.get('/all', auth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied' });
  }
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

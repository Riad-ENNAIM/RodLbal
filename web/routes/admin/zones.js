const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Admin = require('../../models/Admin');
const Zone = require('../../models/Zone');

// @route     GET api/admin/zones
// @desc      Get admin zones
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    if (!admin) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const zones = await Zone.find();
    res.json(zones);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/admin/zones
// @desc      Add new zone
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('center', 'Center is required')
      .not()
      .isEmpty(),
      check('coords', 'Coords is required')
      .isArray()
      .not()
      .isEmpty()
    ]
  ],
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.user.id);
      if (!admin) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { zoom, center, coords } = req.body;

    try {
      const newZone = new Zone({
        zoom,
        center,
        coords,
        admin: req.user.id
      });

      const zone = await newZone.save();

      res.json(zone);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     GET api/admin/zones/:id
// @desc      Get admin zone by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    if (!admin) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const zone = await Zone.findById(req.params.id);
    res.json(zone);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

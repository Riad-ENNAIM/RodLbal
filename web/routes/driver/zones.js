const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Driver = require('../../models/Driver');
const Zone = require('../../models/Zone');

// @route     GET api/driver/zone
// @desc      Get driver zone
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const driver = await Driver.findById(req.user.id);
    if (!driver) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const zone = await Zone.findById(driver.zone);
    res.json(zone);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

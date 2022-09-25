const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/user.html'));
});

router.get('/add-friend', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/friend-list.html'));
});

router.get('/thoughts', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/thoughts.html'));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Replicate = require('replicate');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mochi', swap_image: '', output: '' });
});

router.post('/', async function(req, res, next) {
  const target_image = req.body.target_image;
  const swap_image = req.body.swap_image;

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const output = await replicate.run(
    "lucataco/faceswap:9a4298548422074c3f57258c5d544497314ae4112df80d116f0d2109e843d20d",
    {
      input: {
        target_image: target_image,
        swap_image: swap_image
      }
    }
  );

  res.render('index', { title: 'Mochi', swap_image: swap_image, output: output });
});

module.exports = router;
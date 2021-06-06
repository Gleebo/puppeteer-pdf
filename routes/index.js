var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');
/* GET home page. */
router.get('/', async function(req, res, next) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 794, height: 1122, deviceScaleFactor: 2});
  await page.goto('https://duckduckgo.com/', {
    waitUntil: 'load'
  });
  await page.pdf({ path: 'test.pdf', format: 'a4' });
  await browser.close();
  res.send("done")
});

module.exports = router;
"use strict";

var _require = require("openai"),
    Configuration = _require.Configuration,
    OpenAIApi = _require.OpenAIApi;

var configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
var openai = new OpenAIApi(configuration);

var generateImage = function generateImage(req, res) {
  var response, imageUrl;
  return regeneratorRuntime.async(function generateImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(openai.createImage({
            prompt: 'Polar bear on a plane',
            n: 1,
            size: '512x512'
          }));

        case 3:
          response = _context.sent;
          imageUrl = response.data.data[0].url;
          res.status(200).json({
            success: true,
            data: imageUrl
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);

          if (_context.t0.response) {
            console.log(_context.t0.response.status);
            console.log(_context.t0.response.data);
          } else {
            console.log(_context.t0.message);
          }

          res.status(400).json({
            success: false,
            error: 'The image could not be generated'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = {
  generateImage: generateImage
};
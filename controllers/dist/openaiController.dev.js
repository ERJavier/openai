"use strict";

var generateImage = function generateImage(req, res) {
  return regeneratorRuntime.async(function generateImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.status(200).json({
            success: true
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  generateImage: generateImage
};
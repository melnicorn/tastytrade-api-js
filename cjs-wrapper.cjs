// cjs-wrapper.js
const mod = require('./dist/tastytrade-api.cjs');

// If it was compiled with an ES default, grab that—otherwise, just export whatever it is
module.exports = mod && mod.__esModule ? mod.default : mod;
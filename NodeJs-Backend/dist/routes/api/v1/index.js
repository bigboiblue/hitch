"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _flags = _interopRequireDefault(require("./flags"));

var _groups = _interopRequireDefault(require("./groups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
const MONGO_IP = "mongodb"; //docker-compose adds service link as ip in hosts

const MONGO_PORT = "27017";
const DB_URL = `mongodb://${MONGO_IP}:${MONGO_PORT}`;

_mongoose.default.connect(`${DB_URL}/hitch`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.use("/flags", _flags.default);
router.use("/groups", _groups.default);
var _default = router;
exports.default = _default;

//# sourceMappingURL=index.js.map
const EventEmitter = require("node:events");
const gamecontroller = require("sdl2-gamecontroller");

class DualsenseManager extends EventEmitter {
  constructor() {
    console.log("🎮 Init dualsense manager");
    super();
  }

  setup() {
    this.bindEvents();
  }

  bindEvents() {
    gamecontroller.on("a:down", () => this.emit("button", { value: "x" }));
  }
}

module.exports = DualsenseManager;

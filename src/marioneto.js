const DisplayController = require("./services/display-controller");
const DualsenseManager = require("./services/dualsense-manager");

class Marioneto {
  constructor() {
    console.log("🤖 Hello soy marioneto");

    this.displayController = new DisplayController();
    this.dualsenseManager = new DualsenseManager();
  }

  setup() {
    console.log("⚙️ settuping");
    this.dualsenseManager.setup();

    this.bindEvents();
  }

  bindEvents() {
    this.dualsenseManager.on("button", (payload) =>
      console.log(" button pressed", payload)
    );
  }
}

module.exports = Marioneto;

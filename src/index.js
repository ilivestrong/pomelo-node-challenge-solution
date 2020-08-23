const { init, start } = require("./server");

(async function kickOff() {
  await init();
  await start();
})();

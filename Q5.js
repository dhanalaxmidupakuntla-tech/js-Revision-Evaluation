function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timerId = null;
  let startTime = null;
  let paused = false;

  function tick() {
    if (paused) return;

    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    const timeLeft = remaining - elapsed;

    if (timeLeft <= 0) {
      clearTimeout(timerId);
      onTick(0);
      onComplete();
      return;
    }

    onTick(timeLeft);

    // schedule next tick exactly
    timerId = setTimeout(tick, 1000);
  }

  function start() {
    startTime = Date.now();
    timerId = setTimeout(tick, 1000);
  }

  function pause() {
    if (paused) return;
    paused = true;
    clearTimeout(timerId);

    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    remaining = remaining - elapsed;
  }

  function resume() {
    if (!paused) return;
    paused = false;
    start();
  }

  // start immediately
  onTick(remaining);
  start();

  return {
    pause,
    resume
  };
}


const timer = createCountdown(
  5,
  (time) => console.log("Remaining:", time),
  () => console.log("Done!")
);

setTimeout(() => timer.pause(), 2200);   // pause at ~2s
setTimeout(() => timer.resume(), 4000);  // resume

(function(){
  class FroggerDesktopControls {
    constructor(){
      this._queue = [];
      window.addEventListener('keydown', (e) => {
        if (e.repeat) return;
        const k = e.key;
        if (k === 'ArrowUp'   || k === 'w' || k === 'W') this._queue.push('up');
        if (k === 'ArrowDown' || k === 's' || k === 'S') this._queue.push('down');
        if (k === 'ArrowLeft' || k === 'a' || k === 'A') this._queue.push('left');
        if (k === 'ArrowRight'|| k === 'd' || k === 'D') this._queue.push('right');
      }, { passive: true });
    }
    consume(){ return this._queue.shift() || null; }
  }
  window.FroggerDesktopControls = FroggerDesktopControls;
})();

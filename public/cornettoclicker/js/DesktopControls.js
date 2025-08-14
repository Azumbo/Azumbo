// DesktopControls.js
(function(){
  class DesktopControls {
    constructor(){
      this.axisX = 0; // -1..+1
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') this.axisX = -1;
        if (e.key === 'ArrowRight'|| e.key === 'd' || e.key === 'D') this.axisX = +1;
      }, { passive: true });

      window.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') this.axisX = 0;
        if (e.key === 'ArrowRight'|| e.key === 'd' || e.key === 'D') this.axisX = 0;
      }, { passive: true });
    }
    getAxisX(){ return this.axisX; }
  }
  window.DesktopControls = DesktopControls;
})();

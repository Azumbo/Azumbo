// MobileControls.js
(function(){
  class MobileControls {
    constructor(rootEl, leftBtn, rightBtn){
      this.axisX = 0;
      this._dragActive = false;
      this._startX = 0;
      this._root = rootEl || document.body;

      // Drag по полю игры (Pointer Events)
      this._root.addEventListener('pointerdown', (e) => {
        this._dragActive = true;
        this._startX = e.clientX;
      }, { passive: true });

      this._root.addEventListener('pointermove', (e) => {
        if (!this._dragActive) return;
        const dx = e.clientX - this._startX;
        const w = Math.max(1, window.innerWidth);
        // 40% ширины экрана = полная скорость
        this.axisX = Math.max(-1, Math.min(1, dx / (w * 0.4)));
      }, { passive: true });

      const endDrag = () => { this._dragActive = false; this.axisX = 0; };
      this._root.addEventListener('pointerup', endDrag, { passive: true });
      this._root.addEventListener('pointercancel', endDrag, { passive: true });
      this._root.addEventListener('pointerleave', endDrag, { passive: true });

      // Экранные кнопки: удержание даёт постоянную ось
      const press  = (val) => (ev) => { ev.preventDefault(); this.axisX = val; };
      const release = (ev) => { ev && ev.preventDefault(); this.axisX = 0; };

      ['pointerdown','touchstart','mousedown'].forEach(type => {
        leftBtn.addEventListener(type,  press(-1), { passive: false });
        rightBtn.addEventListener(type, press(+1), { passive: false });
      });
      ['pointerup','pointercancel','touchend','mouseup','mouseleave'].forEach(type => {
        leftBtn.addEventListener(type,  release, { passive: false });
        rightBtn.addEventListener(type, release, { passive: false });
      });

      // Не даём странице скроллиться, когда юзер взаимодействует с контролами
      [leftBtn, rightBtn, this._root].forEach(el=>{
        el.addEventListener('touchmove', (e)=> e.preventDefault(), { passive: false });
      });
    }
    getAxisX(){ return this.axisX; }
  }
  window.MobileControls = MobileControls;
})();

// InputController.js
export class InputController {
  constructor() {
    this.axisKeyboard = 0;  // -1..+1
    this.axisButtons  = 0;
    this.axisDrag     = 0;
    this.axisTilt     = 0;
    this.active = true;

    // Клавиатура
    window.addEventListener('keydown', (e) => {
      if (!this.active) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A')  this.axisKeyboard = -1;
      if (e.key === 'ArrowRight'|| e.key === 'd' || e.key === 'D')  this.axisKeyboard = +1;
    }, { passive: true });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A')  this.axisKeyboard = 0;
      if (e.key === 'ArrowRight'|| e.key === 'd' || e.key === 'D')  this.axisKeyboard = 0;
    }, { passive: true });

    // Drag по экрану (Pointer Events)
    this._dragActive = false;
    this._dragStartX = 0;
    this._dragLastX  = 0;
    const area = document.getElementById('game') || document.getElementById('game-root') || document.querySelector('canvas') || document.body;

    area.addEventListener('pointerdown', (e) => {
      if (!this.active) return;
      this._dragActive = true;
      this._dragStartX = e.clientX;
      this._dragLastX  = e.clientX;
      this.axisDrag = 0;
    }, { passive: true });

    area.addEventListener('pointermove', (e) => {
      if (!this._dragActive) return;
      const dx = e.clientX - this._dragStartX;
      const w = Math.max(1, window.innerWidth);
      // нормализация: 40% экрана = полная скорость
      const norm = Math.max(-1, Math.min(1, dx / (w * 0.4)));
      this.axisDrag = norm;
      this._dragLastX = e.clientX;
    }, { passive: true });

    const endDrag = () => { this._dragActive = false; this.axisDrag = 0; };
    area.addEventListener('pointerup', endDrag, { passive: true });
    area.addEventListener('pointercancel', endDrag, { passive: true });
    area.addEventListener('pointerleave', endDrag, { passive: true });

    // Tilt (вкл. по запросу)
    this._tiltEnabled = false;
    this._tiltAlpha = 0.15; // сглаживание
    const onMotion = (e) => {
      if (!this._tiltEnabled || !e.accelerationIncludingGravity) return;
      const gx = e.accelerationIncludingGravity.x || 0; // портрет
      const norm = Math.max(-1, Math.min(1, gx / 7));   // 7 ~ чувствительность
      this.axisTilt = this.axisTilt * (1 - this._tiltAlpha) + norm * this._tiltAlpha;
    };
    window.addEventListener('devicemotion', onMotion, { passive: true });
  }

  setButtonsAxis(value) {
    this.axisButtons = value; // -1, 0, +1
  }

  enableTilt(enabled) {
    this._tiltEnabled = !!enabled;
    if (enabled && typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      // iOS permission
      DeviceMotionEvent.requestPermission().catch(()=>{});
    }
  }

  setActive(active) {
    this.active = !!active;
    if (!this.active) {
      this.axisKeyboard = this.axisButtons = this.axisDrag = this.axisTilt = 0;
    }
  }

  getAxisX() {
    // берём максимальный по модулю сигнал
    const a = this.axisKeyboard, b = this.axisButtons, c = this.axisDrag, d = this.axisTilt;
    const arr = [a, b, c, d];
    let best = 0, bestAbs = 0;
    for (const v of arr) {
      const av = Math.abs(v);
      if (av > bestAbs) { bestAbs = av; best = v; }
    }
    // лёгкое сглаживание (опционально)
    return Math.max(-1, Math.min(1, best));
  }
}

window.InputController = InputController; // если модулей нет

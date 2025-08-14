// MobileControls.js
export class MobileControls {
  constructor({ root, leftBtn, rightBtn, input }) {
    this.root = root; this.leftBtn = leftBtn; this.rightBtn = rightBtn; this.input = input;

    // Показать на устройствах с touch
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch && this.root) this.root.classList.remove('hidden');

    // Вешаем удержание
    const press = (val) => () => this.input.setButtonsAxis(val);
    const release = () => this.input.setButtonsAxis(0);

    ['pointerdown','touchstart','mousedown'].forEach(ev=>{
      this.leftBtn.addEventListener(ev,  press(-1), { passive: false });
      this.rightBtn.addEventListener(ev, press(+1), { passive: false });
    });
    ['pointerup','pointercancel','touchend','mouseup','mouseleave'].forEach(ev=>{
      this.leftBtn.addEventListener(ev,  release, { passive: true });
      this.rightBtn.addEventListener(ev, release, { passive: true });
    });

    // Блокируем скролл при управлении
    [this.leftBtn, this.rightBtn, this.root].forEach(el=>{
      el.addEventListener('touchmove', (e)=> e.preventDefault(), { passive: false });
    });
  }
}
window.MobileControls = MobileControls;

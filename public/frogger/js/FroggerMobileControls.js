(function(){
  class FroggerMobileControls {
    constructor({ root, up, down, left, right, swipe = true }){
      this._queue = [];
      this._root = root || document.body;

      const onTap = (cmd) => (ev) => { ev.preventDefault(); this._queue.push(cmd); };
      [['up',up], ['down',down], ['left',left], ['right',right]].forEach(([cmd, btn])=>{
        ['pointerdown','touchstart','mousedown'].forEach(t =>
          btn.addEventListener(t, onTap(cmd), { passive: false })
        );
      });

      if (swipe) {
        let sx=0, sy=0, active=false;
        const start = (e)=>{ active=true; sx=e.clientX||e.touches?.[0]?.clientX||0; sy=e.clientY||e.touches?.[0]?.clientY||0; };
        const end   = (e)=>{
          if(!active) return; active=false;
          const ex=e.clientX||e.changedTouches?.[0]?.clientX||0;
          const ey=e.clientY||e.changedTouches?.[0]?.clientY||0;
          const dx=ex-sx, dy=ey-sy;
          const th = Math.max(24, Math.min(56, Math.floor(window.innerWidth*0.06)));
          if (Math.abs(dx) < th && Math.abs(dy) < th) return;
          if (Math.abs(dx) > Math.abs(dy)) this._queue.push(dx>0?'right':'left');
          else this._queue.push(dy>0?'down':'up');
        };
        this._root.addEventListener('pointerdown', start, { passive: true });
        this._root.addEventListener('pointerup',   end,   { passive: true });
        this._root.addEventListener('touchstart',  start, { passive: true });
        this._root.addEventListener('touchend',    end,   { passive: true });

        this._root.addEventListener('touchmove', (e)=> e.preventDefault(), { passive: false });
      }
    }
    consume(){ return this._queue.shift() || null; }
  }
  window.FroggerMobileControls = FroggerMobileControls;
})();

(function(){
  function init(){
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = 10;
    const rows = 8;
    const maxWidth = Math.min(window.innerWidth * 0.9, 40 * cols);
    const tile = Math.floor(maxWidth / cols);
    canvas.width = cols * tile;
    canvas.height = rows * tile;
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;

    const frog = { x: 4, y: rows - 1 };
    const cars = [
      { x: 0, y: rows - 2, speed: 2 },
      { x: 200, y: rows - 3, speed: -2 },
    ];
    const logs = [
      { x: 0, y: 3, speed: 1.5 },
      { x: 200, y: 2, speed: -1.5 },
    ];
    const houses = [1, 4, 7];
    let homes = [false, false, false];
    let status = 'play';

    const reset = () => {
      frog.x = 4;
      frog.y = rows - 1;
    };

    const update = (dt) => {
      if (status !== 'play') return;
      const cmd = (window.__frogInput && window.__frogInput.consume) ? window.__frogInput.consume() : null;
      if (cmd) {
        switch(cmd){
          case 'left': if (frog.x > 0) frog.x -= 1; break;
          case 'right': if (frog.x < cols - 1) frog.x += 1; break;
          case 'up': if (frog.y > 0) frog.y -= 1; break;
          case 'down': if (frog.y < rows - 1) frog.y += 1; break;
        }
      }

      cars.forEach((c) => {
        c.x += c.speed * dt * tile;
        if (c.speed > 0 && c.x > cols * tile) c.x = -tile;
        if (c.speed < 0 && c.x < -tile) c.x = cols * tile;
      });
      logs.forEach((l) => {
        l.x += l.speed * dt * tile;
        if (l.speed > 0 && l.x > cols * tile) l.x = -tile * 2;
        if (l.speed < 0 && l.x < -tile * 2) l.x = cols * tile;
      });

      cars.forEach((c) => {
        if (
          frog.y === c.y &&
          frog.x * tile < c.x + tile &&
          frog.x * tile + tile > c.x
        ) {
          reset();
        }
      });

      if (frog.y === 3 || frog.y === 2) {
        let onLog = false;
        logs.forEach((l) => {
          if (
            frog.y === l.y &&
            frog.x * tile < l.x + tile * 2 &&
            frog.x * tile + tile > l.x
          ) {
            onLog = true;
            frog.x += l.speed * dt;
          }
        });
        if (!onLog) {
          reset();
        }
      }

      if (frog.y === 0) {
        let reached = -1;
        houses.forEach((h, i) => {
          if (!homes[i] && Math.abs(frog.x - h) < 1) reached = i;
        });
        if (reached >= 0) {
          homes[reached] = true;
          reset();
          if (homes.every((v) => v)) status = 'win';
        } else {
          reset();
        }
      }

      frog.x = Math.max(0, Math.min(cols - 1, frog.x));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, canvas.width, tile);
      ctx.fillRect(0, (rows - 1) * tile, canvas.width, tile);

      ctx.fillStyle = 'blue';
      ctx.fillRect(0, 2 * tile, canvas.width, tile * 2);

      ctx.fillStyle = 'grey';
      ctx.fillRect(0, 4 * tile, canvas.width, tile);

      ctx.fillStyle = 'brown';
      cars.forEach((c) => ctx.fillRect(c.x, c.y * tile, tile, tile));
      logs.forEach((l) => ctx.fillRect(l.x, l.y * tile, tile * 2, tile));

      ctx.fillStyle = 'purple';
      houses.forEach((h) => ctx.fillRect(h * tile, 0, tile, tile));
      ctx.fillStyle = 'lightgreen';
      homes.forEach((taken, i) => {
        if (taken) ctx.fillRect(houses[i] * tile, 0, tile, tile);
      });

      ctx.fillStyle = 'lime';
      ctx.fillRect(frog.x * tile, frog.y * tile, tile, tile);

      if (status === 'win') {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('You Win!', canvas.width / 2, canvas.height / 2);
      }
    };

    let last = 0;
    const loop = (ts) => {
      const dt = (ts - last) / 1000;
      last = ts;
      update(dt);
      draw();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  window.addEventListener('load', init);
})();

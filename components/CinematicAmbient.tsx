'use client';

export default function CinematicAmbient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="cinematic-orb gpu-layer"
        style={{
          width: '420px',
          height: '420px',
          top: '-8%',
          left: '-6%',
          background: 'radial-gradient(circle, rgba(196, 165, 116, 0.28) 0%, transparent 70%)',
          animationDelay: '0s',
        }}
      />
      <div
        className="cinematic-orb gpu-layer"
        style={{
          width: '360px',
          height: '360px',
          top: '18%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(168, 169, 173, 0.18) 0%, transparent 70%)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="cinematic-orb gpu-layer"
        style={{
          width: '280px',
          height: '280px',
          bottom: '10%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(196, 165, 116, 0.12) 0%, transparent 70%)',
          animationDelay: '-12s',
        }}
      />
    </div>
  );
}

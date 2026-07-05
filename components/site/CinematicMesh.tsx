import type { ReactNode } from 'react';

export default function CinematicMesh() {
  return (
    <div className="cinematic-mesh" aria-hidden>
      <div className="mesh-blob mesh-blob--champagne" />
      <div className="mesh-blob mesh-blob--cyan" />
      <div className="mesh-blob mesh-blob--warm" />
    </div>
  );
}

export function SiteRoot({ children }: { children: ReactNode }) {
  return <div className="site-root">{children}</div>;
}

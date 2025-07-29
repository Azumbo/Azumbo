import React from 'react';

export default function IphoneWrapper({ src }) {
  return (
    <div className="relative w-[427px] h-[640px]">
      <iframe
        src={src}
        title="Cornetto Clicker Game"
        loading="lazy"
        frameBorder="0"
        className="absolute top-[35px] left-[35px] w-[357px] h-[570px] rounded-[40px]"
      />
      <img
        src="/cornettoclicker/iphone-frame.png"
        alt="iPhone frame"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}

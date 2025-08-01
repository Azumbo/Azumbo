import { useEffect } from 'react';
import IphoneWrapper from '../components/IphoneWrapper';

// Page that wraps the mini game in an iPhone frame on desktop
export default function CornettoClicker() {
  useEffect(() => {
    // On mobile devices open the raw html page
    if (typeof window !== 'undefined') {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = '/cornettoclicker/game.html';
      }
    }
  }, []);

  return (
    <IphoneWrapper>
      <iframe src="/cornettoclicker/game.html" title="Cornetto Clicker" style={{ width: '100%', height: '100%', border: 'none' }} />
    </IphoneWrapper>
  );
}

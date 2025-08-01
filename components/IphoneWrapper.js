// Simple container that displays its children inside an iPhone frame
export default function IphoneWrapper({ children }) {
  return (
    <div
      style={{
        background: `url(/cornettoclicker/iphone-frame.png) no-repeat center/contain`,
        width: '100%',
        height: '100vh',
        maxWidth: '430px',
        maxHeight: '932px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%', height: '100%' }}>{children}</div>
    </div>
  );
}

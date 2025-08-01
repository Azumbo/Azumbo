// Simple container that displays its children inside an iPhone frame
export default function IphoneWrapper({ children }) {
  return (
    <div
      style={{
        background: `url(/cornettoclicker/iphone-frame.png) no-repeat center/contain`,
        width: '430px',
        height: '932px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '86%', height: '93%' }}>{children}</div>
    </div>
  );
}

const backgroundStyle = {
  background: `
    radial-gradient(at 0% 0%, hsla(217, 100%, 65%, 0.25) 0px, transparent 50%),
    radial-gradient(at 100% 0%, hsla(200, 100%, 55%, 0.2) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(260, 80%, 65%, 0.2) 0px, transparent 50%),
    radial-gradient(at 100% 100%, hsla(180, 80%, 60%, 0.25) 0px, transparent 50%),
    radial-gradient(at 50% 50%, hsla(220, 80%, 55%, 0.08) 0px, transparent 60%),
    linear-gradient(135deg, #0a0f18, #141c28, #1c2433)
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1
};


const Background = () => (
  <div style={backgroundStyle} />
);

export default Background;
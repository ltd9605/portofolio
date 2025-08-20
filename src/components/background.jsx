const backgroundStyle = {
  background: `
    radial-gradient(at 0% 0%, hsla(210, 100%, 65%, 0.45) 0px, transparent 60%),
    radial-gradient(at 100% 0%, hsla(240, 100%, 70%, 0.45) 0px, transparent 60%),
    radial-gradient(at 0% 100%, hsla(200, 100%, 60%, 0.4) 0px, transparent 60%),
    radial-gradient(at 100% 100%, hsla(170, 100%, 65%, 0.45) 0px, transparent 60%),
    linear-gradient(135deg, #05070b, #0a0f18, #0f1622)
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
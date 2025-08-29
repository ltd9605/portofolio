const backgroundStyle = {
  background: `
    radial-gradient(at 0% 0%, hsla(210, 100%, 40%, 0.25) 0px, transparent 60%),
    radial-gradient(at 100% 0%, hsla(240, 100%, 35%, 0.25) 0px, transparent 60%),
    radial-gradient(at 0% 100%, hsla(200, 100%, 30%, 0.2) 0px, transparent 60%),
    radial-gradient(at 100% 100%, hsla(170, 100%, 35%, 0.25) 0px, transparent 60%),
    linear-gradient(135deg, #020305, #06080d, #0a0f14)
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
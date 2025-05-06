import Typewriter from 'typewriter-effect'

function Profesion() {
  return (
    <h3 className="perfil__profesion">
      <span className="texto-animado">Soy&nbsp;
        <Typewriter
          options={{
            strings: ['ingeniero de sistemas.', 'desarrollador backend.'],
            autoStart: true,
            loop: true,
            delay: 80,
          }}
        />
      </span>
    </h3>
  )
}
export default Profesion

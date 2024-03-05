import './Noticia.css'

const Noticia = (props) => {
  // eslint-disable-next-line react/prop-types
  const { titulo, descripcion, img } = props
  return (
    <section className="section-noticias">
      <img src={img} alt={titulo} />
      <div className='noticia'>
        <h3 className='titulo'>{titulo}</h3>
        <p className='descripcion'>{descripcion}</p>
      </div>
    </section>
  )
}

export default Noticia
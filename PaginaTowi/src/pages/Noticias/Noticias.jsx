import Noticia from "../../components/Noticia"
import './Noticias.css'

const Noticias = () => {
  return (
    <>
      <div className="container">
        <Noticia titulo='Noticia' descripcion='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laboriosam itaque cum enim minus, eligendi quisquam eius, molestias est odio consequuntur necessitatibus et laborum ducimus fugiat facere tempore. Facilis, quis.' img = './src/assets/react.svg'/>
        <Noticia titulo='Noticia' descripcion='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laboriosam itaque cum enim minus, eligendi quisquam eius, molestias est odio consequuntur necessitatibus et laborum ducimus fugiat facere tempore. Facilis, quis.' img = './src/assets/towi_Redondo.png'/>
        <Noticia titulo='Noticia' descripcion='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laboriosam itaque cum enim minus, eligendi quisquam eius, molestias est odio consequuntur necessitatibus et laborum ducimus fugiat facere tempore. Facilis, quis.' img = './src/assets/si3i.png'/>
        <Noticia titulo='Noticia' descripcion='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laboriosam itaque cum enim minus, eligendi quisquam eius, molestias est odio consequuntur necessitatibus et laborum ducimus fugiat facere tempore. Facilis, quis.' img = './src/assets/si3i.png'/>
        {/* <Noticia></Noticia>
        <Noticia></Noticia>
        <Noticia></Noticia>
        <Noticia></Noticia> */}
      </div>
    </>
  )
}

export default Noticias
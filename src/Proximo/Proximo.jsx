import arcane from '../img/arcane-backgroud.jpg'
import './Proximo.scss'

const Proximo = () => {
  return (
    <section className="blog">
      <div className="blog-post">
        <div className="blog-post_img">
          <img src={arcane} alt="#" />
        </div>
        <div className="blog-post_info">
          <div className="blog-post_date">
            <span>Assista ao novo episódios</span>
            <span>13 de novembro, 2021</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proximo
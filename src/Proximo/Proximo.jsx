import arcane from '../img/arcane-backgroud.jpg'
import './Proximo.scss'

const Proximo = () => {
  return (
    <section className="video">
      <div className="video-post">
        <div className="video-img">
          <img src={arcane} alt="#" />
        </div>
        <a href="https://www.netflix.com/br/title/81435684" target='_blank'>
          <div className="video-info">
            <div className="video-content">
              <p className='text'>Assista ao novo episódios</p>
              <p className='data'>13 de novembro, 2021</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Proximo
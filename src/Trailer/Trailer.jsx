import './Trailer.scss'

import arcane from '../img/arcane.svg'

const Trailer = () => {
  return (
    <section className='Trailer'>
      <a href="https://www.youtube.com/watch?v=3MB3OK3Xnvs" target="_blank">
      <div className='img'>
        <img className='arcane-img' src={arcane} alt="#" />
      </div>
      <div className='button'>
        <button>Assita ao Trailer</button>
      </div>
      </a>
    </section>
  )
}

export default Trailer
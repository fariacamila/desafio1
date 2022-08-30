import './Trailer.scss'

import arcane from '../img/arcane.svg'

const Trailer = () => {
  return (
    <section className='Trailer'>
      <div className='img'>
        <img className='arcane-img' src={arcane} alt="#" />
      </div>
      <div className='button'>
        <button>Assita ao trailer</button>
      </div>
    </section>
  )
}

export default Trailer
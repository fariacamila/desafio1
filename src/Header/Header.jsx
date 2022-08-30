import riot from '../img/riot games.svg'
import lol from '../img/league of legends.svg'
import netflix from '../img/netflix.svg'

import './Header.scss'

const Header = () => {
  return (
    <header className='Header'>
      <div className='img'>
        <img className='riot' src={riot} alt="#" />
        <img className='lol' src={lol} alt="#" />
      </div>
      <div className='img'>
        <img className='netflix' src={netflix} alt="#" />
      </div>
    </header>
  )
}

export default Header
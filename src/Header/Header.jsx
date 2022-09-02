import riot from '../img/riot games.svg'
import lol from '../img/league of legends.svg'
import netflix from '../img/netflix.svg'

import './Header.scss'

const Header = () => {
  return (
    <header className='Header'>
      <div className='img'>
        <a href="https://www.riotgames.com/pt-br/not%C3%ADcias/boas-vindas-ao-riotx-arcane" target="_blank">
          <img className='riot' src={riot} alt="#" />
        </a>
        <a href="https://arcane.com/pt-br/" target="_blank">
          <img className='lol' src={lol} alt="#" />
        </a>
      </div>
      <div className='img'>
        <a href="https://www.netflix.com/browse" target="_blank">
          <img className='netflix' src={netflix} alt="#" />
        </a>
      </div>
    </header>
  )
}

export default Header
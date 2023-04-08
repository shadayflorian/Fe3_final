import React from 'react'
import { useThemeContext } from '../context/GlobalContext';

const Footer = () => {
  
  return (
    <footer >
      <div>
        <p className='powered'>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' className='logo-dh'/>
      </div>
      <div >
        <ul className='redes-sociales'>
          <li><img src="./images/ico-facebook.png" alt="facebook" /></li>
          <li><img src="./images/ico-instagram.png" alt="instagram" /></li>
          <li><img src="./images/ico-tiktok.png" alt="tiktok" /></li>
          <li><img src="./images/ico-whatsapp.png" alt="whatsapp" /></li>
        </ul>
      </div>
    </footer>)
}

export default Footer

import React from 'react'
import '../footer/footer.scss'
import img01 from '../../img/icons/vk.svg'
import img02 from '../../img/icons/twitter.svg'
import img03 from '../../img/icons/instagram.svg'
import img04 from '../../img/icons/linkedIn.svg'
import img05 from '../../img/icons/gitHub.svg'


const Footer = () => {
  return (
    <footer>
    <div className="footer__container container">
    <div className="footer__icons">
            <a href="/#" className="footer__icon">
                <img src={img01} alt="" />
            </a>
            <a href="/#" className="footer__icon">
                <img src={img02} alt="" />
            </a>
            <a href="/#" className="footer__icon">
                <img src={img03} alt="" />
            </a>
            <a href="/#" className="footer__icon">
                <img src={img04} alt="" />
            </a>
            <a href="/#" className="footer__icon">
                <img src={img05} alt="" />
            </a>
        </div>
        <p className="footer__copyright">
        © 2022 frontend-dev.com
        </p>
    </div>
       
    </footer>
  )
}

export default Footer
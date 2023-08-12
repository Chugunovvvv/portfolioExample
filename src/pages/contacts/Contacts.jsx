import React from 'react'
import '../contacts/contacts.scss'


const Contacts = () => {
  return (
    <div className="me">
    <div class="me__container container">
                    <h3 class="me__title title">Contacts</h3>
                    <div class="me__blocks">
                        <div class="me__name">Location</div>
                        <p class="me__text">Moscow, Russia</p>
                    </div>
                    <div class="me__blocks">
                        <div class="me__name">Telegram / WhatsApp</div>
                        <a href="tel:79051234567" class="me__text">+7 (905) 123-45-67</a>
                    </div>
                    <div class="me__blocks">
                        <div class="me__name">Email</div>
                        <a href="mailto:webdev@protonmail.com" class="me__text">webdev@protonmail.com</a>
                    </div>
                </div>
    </div>
    
  )
}

export default Contacts
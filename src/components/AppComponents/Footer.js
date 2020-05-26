import React from 'react';
import Twitter from '../../Media/twitter.svg';
import Facebook from '../../Media/fb.svg';
import Instagram from '../../Media/instagram.svg';
import Mail from '../../Media/mail.svg';
import Location from '../../Media/placeholder.svg';
import Phone from '../../Media/phone.svg';
import './styles/Footer.css';

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <div className="contact-header">Contact</div>

                <div id="contact" className="footer-content">
        
                <div className="contact-info">
                    <div className="contacts">
                        <img src={Mail} alt="mail" />
                        <div className="cnt-info">sclinic@gmail.com</div>
                    </div>
                    <div className="contacts">
                        <img src={Location} alt="location" />
                        <div className="cnt-info">Bulevar Kulina bana</div>
                    </div>
                    <div className="contacts">
                        <img src={Phone} alt="phone" />
                        <div className="cnt-info">+38733255772</div>
                    </div>
                </div>


                <div className="social-media">
                    <div className="soc-media">Social Media</div>
                    <div className="contact-icons">
                        
                        <img className="cnt" src={Twitter} alt="twitter" />
                        <img className="cnt" src={Facebook} alt="facebook" />
                        <img className="cnt" src={Instagram} alt="instagram" />
                    </div>
                </div>
            </div>

<div className="copy-right">
    &copy; 2020 Smart Clinic
</div>
            </div>
        );
    };
};

export default Footer;
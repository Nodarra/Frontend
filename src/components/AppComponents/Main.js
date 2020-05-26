import React from 'react';
import './styles/Main.css';
import Logo from '../../Media/NMK_logotip.svg';
import AppointmentBtn from '../AppComponents/AppointmentBtn';
import About from '../AppComponents/About';
import Services from '../AppComponents/Services';
import Catalogue from '../AppComponents/Catalogue';


class Main extends React.Component {
    renderLogo(){
        return(
            <div className="logo-back-div">
                 <img className="logo-back" src={Logo} alt="Logo"></img>
            </div>
        );
    };

    render(){
        return (
                <div className="main">
                    <AppointmentBtn />
                    <About />
                    <Services />
                    <Catalogue />
                    {this.renderLogo()}
                </div>
        );
    };
};

export default Main;
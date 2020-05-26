import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollTo } from 'react-scroll-to';
import Logo from '../../Media/NMK_logotip.svg';
import Heart from '../../Media/calendar.svg';
import Return from '../../Media/return.svg';
import './styles/Header.css';

class Header extends React.Component {
    state = { appointment: false};

    renderButton(){
        if(this.state.appointment === false){
            return (
                <Link to="/form" className="nav-link-btn">
                    <div onClick={this.isAppointed} className="appo">
                        <div className="appo-txt">Make an appointment</div>
                        <img src={Heart} alt="App"></img>
                    </div>
                </Link>
            );
        }else if(this.state.appointment === true){
            return (
                <Link to="/" className="nav-link-btn">
                    <div onClick={this.isNotAppointed} className="appo">
                        <div className="appo-txt">Back</div>
                        <img src={Return} alt="Return"></img>
                    </div>
                </Link>
            );
        };
    };

    isAppointed = () => {
        this.setState({appointment: true});
    }

    isNotAppointed = () => {
        this.setState({appointment: false});
    }

    renderNavLinks() {
        if(this.state.appointment === false){
            return(
                <div className="nav-links">
                    <ScrollTo>
                        {({ scroll }) => (
                        <a onClick={() => scroll({ x: 0, y: 0 })} className="nav-link nav-btn">About</a>
                        )}
                    </ScrollTo>
                    <ScrollTo>
                        {({ scroll }) => (
                        <a onClick={() => scroll({ x: 0, y: 450 })} className="nav-link nav-btn">Services</a>
                        )}
                    </ScrollTo>
                    <ScrollTo>
                        {({ scroll }) => (
                        <a onClick={() => scroll({ x: 0, y: 850 })} className="nav-link nav-btn">Catalogue</a>
                        )}
                    </ScrollTo>
                    <ScrollTo>
                        {({ scroll }) => (
                        <a onClick={() => scroll({ x: 0, y: 1200 })} className="nav-link nav-btn">Contact</a>
                        )}
                    </ScrollTo>
                </div>
            )
        }else if(this.state.appointment === true){
            return(
                <div className="nav-links">

                </div>
            )
        }
    }

    render(){
        return(
            <div className="header">
                <Link className="logo-link" to="/" onClick={this.isNotAppointed}>
                    <div className="logo-container">
                        <img className="logo" src={Logo} alt="Logo"></img>
                        <h3 className="main-header">Smart Clinic</h3>
                    </div>
                </Link>
                
                {this.renderNavLinks()}
            
                <div className="cart">
                    {this.renderButton()}
                </div>
            </div>
        );
    };
};

export default Header
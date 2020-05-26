import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AppointmentBtn.css';

class AppointmentBtn extends React.Component {
    state = { appo: window.location.href};

    renderButton(){
        if(this.state.appo === 'http://localhost:3000/'){
            return (
                <Link to="/form" className="appo-btn">
                    <div onClick={this.isAppointed} className="appo-div">
                        <div className="appo-text">Make an appointment</div>
                    </div>
                </Link>
            );
        }else if(this.state.appo === 'http://localhost:3000/form'){
            return (
                <Link to="/" className="appo-btn">
                    <div onClick={this.isNotAppointed} className="appo-div">
                        <div className="appo-text">Back</div>
                    </div>
                </Link>
            );
        };
    };

    render(){
        return (
            <div className="appo-container">
                {this.renderButton()}
            </div>
        )
    }
}

export default AppointmentBtn;
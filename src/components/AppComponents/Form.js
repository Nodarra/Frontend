import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { createAppointment } from '../../Actions';

import AppointmentBtn from '../AppComponents/AppointmentBtn';
import Logo from '../../Media/NMK_logotip.svg';
import './styles/Form.css';

class Form extends React.Component {
    renderInput = ({input, label, meta}) => {
        return(
            <div className="inputBox">
                <input {...input} className="input" required="required" autoComplete="off"></input>
                <span className="text">{label}</span>
                <span className="line"></span>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createAppointment(formValues);

        this.props.reset();
    }

    renderForm(){
        return(
            <form className="forma" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="contact-us-form">
                    <div className="container">
                        <div className="contact-us">Contact Us</div>
                        <div className="row100">
                            <div className="col">
                                <Field name="name" component={this.renderInput} label="First Name" /> 
                            </div>

                            <div className="col">
                                <Field name="surname" component={this.renderInput} label="Last Name" />
                            </div>
                        </div>

                        <div className="row100">
                            <div className="col">
                                <Field name="email" component={this.renderInput} label="Email" />
                            </div>

                            <div className="col">
                                <Field name="mobile" component={this.renderInput} label="Phone Number"/>
                            </div>
                        </div>

                        <div className="row100">
                            <div className="col">
                                <Field name="reason" component={this.renderInput} label="Reason for Appointment"/>
                            </div>
                        </div>

                        <div className="submit-btn">
                            <div className="col">
                                <button className="btn" type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    };

    renderLogo(){
        return(
            <div className="logo-back-div">
                 <img className="logo-back" src={Logo} alt="Logo"></img>
            </div>
        );
    };

    render(){
        return(
            <div className="form">
                <AppointmentBtn />
                {this.renderForm()}
                {this.renderLogo()}
            </div>
        );
    };
};

export default connect(null, { createAppointment })(reduxForm({
    form: 'appCreate'
})(Form));
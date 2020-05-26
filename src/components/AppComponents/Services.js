import React from 'react';
import './styles/Services.css';
import Medication from '../../Media/medicine.png';
import Nurse from '../../Media/nurse.png';
import Pills from '../../Media/pills.png';
import Hospital from '../../Media/hospital.png';
import Vial from '../../Media/vial.png';
import Blood from '../../Media/blood-drop.png';


class Services extends React.Component {
    renderService(icon, header, description){
        return(
            <div className="ser">
                <div className="ser-icon">
                    <img className="icon" src={icon} alt=""/>
                </div>
                <div className="ser-text">
                    <div className="ser-text-header">{header}</div>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
        );
    };

    render(){
        return(
            <div className="services" id="services">
                <div className="text-header">Services</div>

                <div className="grid-ser">
                    {this.renderService(Pills, "Medication", "Our clinic offers you uniqe exeriance and medication that will change your life")}
                    {this.renderService(Nurse, "Nursing", "You can be taken care of for the rest of your life in our clinic")}
                    {this.renderService(Medication, "Medicine", "Our staff is highly trained in order to give you the best possible experiance")}
                    {this.renderService(Hospital, "Clinic", "Our clinic is equiped with modern technologies like no other clinic")}
                    {this.renderService(Vial, "Vaccination", "If you are behind on your vaccines you can easily get your shot in onur clinic")}
                    {this.renderService(Blood, "Donation", "If you are feeling generous you can come to our clinic and save three lives")}
                </div>
            </div>
        );
    };
};

export default Services;
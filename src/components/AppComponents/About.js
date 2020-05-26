import React from 'react';
import './styles/About.css';

class About extends React.Component {
    render(){
        return(
            <div className="about" id="about">
                <div className="text-header">About Us</div>
                <div className="intro-text">  
                    <div className="text-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                    </div>
                    <div className="text-2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                    </div>
                </div>
            </div>
        );
    }; 
};

export default About;
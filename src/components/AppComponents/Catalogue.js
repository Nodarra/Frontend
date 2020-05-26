import React from 'react';
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent 
} from 'react-collapsible-component';
import './styles/Catalogue.css';

class Catalogue extends React.Component {
    createOffers(description = [], price = []){
        let offers = [];
        for(let i = 0; i < description.length; i++){
            offers.push(
                <div className="offers">
                    <div className="offer-des">
                        {description[i]}
                    </div>
                    <div className="price">
                        {price[i]}
                    </div>                               
                </div>
            )
        }
        return offers
    }

    render(){
        return(
            <div className="catalogue" ref="catalogue">
                <div className="text-header">Catalogue</div>

                <CollapsibleComponent>
                    <div className="catalogue-btn">
                        <CollapsibleHead className="collapsible">
                            General Medicine
                        </CollapsibleHead>
                        <CollapsibleContent className="coll-content">
                            {this.createOffers(["Examination", "Control", "Consultation"], ["40$", "30$", "20$"])}
                        </CollapsibleContent>
                    </div>
                    <div className="catalogue-btn">
                        <CollapsibleHead className="collapsible">
                            Laboratory Diagnostic
                        </CollapsibleHead>
                        <CollapsibleContent className="coll-content">
                            {this.createOffers(["Blood test", "Urine test"], ["20$", "20$"])}
                        </CollapsibleContent>
                    </div>
 
                    <div className="catalogue-btn">
                        <CollapsibleHead className="collapsible">
                            Surgery
                        </CollapsibleHead>
                        <CollapsibleContent className="coll-content">
                            {this.createOffers(["Plastic surgery", "Bypass", "Inplant"], ["5000$", "1000$", "3000$"])}
                        </CollapsibleContent>
                    </div>

                    <div className="catalogue-btn">
                        <CollapsibleHead className="collapsible">
                            Advance Examination
                        </CollapsibleHead>
                        <CollapsibleContent className="coll-content">
                            {this.createOffers(["MRI", "CT", "EKG"], ["500$", "500$", "100$"])}
                        </CollapsibleContent>
                    </div>
                </CollapsibleComponent>
            </div>
        );
    };
};

export default Catalogue;
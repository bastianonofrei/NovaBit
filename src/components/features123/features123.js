import React from "react";
import './features123.scss';



export default function Features123(){
    return(
        <><div className="features_names">
            <div className="feature_name"><h2>High-Fidelity</h2></div>
            <div className="feature_name"><h2>High-Power</h2></div>
            <div className="feature_name"><h2>High-Efficiency</h2></div>
        </div>
        
        <div className="features_picture">
                <div className="pictures"><img src={require('./loud-speaker.png')} alt="High-Fidelity" /></div>
                <div className="pictures"><img src={require('./fuse-box.png')} alt="High-Power" /></div>
                <div className="pictures"><img src={require('./renewable-energy.png')} alt="Efficient" /></div>
            </div></>
    )
}
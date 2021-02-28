import '../css/App.css';
import React from 'react';
import TreatmentsData from "../json/TreatmentsData.json";

class Treatments extends React.Component {
    render() {
        return (
            // Box-container
            <div className="wrapper">

                {/*Box 3: Content*/}
                <div className="box box3">
                    <h1>Behandelingen</h1>

                    {/*Geef informatie vanuit json file weer*/}
                    <div className="content treatments">
                        {TreatmentsData.map(post => {
                            return (
                                <>
                                    <div className="behandelingenFotos">
                                        <img className="behandelingFoto" src={post.image} alt={post.name + " afbeelding"} />
                                        {post.title} <br/>
                                        <b>{post.name}: {" "} <span>&#8364;</span></b>
                                        <b>{post.price}</b>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Treatments;

import '../css/App.css';
import React from 'react';
import about_Novi from '../images/about_Novi.png';

class About extends React.Component {
    render() {
        return (
            // box-container
            <div className="wrapper">

                {/*Box 3: Content*/}
                <div className="box box3">

                    <div className="content">
                        <h1>Over mij</h1>
                        Mijn naam is Fide Alassi en als studente heb ik in opdracht van Hogeschool Novi deze opdracht
                        ten behoeve van de leerlijn Front End ontwikkeld.
                        <br/>
                    </div>

                    {/*Foto*/}
                    <img src={about_Novi} alt="beautysalon" width="400" height="200"/>
                </div>

            </div>
        );
    }
}

export default About;

import '../css/App.css';
import React from 'react';
import home_beauty from '../images/home_beauty.jpg';

class Home extends React.Component {
    render() {
        return (
            // Box-container
            <div className="wrapper">

                {/*Box 3: Content*/}
                <div className="box box3">

                    <h1>Welkom</h1>
                    Bij de Beautysalon Novi kunt u terecht voor verschillende uitgebreide behandelingen op het gebied
                    van huidverzorging. <br/>
                    Ook verkopen wij diverse verzorgende producten. Maak een afspraak voor een vrijblijvend
                    gesprek. <br/>
                    Wij kunnen u tijdens de afspraak adivseren aan de hand van huidanalyse en uw wensen.<br/>
                    <br/>
                    {/*Foto*/}
                    <img src={home_beauty} alt="beautysalon"/>

                </div>
            </div>
        );
    }
}


export default Home;

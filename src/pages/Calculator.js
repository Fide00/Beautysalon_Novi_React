import '../css/App.css';
import React from 'react';
import calculator_calculator from "../images/calculator_calculator.png";
import CalculatorForm from "./Calculator-Form";

class Calculator extends React.Component {
    render() {
        return (
            // Box-container
            <div className="wrapper">

                {/*Box 3: Content*/}
                <div className="box box3">

                    <h3>Kassasysteem</h3>
                    {'Vink de gewenste behandelingen en/of producten aan en de eventuele "Vaste klanten korting". Hiervan wordt een totaalbedrag berekend en onderaan de lijst weergegeven.'}
                    <br/>

                    {/*Foto*/}
                    <img src={calculator_calculator} alt="calculator" width="100" height="80"/>

                    {/*Checkboxes met behandelingen en producten*/}
                    <CalculatorForm/>
                </div>

            </div>
        )
    }
}

export default Calculator;

import React, {useState} from 'react';

const {submitHandler} = e => {
    e.preventDefault();
}

function CalculatorForm() {
    const [details, setDetails] = useState({totalePrijs: 0});

    // Functie die aangeroepen wordt bij het aanvinken van een item. Parameter e is hierin het klik event
    const handlePriceChange = e => {
        const itemToegevoegd = e.target.checked;
        const itemPrijs = Number(e.target.value);

        // Als de checkbox is aangevinkt, dan totale prijs verhogen, anders verlagen
        if (itemToegevoegd) {
            setDetails({totalePrijs: details.totalePrijs += itemPrijs})
        } else {
            setDetails ({totalePrijs: details.totalePrijs -= itemPrijs})
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <h4>Gezichtsbehandeling</h4>
            <div className="form-group">
                {/*onChange wordt aangeroepen als de item wordt aangevinkt. Hierin wordt de handlePriceChange functie aangeroepen om de totale prijs te veranderen.*/}
                <input type="checkbox" name="item" id="beh1" onChange={handlePriceChange} value="10"/>
                <label htmlFor="beh1"> Gezichtsreiniging €10: </label>
            </div>
            <div className="form-group">
                <input type="checkbox" name="item" id="beh2" onChange={handlePriceChange} value="20"/>
                <label htmlFor="beh2"> Gezichtspeeling €20: </label>
            </div>
            <div className="form-group">
                <input type="checkbox" name="item" id="beh3" onChange={handlePriceChange} value="15"/>
                <label htmlFor="beh3"> Gezichtsmasker €15: </label>
            </div>

            <h4>Verven</h4>
            <div className="form-group">
                <input type="checkbox" name="item" id="beh4" onChange={handlePriceChange} value="12"/>
                <label htmlFor="beh4"> Verven wimpers €12: </label>
            </div>
            <div className="form-group">
                <input type="checkbox" name="item" id="beh5" onChange={handlePriceChange} value="12"/>
                <label htmlFor="beh5"> Verven wenkbrauwen €12: </label>
            </div>
            <div className="form-group">
                <input type="checkbox" name="item" id="beh6" onChange={handlePriceChange} value="18"/>
                <label htmlFor="beh6"> Verven wimpers en wenkbrauwen €18: </label>
            </div>
            <h4>Producten</h4>
            <div className="form-group">
                <input type="checkbox" name="item" id="prod1" onChange={handlePriceChange} value="25"/>
                <label htmlFor="prod1"> Hyaluronic Acid 2% €25: </label>
            </div>
            <div className="form-group">
                <input type="checkbox" name="item" id="prod2" onChange={handlePriceChange} value="33"/>
                <label htmlFor="prod2"> Dag- en nachtcreme Vitamine E €33: </label>
            </div>
            <h4>Korting</h4>
            <div className="form-group">
                <input type="checkbox" name="item" id="prod3" onChange={handlePriceChange} value="-5"/>
                <label htmlFor="prod3"> Vaste klanten korting -€5: </label>
            </div><br/>
            <div className="form-group">
                <label htmlFor="price1"> <h3><b>Totaalprijs:</b></h3></label>
                <input type="text" name="item" id="price1" value={details.totalePrijs} disabled={true}/>
            </div>
        </form>
    )
}

export default CalculatorForm;

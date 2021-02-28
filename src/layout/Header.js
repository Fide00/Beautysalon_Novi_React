import '../css/App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';


function Header() {
    // Uitlog functie
    const Logout = () => {
        // Verwijder de account data uit de local storage
        localStorage.removeItem("account");

        // Herlaad de pagina
        window.location.reload();
    }

    return (
        <nav>
            <ul className="NavbarLinks">
                {/*Navigatie: logo*/}
                <img src={Logo} alt="Logo"/>

                <Link to='/home'>
                    <li>Startpagina</li>
                </Link>

                <Link to='/about'>
                    <li>Over mij</li>
                </Link>

                <Link to='/treatments'>
                    <li>Behandelingen</li>
                </Link>

                <Link to='/contact'>
                    <li>Contact</li>
                </Link>

                {/* Als er ingelogd is, dan kassa tonen en anders niet */}
                { localStorage.getItem('account') ?
                    <Link to='/calculator'>
                        <li>Kassa</li>
                    </Link>
                     :
                    null
                }

                {/* Als er ingelogd is, dan uitloggen tonen en anders inloggen */}
                { localStorage.getItem('account') ?
                    <li onClick={Logout}>Uitloggen</li>
                    :
                    <Link to='/login'>
                        <li>Inloggen</li>
                    </Link>
                }
            </ul>

            {/*Box-container*/}
            <div className="wrapper">

                {/*Box 1: Header left: Welkom*/}
                <div className="box box1">
                        <h1> Welkom bij Beautysalon Novi </h1>
                        <h3>Uw adres voor professionele schoonheidsbehandelingen!</h3>
                </div>

                {/*Box 2: Header right: Afspraak*/}
                <div className="box box2">
                    <h3>Afspraak maken</h3>
                        <button type="button">Afspraak</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;


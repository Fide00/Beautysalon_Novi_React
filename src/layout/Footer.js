import '../css/App.css';
import React from 'react';
import ContactAdress from "../json/ContactAdress.json";
import ContactOpenHours from "../json/ContactOpenHours.json";

function Footer() {
    return (
        <div className="App">
            {/*Box-container*/}
            <div className="wrapper">

                {/*Box 4: footer adres*/}
                <div className="box box4">
                    <h3>Adres</h3>
                    <div className="content">
                        {ContactAdress.map(post => {
                            return (
                                <>
                                    {post.straat} {" "}<br/>
                                    {post.postcode} {" "}<br/>
                                    {post.plaats} {" "}<br/>
                                    {post.telefoon} {" "}<br/>
                                </>
                            )
                        })}
                    </div>
                </div>

                {/*Box 5: footer: openingstijden*/}
                <div className="box box5">
                    <div className="content">
                        <h3>Openingstijden</h3>
                        {ContactOpenHours.map(post => {
                            return (
                                <>
                                    {post.day}: {" "}
                                    {post.time} <br/>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

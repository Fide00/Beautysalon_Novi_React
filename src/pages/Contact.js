import '../css/App.css';
import React from 'react';
import ContactAdress from "../json/ContactAdress.json";
import ContactOpenHours from "../json/ContactOpenHours.json";
import GoogleMapReact from 'google-map-react';

class Contact extends React.Component {
    static defaultProps = {
        center: {
            lat: 52.117471,
            lng: 5.039224
        },
        zoom: 17
    };

    render() {
        return (
            // Box-container
            <div className="wrapper">

                {/*Box 3: Content*/}
                <div className="box box3">
                    <h3>Contact</h3>

                    {/*Adresgegevens vanuit json file "ContactAdress" worden hier getoond*/}
                    <div className="content">
                        {ContactAdress.map(post => {
                            return (
                                <>
                                    {/*content informatie*/}
                                    <p>{post.content} <br/></p>

                                    {/*Adress informatie*/}
                                    <h3>Adres</h3>
                                    {post.straat} {" "}<br/>
                                    {post.postcode} {" "}<br/>
                                    {post.plaats} {" "}<br/>
                                    {post.telefoon} {" "}<br/>
                                </>
                            )
                        })}
                    </div>

                    {/*Openingstijden vanuit json file "ContactOpenHours" worden hier getoond*/}
                    <h3>Openingstijden</h3>
                    <div className="content">
                        {ContactOpenHours.map(post => {
                            return (
                                <>
                                    {post.day}: {" "}
                                    {post.time} <br/>
                                </>
                            )
                        })}
                    </div>
                    <br/>

                    {/*Google Maps*/}
                    <div className="contactGoogleMap">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBiTjNq8KXagMFK154wfdEHO7sp2P_VC94" }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

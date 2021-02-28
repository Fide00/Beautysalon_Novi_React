import React from 'react';
import './css/App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import  {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <Switch>
                    {/*Open bij het opstarten van de site direct de startpagina */}
                    <Route path="/" exact component={Home} />

                    {/*Navigeer naar de volgende pagina's*/}
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/treatments" component={Treatments}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" component={Login}/>

                    {/*Een private route voor calculator/kassasysteem, enkel toegankelijk voor ingelogde gebruikers's*/}
                    <AuthenticatedRoute path="/calculator" component={Calculator}/>
                </Switch>

                <Footer />
            </div>
        </Router>
  );


    // Een wrapper voor <Route> dat je naar de homepagina redirect als je niet ingelogd bent.
    function AuthenticatedRoute({ component: Component, ...rest }) {
        const isLoggedIn = localStorage.getItem("account");

        return (
            <Route
                {...rest}
                render={props =>
                    isLoggedIn ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            />
        )
    }
}

export default App;

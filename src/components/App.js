import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './AppComponents/Header';
import Main from './AppComponents/Main';
import Footer from './AppComponents/Footer';
import Form from './AppComponents/Form';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={Main}></Route>
                        <Route path="/form" exact component={Form}></Route>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;
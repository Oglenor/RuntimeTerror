import React, {useState} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {FetchData} from './components/FetchData';
import {Counter} from './components/Counter';

import './custom.css'
import {Login} from "./components/Login";

export default function App() {

    let [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <> {
            !isLoggedIn && <Login onLogin={setIsLoggedIn}/>
        }
            {
                isLoggedIn && <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/fetch-data' component={FetchData}/>
                </Layout>
            }
        </>);
}

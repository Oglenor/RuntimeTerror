import React, {useState} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout/Layout';
import {Home} from './components/Home/Home';
import {FetchData} from './components/FetchData';
import {Upload} from './components/Upload/Upload';
import {Profile} from "./components/Profile/Profile";

import './custom.css'
import {Login} from "./components/Login/Login";

export default function App() {

    let [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <> {
            !isLoggedIn && <Login onLogin={setIsLoggedIn}/>
        }
            {
                isLoggedIn && <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route path='/upload' component={Upload}/>
                    <Route path='/fetch-data' component={FetchData}/>
                    <Route path='/profile' component={Profile} />
                </Layout>
            }
        </>);
}

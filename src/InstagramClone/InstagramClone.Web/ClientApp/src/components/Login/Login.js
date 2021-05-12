import React from 'react'
import './Login.css'
import logo from '../../assets/images/logo-horizontal.png'
import { Button, Card, CardText, CardTitle, CardImg } from 'reactstrap'
import axios from "axios";

export const Login = (props) => {
    return (
        <div className="login-wrapper">
            <div className="login-wrapper__overlay" />
            <Card body className="card-login text-center">
                <CardImg top className="card-login__logo" src={logo} alt="Card image cap" />
                <CardTitle tag="h5">Üdvözlünk az ImageHubon</CardTitle>
                <CardText>A folytatáshoz be kell jelentkezned a Facebook profiloddal</CardText>
                <Button color="primary" onClick={() => login()}>
                    Bejelentkezés Facebookkal</Button>
            </Card>
        </div>)

    async function login() {
        //await axios.get('https://localhost:5001/api/Auth/signin/', { headers: { "Access-Control-Allow-Origin": "*" } });
        fetch('https://localhost:5001/api/Auth/signin/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            console.log(data);
        })
    }
}

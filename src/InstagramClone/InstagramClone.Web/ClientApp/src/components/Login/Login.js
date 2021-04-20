import React from 'react'
import './Login.css'
import logo from '../../assets/images/logo-horizontal.png'
import {Button, Card, CardText, CardTitle, CardImg} from 'reactstrap'
import axios from "axios";

export const Login = (props) => {
    return (
        <div className="login-wrapper">
            <div className="login-wrapper__overlay"/>
            <Card body className="card-login text-center">
                <CardImg top className="card-login__logo" src={logo} alt="Card image cap"/>
                <CardTitle tag="h5">Üdvözlünk az ImageHubon</CardTitle>
                <CardText>A folytatáshoz be kell jelentkezned a Facebook profiloddal</CardText>
                <Button color="primary" onClick={() => setTimeout(() => { props.onLogin(true) }, 1000)}>
                    Bejelentkezés Facebookkal</Button>
            </Card>
        </div>)
}

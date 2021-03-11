import React from 'react'

export const Login = (props) => {
    return (
        <div>
            <button type='submit' onClick={() => setTimeout(() => props.onLogin(true), 1000)}>Login</button>
        </div>)
}

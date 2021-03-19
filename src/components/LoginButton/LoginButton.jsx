import React from 'react';

import {ReactComponent as Avatar } from './user.svg';

import './LoginButton.css';

function LoginButton() {
    return (
        <div className="login-btn">
            <Avatar className="avatar"/>
        </div>
        
    );
}

export default LoginButton;
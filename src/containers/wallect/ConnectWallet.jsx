import React from 'react';
import { useMoralis } from "react-moralis";
import LoginWallet from '../../components/connect/LoginWallet';
import Profile from '../../components/connect/Profile';

const ConnectWallet = () => {

    const { authenticate, isAuthenticated, isAuthenticating, logout, user } = useMoralis();


    if(isAuthenticated){
        return ( <Profile user={user} logout={logout} /> );
    } else {
        return (<LoginWallet authenticate={authenticate} isAuthenticating={isAuthenticating} />)
    }
}

export default ConnectWallet
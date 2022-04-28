import React from 'react';
import { useMoralis } from "react-moralis";
import LoginWallet from '../../components/connect/LoginWallet';
import MintForm from '../../components/nft/MintForm';

const MintPage = () => {

    const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();


    if(isAuthenticated){
        return (<MintForm />);
    } else {
        return (<LoginWallet authenticate={authenticate} isAuthenticating={isAuthenticating} />)
    }
}

export default MintPage;
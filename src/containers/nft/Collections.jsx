import React from 'react';
import TransactionNft from '../../components/home/TransactionNft';
import { useMoralis } from "react-moralis";
import LoginWallet from '../../components/connect/LoginWallet';

const MyCollections = () => {

    const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();


    if(isAuthenticated){
        return ( <TransactionNft /> );
    } else {
        return (<LoginWallet authenticate={authenticate} isAuthenticating={isAuthenticating} />)
    }
}

export default MyCollections
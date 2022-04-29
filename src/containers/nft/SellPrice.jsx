import React from 'react';
import { useMoralis } from "react-moralis";
import LoginWallet from '../../components/connect/LoginWallet';
import SaleNFT from '../../components/nft/SaleNFT';

const SellPrice = () => {

    const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();


    if(isAuthenticated){
        return ( <SaleNFT /> );
    } else {
        return (<LoginWallet authenticate={authenticate} isAuthenticating={isAuthenticating} />)
    }
}

export default SellPrice
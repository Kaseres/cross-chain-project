import React from 'react';
import { useMoralis } from "react-moralis";
import LoginWallet from '../../components/connect/LoginWallet';
import DetailNFT from '../../components/nft/DetailNFT';

const CollectionDetail = () => {

    const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();


    if(isAuthenticated){
        return ( <DetailNFT /> );
    } else {
        return (<LoginWallet authenticate={authenticate} isAuthenticating={isAuthenticating} />)
    }
}

export default CollectionDetail
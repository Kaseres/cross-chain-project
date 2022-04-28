import React, { useEffect, useState } from 'react';
import Moralis from "moralis";
import { useERC20Balances, useMoralisWeb3Api } from 'react-moralis';
import { Button } from "reakit";
import ProfileImage from '../../images/profileImage.jpg';
import MyTransactions from './MyTransactions';

const Profile = ({user, logout}) => {

    const Web3Api = useMoralisWeb3Api();
    const { fetchERC20Balances, data } = useERC20Balances();
    const [transactions, setTransactions] = useState([]);


    const [ethBalance, setEthBalance] = useState(0);

    const fetchNativeBalance = async() => {
        const result = await Web3Api.account.getNativeBalance({
            chain: "rinkeby",
            address: user.get('ethAddress')
        }).catch(e => console.log(e))

        if(result.balance) {
            setEthBalance(Moralis.Units.FromWei(result.balance))
        }

    }

    const fetchTransactions = async() => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress')
        })
        if(data) {
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchNativeBalance()
        fetchERC20Balances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress')
            }
        })
        fetchTransactions()
    }, [])
    
  return (
    <>
    <div className="flex w-full mx-auto justify-center px-5 py-6">
        <div className="flex container w-full mx-auto justify-center font-bold text-2xl px-5 py-6 bg-gray-300 rounded-lg">
            <div className="rounded overflow-hidden shadow-xl max-w-sm my-3 bg-orange-500 rounded-lg">
                <div className="flex justify-start mt-8 pl-5 pr-5">
                    <img src={ProfileImage} className="rounded-full border-solid border-white border-2" />		
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-white text-sm bold font-sans">Name : {user.getUsername()}</h3>
                    <p className="mt-2 font-sans font-light text-white text-[15px]">Address : {user.get('ethAddress')}</p>
                </div>
                <div className="flex justify-center pb-3 text-white">
                    <div className="text-center">
                        <h2>{ethBalance} ETH</h2>
                        <h2>{data && data.map(token => (
                            <div key={token.symbol}>
                                {Moralis.Units.FromWei(token.balance)} {token.symbol}
                            </div>
                            
                        ))}</h2>
                    </div>
                </div>
                <div className="flex mt-4 mb-8 mx-auto justify-center">
                    <Button className={`inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded-full text-white hover:border-transparent bg-orange-400 hover:bg-orange-500 mt-4 lg:mt-0 cursor-pointer`}
                        onClick={() => logout()}>
                        Logout
                    </Button>
                </div>
            </div>
        </div>
        
    </div>
    <MyTransactions transactions={transactions} />
    </>
  )
}

export default Profile
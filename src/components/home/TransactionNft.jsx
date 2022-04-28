import React from "react";
import { useMoralis } from "react-moralis";

import dummyData from "../../utils/dummyData"

const TransactionsCard = ({ id, chain, message, amount, url, name }) => {

    return (
        <div className="bg-orange-400 mr-4 ml-4 mb-5 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
        >
            <div className="flex flex-col items-center w-full mt-3">
                <img
                    src={url}
                    alt="nature"
                    className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                />
                <div className="bg-orange-500 p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-white font-bold">#{id}</p>
                </div>
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <p className="text-white text-base">Name: {name}</p>
                    <p className="text-white text-base">Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className="text-white text-base">Message: {message}</p>
                        </>
                    )}
                    <p className="text-white text-base">
                        Chain: {chain}
                    </p>
                </div>
            </div>
        </div>
    );
};

const TransactionNft = () => {

    const { isAuthenticated } = useMoralis();

    if(isAuthenticated){
        return (
            <div 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/collection-detail';
                }}
                className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions cursor-pointer"
            >
                <div className="flex flex-col mt-5">
                        <h3 className="text-white text-3xl text-center text-orange-500 font-bold mb-5">
                            My Collection
                        </h3>

                    <div className="flex flex-wrap justify-center items-center">
                        {dummyData.map((transaction, i) => (
                            <TransactionsCard key={i} {...transaction} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
};

export default TransactionNft;

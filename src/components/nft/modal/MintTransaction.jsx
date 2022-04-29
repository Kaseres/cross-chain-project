import React from "react";
import { useMoralis } from "react-moralis";

import dummyData from "../../../utils/dummyData"

const TransactionsCard = ({ id, chain, message, url, name, rarity }) => {

    return (
        <div className="bg-orange-400 mr-4 ml-4 mb-5 flex flex-1 w-1/3 min-h-[300px] max-h-[300px] flex-col p-3 rounded-md hover:shadow-2xl cursor-pointer"
        >
            <div className="flex flex-col items-center w-full mt-3">
                <img
                    src={url}
                    alt="nature"
                    className="w-full rounded-md shadow-lg object-cover"
                />
                <div className="bg-orange-500 p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-white font-bold">#{id}</p>
                </div>
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <p className="text-white text-base">Name: {name}</p>
                    <p className="text-white text-base">Rarity: {rarity}</p>
                </div>
            </div>
        </div>
    );
};

const MintTransaction = () => {

    const { isAuthenticated } = useMoralis();
    
    
const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

    if(isAuthenticated){
        return (
            <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions"
            >
                <div className="flex flex-col mt-5">
                        <h3 className="text-white text-3xl text-center text-orange-500 font-bold mb-10">
                            Mint Success
                        </h3>

                    <div className="flex flex-wrap justify-center items-center">
                        {shuffle(dummyData).slice(0, 3).map((transaction, i) => (
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

export default MintTransaction;

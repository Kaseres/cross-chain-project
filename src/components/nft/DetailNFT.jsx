import React from "react";
import { useMoralis } from "react-moralis";
import { Button } from "reakit";
import TransactionNft from "../home/TransactionNft";

const DetailNFT = () => {

    const { isAuthenticated } = useMoralis();

    if(isAuthenticated){
        return (<>
        <div className="flex flex-col mt-5">
            <h3 className="text-white text-3xl text-center text-orange-500 font-bold mb-5">
                 Collection Detail
            </h3>
         </div>
        <div className="flex mx-auto pb-10">
            <div className="flex container  mx-auto text-xl rounded-lg">
                <div className="w-1/2 rounded rounded-lg m-5 ">
                    <div className="flex justify-start font-bold">
                        <img 
                            src="https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
                            className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                        />
                    </div>
                </div>
                <div className="w-1/2 rounded bg-white rounded-lg m-5">
                    <div className="flex justify-start text-xl justify-center font-bold">
                        Pikachu #583478963
                    </div>
                    <div className="px-3 text-sm text-gray-400 text-center">
                        0xCF8e...6A90
                    </div>
                    <div className="px-3 pb-2 pt-6 ml-5 text-sm text-gray-500">
                        <label class="block text-gray-700 font-bold text-xl mb-2 " for="number">
                            Detail :
                        </label>
                     An AxelarSea sample NFT for Moonbeam testnet (Moonbase alpha). AxelarSea is the First Cross-Chain NFT Marketplace where you can Trade NFTs. Using Any Token. From Any Chain
                    </div>
                    <div className="px-3 pb-2 pt-6 ml-5 text-xl">
                        <span class="text-gray-700 font-bold mb-2 " for="number">
                        Rarity : 
                        </span> SP Legend
                    </div>
                    <div className="pl-3 ml-5 text-xl">
                        <span class="text-gray-700 font-bold mb-2 " for="number">
                            Chain :
                        </span> Ethereum
                    </div>
                    <div className="px-3 pb-6 pt-4 text-center">
                        <Button  
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/nft-sell';
                        }}
                        className={`inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded-full text-white hover:border-transparent bg-orange-400 hover:bg-orange-500 mt-4 lg:mt-0 cursor-pointer`}>
                            Sell
                        </Button>
                    </div>
                </div>
            </div>
        </div>
            <TransactionNft />
        </>);
    } else {
        return (<></>);
    }
};

export default DetailNFT;

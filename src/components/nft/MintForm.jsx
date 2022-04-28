import React from 'react';
import { Input, Button } from "reakit";

const MintForm = () => {

    return (<>
        <div className="flex flex-col mt-5">
            <h3 className="text-white text-3xl text-center text-orange-500 font-bold mb-5">
                 Mint NFT
            </h3>
         </div>
        <div className="flex mx-auto">
            <div className="flex container  mx-auto text-xl rounded-lg">
                <div className="w-1/2 rounded rounded-lg m-5 ">
                    <div className="flex justify-start font-bold">
                        	Condition Mint NFT
                    </div>
                    <div className="text-lg pt-4">
                        Mint simplifies the experience for brands to sell NFTs, launch branded marketplaces, and provide seamless transactions, interactions, and utility for collectors.
                        <br /><br />Mint offers all the tools your brand will need to get up and running quickly
                    </div>
                </div>
                <div className="w-1/2 rounded bg-white rounded-lg m-5">
                    <div className="flex justify-start text-xl justify-center font-bold">
                        Mint Collection
                    </div>
                    <div className="px-3 pb-6 pt-4">
                        <label class="block text-gray-700 text-xl mb-2 " for="number">
                            Number Mint :
                        </label>
                        <Input className=" border rounded w-full py-2 px-3 text-gray-700" placeholder="Number Mint" type="number" />
                    </div>
                    {/* <div className="px-3 pb-6 pt-4">
                        <label class="block text-gray-700 text-xl mb-2" for="name">
                            Chain :
                        </label>
                        <select class="block text-gray-500 appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Ethereum</option>
                            <option>Avalanche</option>
                            <option>Fantom</option>
                            <option>Moonbeam</option>
                            <option>Polygon</option>
                        </select>
                    </div> */}
                    <div className="px-3 pb-6 pt-4 text-center">
                        <div className="text-lg pt-2 pb-5 text-orange-500 font-bold text-center">
                            Mint Cost 0.002 ETH
                        </div>
                        <Button className={`inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded-full text-white hover:border-transparent bg-orange-400 hover:bg-orange-500 mt-4 lg:mt-0 cursor-pointer`}>
                            Mint
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default MintForm;
import React from 'react';
import TransactionNft from '../../components/home/TransactionNft';
import { Button } from "reakit";

import BallImage from '../../images/ballImage.png';

const Welcome = () => {
  return (
    <>
      <div className="flex w-full mx-auto justify-center bg-gradient-to-b from-white to-orange-200">
        <div className="flex container w-full mx-auto justify-center px-5 py-6">
          <div class="w-1/2 sm:w-full pt-[10rem]">
            <div className="font-bold text-5xl">
              First Cross-Chain
            </div>
            <div className="font-bold mt-5 text-transparent text-5xl bg-clip-text bg-gradient-to-t from-orange-400 to-red-600">
              NFT Marketplace
            </div>
            <div className="text-3xl font-bold mt-5 mb-5">
              Discover & Sell NFTs From Any Chain
            </div>
            <div className="text-xl mt-5 mb-5 text-gray-400">
              Trade NFTs Using Any Token From Any Chain
            </div>

            <div className="flex container w-full mx-auto pt-5">
              <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://axelarsea.com/Explore';
                    }}
                className="inline-flex justify-center px-4 py-2 text-xl font-medium text-red-900 bg-orange-100 border border-transparent rounded-full hover:bg-orange-200 border-orange-700">
                  Explore
                </Button>
              <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://axelarsea.com/create-item';
                    }}
                className="inline-flex justify-center px-4 py-2 ml-5 text-xl font-medium text-red-900 bg-orange-100 border border-transparent rounded-full hover:bg-orange-200 border-orange-700">
                  Create
                </Button>
            </div>
        
            <div className="flex container w-full mx-auto px-5 py-6 mt-10">
              <div class="w-1/4 text-center">
                <div className="text-orange-500 text-5xl font-bold">19851</div>
                <div className="text-xl text-bold">Minted</div>
              </div>
              <div class="w-1/4 text-center">
                <div className="text-orange-500 text-5xl font-bold">8949</div>
                <div className="text-xl text-bold">Listed</div>
              </div>
              <div class="w-1/4 text-center">
                <div className="text-orange-500 text-5xl font-bold">4440</div>
                <div className="text-xl text-bold">Wallet</div>
              </div>
              <div class="w-1/4 text-center"></div>
            </div>
          </div>


          <div class="w-1/2 sm:w-full">
            <img src={BallImage} class="w-full h-full animate-pulse" alt="Image alt text" />
          </div>

        </div>
      </div>
    <TransactionNft />
    </>
  )
}

export default Welcome
import React from 'react';
import { Input, Button } from "reakit";
import MintTransaction from './modal/MintTransaction';

const MintForm = () => {
    
    const [showModal, setShowModal] = React.useState(false);

    return (<>
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
                    <div className="px-3 pb-6 pt-4 text-center">
                        <div className="text-lg pt-2 pb-5 text-orange-500 font-bold text-center">
                            Mint Cost 0.002 BNB / Mint
                        </div>
                        <Button onClick={() => setShowModal(true)} className={`inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded-full text-white hover:border-transparent bg-orange-400 hover:bg-orange-500 mt-4 lg:mt-0 cursor-pointer`}>
                            Mint
                        </Button>
                    </div>
                </div>
            </div>
        </div>{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[1300px] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <MintTransaction />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b justify-center">
                  <button
                    className="inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded text-orange-500 hover:text-orange-400 mt-4 ml-2 lg:mt-0 cursor-pointer"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>);
}

export default MintForm;
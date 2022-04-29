import React from "react";
import { useMoralis } from "react-moralis";
import { Input, Button } from "reakit";

const SaleNFT = () => {

    const { isAuthenticated } = useMoralis();
    const [showModal, setShowModal] = React.useState(false);


    if(isAuthenticated){

        
        return (<>
        <div className="flex flex-col mt-5">
            <h3 className="text-white text-3xl text-center text-orange-500 font-bold mb-5">
                 Sale NFT
            </h3>
         </div>
        <div className="flex mx-auto pb-10">
            <div className="flex container mx-auto text-xl rounded-lg">
                <div className="w-1/3 rounded rounded-lg m-5">
                    
                    <div className="rounded overflow-hidden shadow-xl my-3 bg-orange-500 rounded-lg">
                        <div className="flex mt-8 pl-5 pr-5">
                            <img 
                                src="https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
                                className="w-sm rounded-md shadow-lg object-cover justify-center"
                            />	
                        </div>
                        <div className="px-3 pb-6 pt-2">
                            <h3 className="text-white text-sm font-bold text-center">Pikachu #583478963</h3>
                            <p className="mt-2 text-white text-[15px] text-center">Owner : 0xCF8e569A97C423...9A6A90</p>
                        </div>
                    </div>

                </div>
                




                <div className="w-2/3 rounded bg-white rounded-lg m-5">
                    <div className="px-3 ml-5 text-sm text-gray-500">
                        <span className="w-1/4 text-lg mr-5 font-bold">
                            Price :
                        </span>
                        <Input className="w-2/4 border rounded w-full mr-2 py-2 px-3 text-gray-700" placeholder="Number Mint" type="number" />
                        <select className="w-1/4 border rounded w-full ml-2 py-2 px-3 text-gray-700">
                            <option>ETH</option>
                            <option>BUSD</option>
                        </select>
                    </div>
                    <div>
                        <div className="px-3 pb-2 mt-10 ml-5 text-xl text-gray-500">
                            <span class="font-bold mb-2 ">
                            Fees : 
                            </span>
                        </div>
                        <div className="flex px-3 pb-2 ml-5 text-xl text-gray-400 ">
                            <div class="ml-5 w-1/2 font-bold mb-2">
                                Service Fee : 
                            </div> 
                            <div className="w-1/2 mr-20 text-right justify-end">3%</div>
                        </div>
                        <div className="flex px-3 pb-2 ml-5 text-xl text-gray-400">
                            <div class="ml-5 w-1/2 font-bold mb-2">
                                Creator Fee : 
                            </div> 
                            <div className="w-1/2 mr-20 text-right justify-end">10%</div>
                        </div>
                        <hr />
                        <div className="flex px-3 pb-2 ml-5 text-xl mt-5 font-bold text-orange-400">
                            <div class="ml-5 w-1/2 mb-2">
                                You Recieve : 
                            </div> 
                            <div className="w-1/2 mr-20 text-right justify-end">87 ETH</div>
                        </div>
                    </div>
                    <div className="px-3 pb-6 pt-4 text-center">
                        <Button onClick={() => setShowModal(true)} className={`inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded-full text-white hover:border-transparent bg-orange-400 hover:bg-orange-500 mt-4 lg:mt-0 cursor-pointer`}>
                            Confirm Sell
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Are you sure ?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Text Confirm Sell NFT
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b justify-center">
                  <button
                    className="inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded text-white hover:border-transparent bg-orange-400 hover:bg-orange-500 mt-4 mr-2 lg:mt-0 cursor-pointer"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm
                  </button>
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
    } else {
        return (<></>);
    }
};

export default SaleNFT;

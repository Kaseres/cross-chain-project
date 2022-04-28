import React from 'react';
import { Button } from "reakit";

const LoginWallet = ({authenticate}) => {
  return (
    <>
    <div className="w-full mx-auto justify-center px-5 py-6">
          <div className="text-white text-3xl text-center text-orange-500 font-bold mb-5">
              Welcome to Cross Chain Project
          </div>
          <div className="flex container w-full mx-auto justify-center font-bold text-2xl px-5 py-6">
          <Button className={`inline-block text-xl px-4 py-2 pr-20 pl-20 leading-none border rounded-full text-white hover:border-transparent bg-orange-400 hover:bg-orange-500 mt-4 lg:mt-0 cursor-pointer`}
              onClick={() => authenticate()}>
              Connect Wallet
          </Button>
          </div>
    </div>

    </>
  )
}

export default LoginWallet
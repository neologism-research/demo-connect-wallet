"use client";
import ConnectWalletButton from "@/components/buttons/ConnectWallet.button";
import { motion } from "framer-motion";

import { useCounter } from "@uidotdev/usehooks";
import { useAccount } from "wagmi";

import useSound from "use-sound";

export default function Home() {
  const account = useAccount();
  const [play] = useSound("/pop.mp3");

  const [count, { increment }] = useCounter(0, {});

  return (
    <main className="flex flex-col items-center justify-center text-uppercase text-center h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-[50px] leading-[50px] md:text-[100px] md:leading-[80px] font-amazing-views ">
          <span className="text-green-800"></span>
          <br />
          CONNECT WALLET DEMO
          <br />
        </h1>
        <div className="flex flex-col gap-y-2 w-full items-center mt-2">
          <ConnectWalletButton />
        </div>
      </motion.div>
      {account.isConnected && (
        <motion.div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => {
              increment();
              // play the sound
              play();
            }}
            className="bg-white p-2 text-black bg-[url('/popcat-default.png')] bg-cover min-h-44 min-w-44 active:bg-[url('/popcat-clicked.png')]"
          ></button>
          <div className="text-pink-400 p-2">YOU CLICKED: {count}</div>
        </motion.div>
      )}
    </main>
  );
}

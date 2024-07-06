"use client";
import ConnectWalletButton from "@/components/buttons/ConnectWallet.button";
import { motion } from "framer-motion";

import { useCounter } from "@uidotdev/usehooks";
import { useAccount } from "wagmi";

export default function Home() {
  const account = useAccount();

  const [count, { increment, decrement, set, reset }] = useCounter(0, {});

  return (
    <main className="flex flex-col items-center justify-center text-uppercase text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="flex flex-col gap-2 h-[calc(100vh-72px)]  items-center justify-center">
        <h1 className="text-[50px] leading-[50px] md:text-[100px] md:leading-[80px] font-amazing-views ">
          <span className="text-green-800">Neologism</span>
          <br />
          CONNECT WALLET DEMO
          <br />
        </h1>
        <div className="flex flex-col gap-y-2 w-full items-center mt-2">
          <ConnectWalletButton />
        </div>
      </motion.div>
      {account.isConnected && (
        <motion.div className="grid grid-cols-3 gap-4" initial={{ opacity: 0, translateY: 0 }} animate={{ opacity: 1, translateY: -300 }} transition={{ duration: 1.5 }}>
          <button onClick={increment} className="bg-white p-2 text-black">
            +1
          </button>
          <div className="text-pink-400 p-2">Counter: {count}</div>
          <button onClick={decrement} className="bg-white p-2 text-black">
            -1
          </button>
        </motion.div>
      )}
    </main>
  );
}

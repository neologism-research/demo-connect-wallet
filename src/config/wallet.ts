import { connectorsForWallets, darkTheme, Theme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { http } from "wagmi";
import { mainnet } from "wagmi/chains";

import { chain } from "@/constants/chain.constant";
import { coinbaseWallet, metaMaskWallet, okxWallet, rabbyWallet, walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";
import { createConfig } from "wagmi";

export const walletTheme = darkTheme({
  accentColor: "#EAA6C7",
  borderRadius: "small"
}) satisfies Theme;

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, rabbyWallet, walletConnectWallet, coinbaseWallet, okxWallet]
    }
  ],
  {
    appName: "neologism-connect-wallet-demo",
    projectId: "2df8087c272410a132b6916118fc09de"
  }
);

export const config = createConfig({
  connectors,
  chains: [chain],
  ssr: true,
  transports: {
    [mainnet.id]: http("https://eth.llamarpc.com")
  }
});

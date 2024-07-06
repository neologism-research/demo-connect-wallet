"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

function ConnectWalletButton() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none"
              }
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button className="relative px-6 py-3 bg-pink-400 text-white font-semibold text-sm hover:opacity-80" onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className="relative px-6 py-3 text-white font-semibold text-sm hover:opacity-80">
                    Wrong network
                  </button>
                );
              }

              return (
                <button onClick={openAccountModal} type="button" className="relative px-6 py-3 text-white font-semibold text-sm hover:opacity-80">
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default ConnectWalletButton;

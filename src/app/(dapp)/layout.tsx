"use client";

import { Toaster } from "@/components/ui/toaster";
import { config, walletTheme } from "@/config/wallet";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
const queryClient = new QueryClient();

export default function dAppLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={walletTheme}>
          <div className="container flex flex-col justify-between min-h-screen">
            {children}
            <Toaster />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

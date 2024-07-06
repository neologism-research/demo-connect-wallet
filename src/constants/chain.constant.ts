import type { Chain } from "viem/chains";
import { mainnet } from "viem/chains";

import { Env } from "@/types/env.type";

type ChainWithEnv = Record<Env, Chain>;

const Chain: ChainWithEnv = {
  [Env.DEV]: mainnet,
  [Env.UAT]: mainnet,
  [Env.PROD]: mainnet
};

const chain = Chain[process.env.ENV ?? process.env.NEXT_PUBLIC_ENV];

export { chain };

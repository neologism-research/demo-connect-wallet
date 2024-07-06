import invariant from "tiny-invariant";
import { Address, Hex, isAddress, isHex } from "viem";
import z from "zod";

const zAddress = z.custom<Address>((value) => {
  invariant(isAddress(value), "Invalid address");
  return value;
});

const zHex = z.custom<Hex>((value) => {
  invariant(isHex(value), "Invalid address");
  return value;
});

export { zAddress, zHex };

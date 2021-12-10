// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateRide } from "./types/drife/ride";
import { MsgEndRide } from "./types/drife/ride";
import { MsgUpdateCounterquote } from "./types/drife/tx";
import { MsgCounterQuote } from "./types/drife/ride";
import { MsgAcceptRide } from "./types/drife/ride";
import { MsgDeleteCounterquote } from "./types/drife/tx";
import { MsgCreateCounterquote } from "./types/drife/tx";


const types = [
  ["/example.drife.drife.MsgCreateRide", MsgCreateRide],
  ["/example.drife.drife.MsgEndRide", MsgEndRide],
  ["/example.drife.drife.MsgUpdateCounterquote", MsgUpdateCounterquote],
  ["/example.drife.drife.MsgCounterQuote", MsgCounterQuote],
  ["/example.drife.drife.MsgAcceptRide", MsgAcceptRide],
  ["/example.drife.drife.MsgDeleteCounterquote", MsgDeleteCounterquote],
  ["/example.drife.drife.MsgCreateCounterquote", MsgCreateCounterquote],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateRide: (data: MsgCreateRide): EncodeObject => ({ typeUrl: "/example.drife.drife.MsgCreateRide", value: data }),
    msgEndRide: (data: MsgEndRide): EncodeObject => ({ typeUrl: "/example.drife.drife.MsgEndRide", value: data }),
    msgUpdateCounterquote: (data: MsgUpdateCounterquote): EncodeObject => ({ typeUrl: "/example.drife.drife.MsgUpdateCounterquote", value: data }),
    msgCounterQuote: (data: MsgCounterQuote): EncodeObject => ({ typeUrl: "/example.drife.drife.MsgCounterQuote", value: data }),
    msgAcceptRide: (data: MsgAcceptRide): EncodeObject => ({ typeUrl: "/example.drife.drife.MsgAcceptRide", value: data }),
    msgDeleteCounterquote: (data: MsgDeleteCounterquote): EncodeObject => ({ typeUrl: "/example.drife.drife.MsgDeleteCounterquote", value: data }),
    msgCreateCounterquote: (data: MsgCreateCounterquote): EncodeObject => ({ typeUrl: "/example.drife.drife.MsgCreateCounterquote", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};

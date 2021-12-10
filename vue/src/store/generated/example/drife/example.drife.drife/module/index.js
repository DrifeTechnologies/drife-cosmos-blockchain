// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateRide: (data) => ({ typeUrl: "/example.drife.drife.MsgCreateRide", value: data }),
        msgEndRide: (data) => ({ typeUrl: "/example.drife.drife.MsgEndRide", value: data }),
        msgUpdateCounterquote: (data) => ({ typeUrl: "/example.drife.drife.MsgUpdateCounterquote", value: data }),
        msgCounterQuote: (data) => ({ typeUrl: "/example.drife.drife.MsgCounterQuote", value: data }),
        msgAcceptRide: (data) => ({ typeUrl: "/example.drife.drife.MsgAcceptRide", value: data }),
        msgDeleteCounterquote: (data) => ({ typeUrl: "/example.drife.drife.MsgDeleteCounterquote", value: data }),
        msgCreateCounterquote: (data) => ({ typeUrl: "/example.drife.drife.MsgCreateCounterquote", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

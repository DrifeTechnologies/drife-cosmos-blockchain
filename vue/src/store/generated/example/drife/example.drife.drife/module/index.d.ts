import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateRide } from "./types/drife/ride";
import { MsgEndRide } from "./types/drife/ride";
import { MsgUpdateCounterquote } from "./types/drife/tx";
import { MsgCounterQuote } from "./types/drife/ride";
import { MsgAcceptRide } from "./types/drife/ride";
import { MsgDeleteCounterquote } from "./types/drife/tx";
import { MsgCreateCounterquote } from "./types/drife/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateRide: (data: MsgCreateRide) => EncodeObject;
    msgEndRide: (data: MsgEndRide) => EncodeObject;
    msgUpdateCounterquote: (data: MsgUpdateCounterquote) => EncodeObject;
    msgCounterQuote: (data: MsgCounterQuote) => EncodeObject;
    msgAcceptRide: (data: MsgAcceptRide) => EncodeObject;
    msgDeleteCounterquote: (data: MsgDeleteCounterquote) => EncodeObject;
    msgCreateCounterquote: (data: MsgCreateCounterquote) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };

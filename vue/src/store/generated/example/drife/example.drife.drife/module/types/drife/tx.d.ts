import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "example.drife.drife";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCounterquote {
    creator: string;
    premiumPercent: number;
    rideId: number;
}
export interface MsgCreateCounterquoteResponse {
    id: number;
}
export interface MsgUpdateCounterquote {
    creator: string;
    id: number;
    premiumPercent: number;
    rideId: number;
}
export interface MsgUpdateCounterquoteResponse {
}
export interface MsgDeleteCounterquote {
    creator: string;
    id: number;
}
export interface MsgDeleteCounterquoteResponse {
}
export declare const MsgCreateCounterquote: {
    encode(message: MsgCreateCounterquote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCounterquote;
    fromJSON(object: any): MsgCreateCounterquote;
    toJSON(message: MsgCreateCounterquote): unknown;
    fromPartial(object: DeepPartial<MsgCreateCounterquote>): MsgCreateCounterquote;
};
export declare const MsgCreateCounterquoteResponse: {
    encode(message: MsgCreateCounterquoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCounterquoteResponse;
    fromJSON(object: any): MsgCreateCounterquoteResponse;
    toJSON(message: MsgCreateCounterquoteResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCounterquoteResponse>): MsgCreateCounterquoteResponse;
};
export declare const MsgUpdateCounterquote: {
    encode(message: MsgUpdateCounterquote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCounterquote;
    fromJSON(object: any): MsgUpdateCounterquote;
    toJSON(message: MsgUpdateCounterquote): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCounterquote>): MsgUpdateCounterquote;
};
export declare const MsgUpdateCounterquoteResponse: {
    encode(_: MsgUpdateCounterquoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCounterquoteResponse;
    fromJSON(_: any): MsgUpdateCounterquoteResponse;
    toJSON(_: MsgUpdateCounterquoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCounterquoteResponse>): MsgUpdateCounterquoteResponse;
};
export declare const MsgDeleteCounterquote: {
    encode(message: MsgDeleteCounterquote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCounterquote;
    fromJSON(object: any): MsgDeleteCounterquote;
    toJSON(message: MsgDeleteCounterquote): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCounterquote>): MsgDeleteCounterquote;
};
export declare const MsgDeleteCounterquoteResponse: {
    encode(_: MsgDeleteCounterquoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCounterquoteResponse;
    fromJSON(_: any): MsgDeleteCounterquoteResponse;
    toJSON(_: MsgDeleteCounterquoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCounterquoteResponse>): MsgDeleteCounterquoteResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCounterquote(request: MsgCreateCounterquote): Promise<MsgCreateCounterquoteResponse>;
    UpdateCounterquote(request: MsgUpdateCounterquote): Promise<MsgUpdateCounterquoteResponse>;
    DeleteCounterquote(request: MsgDeleteCounterquote): Promise<MsgDeleteCounterquoteResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCounterquote(request: MsgCreateCounterquote): Promise<MsgCreateCounterquoteResponse>;
    UpdateCounterquote(request: MsgUpdateCounterquote): Promise<MsgUpdateCounterquoteResponse>;
    DeleteCounterquote(request: MsgDeleteCounterquote): Promise<MsgDeleteCounterquoteResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

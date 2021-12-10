import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "example.drife.drife";
export interface Counterquote {
    creator: string;
    id: number;
    premiumPercent: number;
    rideId: number;
}
export declare const Counterquote: {
    encode(message: Counterquote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Counterquote;
    fromJSON(object: any): Counterquote;
    toJSON(message: Counterquote): unknown;
    fromPartial(object: DeepPartial<Counterquote>): Counterquote;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

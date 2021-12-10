import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "example.drife.drife";
/** proto/blog/post.proto */
export interface cQ {
    driver: string;
    premiumPercent: number;
}
export interface Ride {
    rider: string;
    rideId: string;
    driver: string;
    eligibleDrivers: string[];
    initialTime: number;
    initialDistance: number;
    finalTime: number;
    finalDistance: number;
    boostPercent: number;
    counterquotes: cQ[];
    baseFare: number;
    estimatedFare: number;
    finalFare: number;
    rideState: number;
    chosenPremiumPercent: number;
    cq: {
        [key: string]: number;
    };
}
export interface Ride_CqEntry {
    key: string;
    value: number;
}
export interface MsgCreateRide {
    rider: string;
    initialTime: number;
    initialDistance: number;
    boostPercent: number;
    eligibleDrivers: string[];
    rideState: number;
}
export interface MsgCounterQuote {
    driver: string;
    rideId: number;
    premiumPercent: number;
}
export interface MsgAcceptRide {
    rider: string;
    rideId: number;
    driver: string;
}
export interface MsgEndRide {
    rider: string;
    rideId: number;
    finalTime: number;
    finalDistance: number;
}
export declare const cQ: {
    encode(message: cQ, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): cQ;
    fromJSON(object: any): cQ;
    toJSON(message: cQ): unknown;
    fromPartial(object: DeepPartial<cQ>): cQ;
};
export declare const Ride: {
    encode(message: Ride, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Ride;
    fromJSON(object: any): Ride;
    toJSON(message: Ride): unknown;
    fromPartial(object: DeepPartial<Ride>): Ride;
};
export declare const Ride_CqEntry: {
    encode(message: Ride_CqEntry, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Ride_CqEntry;
    fromJSON(object: any): Ride_CqEntry;
    toJSON(message: Ride_CqEntry): unknown;
    fromPartial(object: DeepPartial<Ride_CqEntry>): Ride_CqEntry;
};
export declare const MsgCreateRide: {
    encode(message: MsgCreateRide, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRide;
    fromJSON(object: any): MsgCreateRide;
    toJSON(message: MsgCreateRide): unknown;
    fromPartial(object: DeepPartial<MsgCreateRide>): MsgCreateRide;
};
export declare const MsgCounterQuote: {
    encode(message: MsgCounterQuote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCounterQuote;
    fromJSON(object: any): MsgCounterQuote;
    toJSON(message: MsgCounterQuote): unknown;
    fromPartial(object: DeepPartial<MsgCounterQuote>): MsgCounterQuote;
};
export declare const MsgAcceptRide: {
    encode(message: MsgAcceptRide, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptRide;
    fromJSON(object: any): MsgAcceptRide;
    toJSON(message: MsgAcceptRide): unknown;
    fromPartial(object: DeepPartial<MsgAcceptRide>): MsgAcceptRide;
};
export declare const MsgEndRide: {
    encode(message: MsgEndRide, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEndRide;
    fromJSON(object: any): MsgEndRide;
    toJSON(message: MsgEndRide): unknown;
    fromPartial(object: DeepPartial<MsgEndRide>): MsgEndRide;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

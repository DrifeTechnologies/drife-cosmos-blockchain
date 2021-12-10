import { Reader, Writer } from 'protobufjs/minimal';
import { Counterquote } from '../drife/counterquote';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Ride } from '../drife/ride';
export declare const protobufPackage = "example.drife.drife";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetCounterquoteRequest {
    id: number;
}
export interface QueryGetCounterquoteResponse {
    Counterquote: Counterquote | undefined;
}
export interface QueryAllCounterquoteRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCounterquoteResponse {
    Counterquote: Counterquote[];
    pagination: PageResponse | undefined;
}
export interface QueryGetRideRequest {
    id: string;
}
export interface QueryGetRideResponse {
    Ride: Ride | undefined;
}
export interface QueryAllRideRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllRideResponse {
    Ride: Ride[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCounterquoteRequest: {
    encode(message: QueryGetCounterquoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCounterquoteRequest;
    fromJSON(object: any): QueryGetCounterquoteRequest;
    toJSON(message: QueryGetCounterquoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCounterquoteRequest>): QueryGetCounterquoteRequest;
};
export declare const QueryGetCounterquoteResponse: {
    encode(message: QueryGetCounterquoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCounterquoteResponse;
    fromJSON(object: any): QueryGetCounterquoteResponse;
    toJSON(message: QueryGetCounterquoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCounterquoteResponse>): QueryGetCounterquoteResponse;
};
export declare const QueryAllCounterquoteRequest: {
    encode(message: QueryAllCounterquoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCounterquoteRequest;
    fromJSON(object: any): QueryAllCounterquoteRequest;
    toJSON(message: QueryAllCounterquoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCounterquoteRequest>): QueryAllCounterquoteRequest;
};
export declare const QueryAllCounterquoteResponse: {
    encode(message: QueryAllCounterquoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCounterquoteResponse;
    fromJSON(object: any): QueryAllCounterquoteResponse;
    toJSON(message: QueryAllCounterquoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCounterquoteResponse>): QueryAllCounterquoteResponse;
};
export declare const QueryGetRideRequest: {
    encode(message: QueryGetRideRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRideRequest;
    fromJSON(object: any): QueryGetRideRequest;
    toJSON(message: QueryGetRideRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRideRequest>): QueryGetRideRequest;
};
export declare const QueryGetRideResponse: {
    encode(message: QueryGetRideResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRideResponse;
    fromJSON(object: any): QueryGetRideResponse;
    toJSON(message: QueryGetRideResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRideResponse>): QueryGetRideResponse;
};
export declare const QueryAllRideRequest: {
    encode(message: QueryAllRideRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRideRequest;
    fromJSON(object: any): QueryAllRideRequest;
    toJSON(message: QueryAllRideRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllRideRequest>): QueryAllRideRequest;
};
export declare const QueryAllRideResponse: {
    encode(message: QueryAllRideResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRideResponse;
    fromJSON(object: any): QueryAllRideResponse;
    toJSON(message: QueryAllRideResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllRideResponse>): QueryAllRideResponse;
};
/**
 * Query defines the gRPC querier service.
 * Query defines the gRPC querier service.
 */
export interface Query {
    /** Queries a counterquote by id. */
    Counterquote(request: QueryGetCounterquoteRequest): Promise<QueryGetCounterquoteResponse>;
    /** Queries a list of counterquote items. */
    CounterquoteAll(request: QueryAllCounterquoteRequest): Promise<QueryAllCounterquoteResponse>;
    Ride(request: QueryGetRideRequest): Promise<QueryGetRideResponse>;
    RideAll(request: QueryAllRideRequest): Promise<QueryAllRideResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Counterquote(request: QueryGetCounterquoteRequest): Promise<QueryGetCounterquoteResponse>;
    CounterquoteAll(request: QueryAllCounterquoteRequest): Promise<QueryAllCounterquoteResponse>;
    Ride(request: QueryGetRideRequest): Promise<QueryGetRideResponse>;
    RideAll(request: QueryAllRideRequest): Promise<QueryAllRideResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

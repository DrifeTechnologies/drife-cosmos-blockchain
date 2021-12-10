/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Counterquote } from '../drife/counterquote';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Ride } from '../drife/ride';
export const protobufPackage = 'example.drife.drife';
const baseQueryGetCounterquoteRequest = { id: 0 };
export const QueryGetCounterquoteRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCounterquoteRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCounterquoteRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCounterquoteRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetCounterquoteResponse = {};
export const QueryGetCounterquoteResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Counterquote !== undefined) {
            Counterquote.encode(message.Counterquote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCounterquoteResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Counterquote = Counterquote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCounterquoteResponse };
        if (object.Counterquote !== undefined && object.Counterquote !== null) {
            message.Counterquote = Counterquote.fromJSON(object.Counterquote);
        }
        else {
            message.Counterquote = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Counterquote !== undefined && (obj.Counterquote = message.Counterquote ? Counterquote.toJSON(message.Counterquote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCounterquoteResponse };
        if (object.Counterquote !== undefined && object.Counterquote !== null) {
            message.Counterquote = Counterquote.fromPartial(object.Counterquote);
        }
        else {
            message.Counterquote = undefined;
        }
        return message;
    }
};
const baseQueryAllCounterquoteRequest = {};
export const QueryAllCounterquoteRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCounterquoteRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCounterquoteRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCounterquoteRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCounterquoteResponse = {};
export const QueryAllCounterquoteResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Counterquote) {
            Counterquote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCounterquoteResponse };
        message.Counterquote = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Counterquote.push(Counterquote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCounterquoteResponse };
        message.Counterquote = [];
        if (object.Counterquote !== undefined && object.Counterquote !== null) {
            for (const e of object.Counterquote) {
                message.Counterquote.push(Counterquote.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Counterquote) {
            obj.Counterquote = message.Counterquote.map((e) => (e ? Counterquote.toJSON(e) : undefined));
        }
        else {
            obj.Counterquote = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCounterquoteResponse };
        message.Counterquote = [];
        if (object.Counterquote !== undefined && object.Counterquote !== null) {
            for (const e of object.Counterquote) {
                message.Counterquote.push(Counterquote.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetRideRequest = { id: '' };
export const QueryGetRideRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRideRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRideRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRideRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    }
};
const baseQueryGetRideResponse = {};
export const QueryGetRideResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Ride !== undefined) {
            Ride.encode(message.Ride, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRideResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ride = Ride.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRideResponse };
        if (object.Ride !== undefined && object.Ride !== null) {
            message.Ride = Ride.fromJSON(object.Ride);
        }
        else {
            message.Ride = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Ride !== undefined && (obj.Ride = message.Ride ? Ride.toJSON(message.Ride) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRideResponse };
        if (object.Ride !== undefined && object.Ride !== null) {
            message.Ride = Ride.fromPartial(object.Ride);
        }
        else {
            message.Ride = undefined;
        }
        return message;
    }
};
const baseQueryAllRideRequest = {};
export const QueryAllRideRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllRideRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllRideRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllRideRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllRideResponse = {};
export const QueryAllRideResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Ride) {
            Ride.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllRideResponse };
        message.Ride = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ride.push(Ride.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllRideResponse };
        message.Ride = [];
        if (object.Ride !== undefined && object.Ride !== null) {
            for (const e of object.Ride) {
                message.Ride.push(Ride.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Ride) {
            obj.Ride = message.Ride.map((e) => (e ? Ride.toJSON(e) : undefined));
        }
        else {
            obj.Ride = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllRideResponse };
        message.Ride = [];
        if (object.Ride !== undefined && object.Ride !== null) {
            for (const e of object.Ride) {
                message.Ride.push(Ride.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Counterquote(request) {
        const data = QueryGetCounterquoteRequest.encode(request).finish();
        const promise = this.rpc.request('example.drife.drife.Query', 'Counterquote', data);
        return promise.then((data) => QueryGetCounterquoteResponse.decode(new Reader(data)));
    }
    CounterquoteAll(request) {
        const data = QueryAllCounterquoteRequest.encode(request).finish();
        const promise = this.rpc.request('example.drife.drife.Query', 'CounterquoteAll', data);
        return promise.then((data) => QueryAllCounterquoteResponse.decode(new Reader(data)));
    }
    Ride(request) {
        const data = QueryGetRideRequest.encode(request).finish();
        const promise = this.rpc.request('example.drife.drife.Query', 'Ride', data);
        return promise.then((data) => QueryGetRideResponse.decode(new Reader(data)));
    }
    RideAll(request) {
        const data = QueryAllRideRequest.encode(request).finish();
        const promise = this.rpc.request('example.drife.drife.Query', 'RideAll', data);
        return promise.then((data) => QueryAllRideResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}

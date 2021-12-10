/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'example.drife.drife';
const baseMsgCreateCounterquote = { creator: '', premiumPercent: 0, rideId: 0 };
export const MsgCreateCounterquote = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.premiumPercent !== 0) {
            writer.uint32(16).int64(message.premiumPercent);
        }
        if (message.rideId !== 0) {
            writer.uint32(24).int64(message.rideId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCounterquote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.premiumPercent = longToNumber(reader.int64());
                    break;
                case 3:
                    message.rideId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCounterquote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
            message.premiumPercent = Number(object.premiumPercent);
        }
        else {
            message.premiumPercent = 0;
        }
        if (object.rideId !== undefined && object.rideId !== null) {
            message.rideId = Number(object.rideId);
        }
        else {
            message.rideId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.premiumPercent !== undefined && (obj.premiumPercent = message.premiumPercent);
        message.rideId !== undefined && (obj.rideId = message.rideId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCounterquote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
            message.premiumPercent = object.premiumPercent;
        }
        else {
            message.premiumPercent = 0;
        }
        if (object.rideId !== undefined && object.rideId !== null) {
            message.rideId = object.rideId;
        }
        else {
            message.rideId = 0;
        }
        return message;
    }
};
const baseMsgCreateCounterquoteResponse = { id: 0 };
export const MsgCreateCounterquoteResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCounterquoteResponse };
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
        const message = { ...baseMsgCreateCounterquoteResponse };
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
        const message = { ...baseMsgCreateCounterquoteResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateCounterquote = { creator: '', id: 0, premiumPercent: 0, rideId: 0 };
export const MsgUpdateCounterquote = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.premiumPercent !== 0) {
            writer.uint32(24).int64(message.premiumPercent);
        }
        if (message.rideId !== 0) {
            writer.uint32(32).int64(message.rideId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCounterquote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.premiumPercent = longToNumber(reader.int64());
                    break;
                case 4:
                    message.rideId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCounterquote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
            message.premiumPercent = Number(object.premiumPercent);
        }
        else {
            message.premiumPercent = 0;
        }
        if (object.rideId !== undefined && object.rideId !== null) {
            message.rideId = Number(object.rideId);
        }
        else {
            message.rideId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.premiumPercent !== undefined && (obj.premiumPercent = message.premiumPercent);
        message.rideId !== undefined && (obj.rideId = message.rideId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCounterquote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
            message.premiumPercent = object.premiumPercent;
        }
        else {
            message.premiumPercent = 0;
        }
        if (object.rideId !== undefined && object.rideId !== null) {
            message.rideId = object.rideId;
        }
        else {
            message.rideId = 0;
        }
        return message;
    }
};
const baseMsgUpdateCounterquoteResponse = {};
export const MsgUpdateCounterquoteResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCounterquoteResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateCounterquoteResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCounterquoteResponse };
        return message;
    }
};
const baseMsgDeleteCounterquote = { creator: '', id: 0 };
export const MsgDeleteCounterquote = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCounterquote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteCounterquote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteCounterquote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteCounterquoteResponse = {};
export const MsgDeleteCounterquoteResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCounterquoteResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteCounterquoteResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteCounterquoteResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateCounterquote(request) {
        const data = MsgCreateCounterquote.encode(request).finish();
        const promise = this.rpc.request('example.drife.drife.Msg', 'CreateCounterquote', data);
        return promise.then((data) => MsgCreateCounterquoteResponse.decode(new Reader(data)));
    }
    UpdateCounterquote(request) {
        const data = MsgUpdateCounterquote.encode(request).finish();
        const promise = this.rpc.request('example.drife.drife.Msg', 'UpdateCounterquote', data);
        return promise.then((data) => MsgUpdateCounterquoteResponse.decode(new Reader(data)));
    }
    DeleteCounterquote(request) {
        const data = MsgDeleteCounterquote.encode(request).finish();
        const promise = this.rpc.request('example.drife.drife.Msg', 'DeleteCounterquote', data);
        return promise.then((data) => MsgDeleteCounterquoteResponse.decode(new Reader(data)));
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

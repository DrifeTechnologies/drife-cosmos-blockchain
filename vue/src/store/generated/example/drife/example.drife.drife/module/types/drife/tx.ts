/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'example.drife.drife'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCounterquote {
  creator: string
  premiumPercent: number
  rideId: number
}

export interface MsgCreateCounterquoteResponse {
  id: number
}

export interface MsgUpdateCounterquote {
  creator: string
  id: number
  premiumPercent: number
  rideId: number
}

export interface MsgUpdateCounterquoteResponse {}

export interface MsgDeleteCounterquote {
  creator: string
  id: number
}

export interface MsgDeleteCounterquoteResponse {}

const baseMsgCreateCounterquote: object = { creator: '', premiumPercent: 0, rideId: 0 }

export const MsgCreateCounterquote = {
  encode(message: MsgCreateCounterquote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.premiumPercent !== 0) {
      writer.uint32(16).int64(message.premiumPercent)
    }
    if (message.rideId !== 0) {
      writer.uint32(24).int64(message.rideId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCounterquote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCounterquote } as MsgCreateCounterquote
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.premiumPercent = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.rideId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCounterquote {
    const message = { ...baseMsgCreateCounterquote } as MsgCreateCounterquote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = Number(object.premiumPercent)
    } else {
      message.premiumPercent = 0
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = Number(object.rideId)
    } else {
      message.rideId = 0
    }
    return message
  },

  toJSON(message: MsgCreateCounterquote): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.premiumPercent !== undefined && (obj.premiumPercent = message.premiumPercent)
    message.rideId !== undefined && (obj.rideId = message.rideId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCounterquote>): MsgCreateCounterquote {
    const message = { ...baseMsgCreateCounterquote } as MsgCreateCounterquote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = object.premiumPercent
    } else {
      message.premiumPercent = 0
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = object.rideId
    } else {
      message.rideId = 0
    }
    return message
  }
}

const baseMsgCreateCounterquoteResponse: object = { id: 0 }

export const MsgCreateCounterquoteResponse = {
  encode(message: MsgCreateCounterquoteResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCounterquoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCounterquoteResponse } as MsgCreateCounterquoteResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCounterquoteResponse {
    const message = { ...baseMsgCreateCounterquoteResponse } as MsgCreateCounterquoteResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateCounterquoteResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCounterquoteResponse>): MsgCreateCounterquoteResponse {
    const message = { ...baseMsgCreateCounterquoteResponse } as MsgCreateCounterquoteResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateCounterquote: object = { creator: '', id: 0, premiumPercent: 0, rideId: 0 }

export const MsgUpdateCounterquote = {
  encode(message: MsgUpdateCounterquote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.premiumPercent !== 0) {
      writer.uint32(24).int64(message.premiumPercent)
    }
    if (message.rideId !== 0) {
      writer.uint32(32).int64(message.rideId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCounterquote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCounterquote } as MsgUpdateCounterquote
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.premiumPercent = longToNumber(reader.int64() as Long)
          break
        case 4:
          message.rideId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateCounterquote {
    const message = { ...baseMsgUpdateCounterquote } as MsgUpdateCounterquote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = Number(object.premiumPercent)
    } else {
      message.premiumPercent = 0
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = Number(object.rideId)
    } else {
      message.rideId = 0
    }
    return message
  },

  toJSON(message: MsgUpdateCounterquote): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.premiumPercent !== undefined && (obj.premiumPercent = message.premiumPercent)
    message.rideId !== undefined && (obj.rideId = message.rideId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateCounterquote>): MsgUpdateCounterquote {
    const message = { ...baseMsgUpdateCounterquote } as MsgUpdateCounterquote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = object.premiumPercent
    } else {
      message.premiumPercent = 0
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = object.rideId
    } else {
      message.rideId = 0
    }
    return message
  }
}

const baseMsgUpdateCounterquoteResponse: object = {}

export const MsgUpdateCounterquoteResponse = {
  encode(_: MsgUpdateCounterquoteResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCounterquoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCounterquoteResponse } as MsgUpdateCounterquoteResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateCounterquoteResponse {
    const message = { ...baseMsgUpdateCounterquoteResponse } as MsgUpdateCounterquoteResponse
    return message
  },

  toJSON(_: MsgUpdateCounterquoteResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateCounterquoteResponse>): MsgUpdateCounterquoteResponse {
    const message = { ...baseMsgUpdateCounterquoteResponse } as MsgUpdateCounterquoteResponse
    return message
  }
}

const baseMsgDeleteCounterquote: object = { creator: '', id: 0 }

export const MsgDeleteCounterquote = {
  encode(message: MsgDeleteCounterquote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCounterquote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCounterquote } as MsgDeleteCounterquote
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteCounterquote {
    const message = { ...baseMsgDeleteCounterquote } as MsgDeleteCounterquote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteCounterquote): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteCounterquote>): MsgDeleteCounterquote {
    const message = { ...baseMsgDeleteCounterquote } as MsgDeleteCounterquote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteCounterquoteResponse: object = {}

export const MsgDeleteCounterquoteResponse = {
  encode(_: MsgDeleteCounterquoteResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCounterquoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCounterquoteResponse } as MsgDeleteCounterquoteResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteCounterquoteResponse {
    const message = { ...baseMsgDeleteCounterquoteResponse } as MsgDeleteCounterquoteResponse
    return message
  },

  toJSON(_: MsgDeleteCounterquoteResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteCounterquoteResponse>): MsgDeleteCounterquoteResponse {
    const message = { ...baseMsgDeleteCounterquoteResponse } as MsgDeleteCounterquoteResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateCounterquote(request: MsgCreateCounterquote): Promise<MsgCreateCounterquoteResponse>
  UpdateCounterquote(request: MsgUpdateCounterquote): Promise<MsgUpdateCounterquoteResponse>
  DeleteCounterquote(request: MsgDeleteCounterquote): Promise<MsgDeleteCounterquoteResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateCounterquote(request: MsgCreateCounterquote): Promise<MsgCreateCounterquoteResponse> {
    const data = MsgCreateCounterquote.encode(request).finish()
    const promise = this.rpc.request('example.drife.drife.Msg', 'CreateCounterquote', data)
    return promise.then((data) => MsgCreateCounterquoteResponse.decode(new Reader(data)))
  }

  UpdateCounterquote(request: MsgUpdateCounterquote): Promise<MsgUpdateCounterquoteResponse> {
    const data = MsgUpdateCounterquote.encode(request).finish()
    const promise = this.rpc.request('example.drife.drife.Msg', 'UpdateCounterquote', data)
    return promise.then((data) => MsgUpdateCounterquoteResponse.decode(new Reader(data)))
  }

  DeleteCounterquote(request: MsgDeleteCounterquote): Promise<MsgDeleteCounterquoteResponse> {
    const data = MsgDeleteCounterquote.encode(request).finish()
    const promise = this.rpc.request('example.drife.drife.Msg', 'DeleteCounterquote', data)
    return promise.then((data) => MsgDeleteCounterquoteResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}

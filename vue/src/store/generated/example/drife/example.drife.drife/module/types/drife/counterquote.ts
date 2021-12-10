/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'example.drife.drife'

export interface Counterquote {
  creator: string
  id: number
  premiumPercent: number
  rideId: number
}

const baseCounterquote: object = { creator: '', id: 0, premiumPercent: 0, rideId: 0 }

export const Counterquote = {
  encode(message: Counterquote, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Counterquote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCounterquote } as Counterquote
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

  fromJSON(object: any): Counterquote {
    const message = { ...baseCounterquote } as Counterquote
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

  toJSON(message: Counterquote): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.premiumPercent !== undefined && (obj.premiumPercent = message.premiumPercent)
    message.rideId !== undefined && (obj.rideId = message.rideId)
    return obj
  },

  fromPartial(object: DeepPartial<Counterquote>): Counterquote {
    const message = { ...baseCounterquote } as Counterquote
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

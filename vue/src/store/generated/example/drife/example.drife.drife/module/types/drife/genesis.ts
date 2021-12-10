/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Counterquote } from '../drife/counterquote'

export const protobufPackage = 'example.drife.drife'

/** GenesisState defines the drife module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  counterquoteList: Counterquote[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  counterquoteCount: number
}

const baseGenesisState: object = { counterquoteCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.counterquoteList) {
      Counterquote.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.counterquoteCount !== 0) {
      writer.uint32(16).uint64(message.counterquoteCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.counterquoteList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.counterquoteList.push(Counterquote.decode(reader, reader.uint32()))
          break
        case 2:
          message.counterquoteCount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.counterquoteList = []
    if (object.counterquoteList !== undefined && object.counterquoteList !== null) {
      for (const e of object.counterquoteList) {
        message.counterquoteList.push(Counterquote.fromJSON(e))
      }
    }
    if (object.counterquoteCount !== undefined && object.counterquoteCount !== null) {
      message.counterquoteCount = Number(object.counterquoteCount)
    } else {
      message.counterquoteCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.counterquoteList) {
      obj.counterquoteList = message.counterquoteList.map((e) => (e ? Counterquote.toJSON(e) : undefined))
    } else {
      obj.counterquoteList = []
    }
    message.counterquoteCount !== undefined && (obj.counterquoteCount = message.counterquoteCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.counterquoteList = []
    if (object.counterquoteList !== undefined && object.counterquoteList !== null) {
      for (const e of object.counterquoteList) {
        message.counterquoteList.push(Counterquote.fromPartial(e))
      }
    }
    if (object.counterquoteCount !== undefined && object.counterquoteCount !== null) {
      message.counterquoteCount = object.counterquoteCount
    } else {
      message.counterquoteCount = 0
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

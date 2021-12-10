/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Counterquote } from '../drife/counterquote'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Ride } from '../drife/ride'

export const protobufPackage = 'example.drife.drife'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetCounterquoteRequest {
  id: number
}

export interface QueryGetCounterquoteResponse {
  Counterquote: Counterquote | undefined
}

export interface QueryAllCounterquoteRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCounterquoteResponse {
  Counterquote: Counterquote[]
  pagination: PageResponse | undefined
}

export interface QueryGetRideRequest {
  id: string
}

export interface QueryGetRideResponse {
  Ride: Ride | undefined
}

export interface QueryAllRideRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllRideResponse {
  Ride: Ride[]
  pagination: PageResponse | undefined
}

const baseQueryGetCounterquoteRequest: object = { id: 0 }

export const QueryGetCounterquoteRequest = {
  encode(message: QueryGetCounterquoteRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCounterquoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCounterquoteRequest } as QueryGetCounterquoteRequest
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

  fromJSON(object: any): QueryGetCounterquoteRequest {
    const message = { ...baseQueryGetCounterquoteRequest } as QueryGetCounterquoteRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetCounterquoteRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCounterquoteRequest>): QueryGetCounterquoteRequest {
    const message = { ...baseQueryGetCounterquoteRequest } as QueryGetCounterquoteRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetCounterquoteResponse: object = {}

export const QueryGetCounterquoteResponse = {
  encode(message: QueryGetCounterquoteResponse, writer: Writer = Writer.create()): Writer {
    if (message.Counterquote !== undefined) {
      Counterquote.encode(message.Counterquote, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCounterquoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCounterquoteResponse } as QueryGetCounterquoteResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Counterquote = Counterquote.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCounterquoteResponse {
    const message = { ...baseQueryGetCounterquoteResponse } as QueryGetCounterquoteResponse
    if (object.Counterquote !== undefined && object.Counterquote !== null) {
      message.Counterquote = Counterquote.fromJSON(object.Counterquote)
    } else {
      message.Counterquote = undefined
    }
    return message
  },

  toJSON(message: QueryGetCounterquoteResponse): unknown {
    const obj: any = {}
    message.Counterquote !== undefined && (obj.Counterquote = message.Counterquote ? Counterquote.toJSON(message.Counterquote) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCounterquoteResponse>): QueryGetCounterquoteResponse {
    const message = { ...baseQueryGetCounterquoteResponse } as QueryGetCounterquoteResponse
    if (object.Counterquote !== undefined && object.Counterquote !== null) {
      message.Counterquote = Counterquote.fromPartial(object.Counterquote)
    } else {
      message.Counterquote = undefined
    }
    return message
  }
}

const baseQueryAllCounterquoteRequest: object = {}

export const QueryAllCounterquoteRequest = {
  encode(message: QueryAllCounterquoteRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCounterquoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCounterquoteRequest } as QueryAllCounterquoteRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCounterquoteRequest {
    const message = { ...baseQueryAllCounterquoteRequest } as QueryAllCounterquoteRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCounterquoteRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCounterquoteRequest>): QueryAllCounterquoteRequest {
    const message = { ...baseQueryAllCounterquoteRequest } as QueryAllCounterquoteRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCounterquoteResponse: object = {}

export const QueryAllCounterquoteResponse = {
  encode(message: QueryAllCounterquoteResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Counterquote) {
      Counterquote.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCounterquoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCounterquoteResponse } as QueryAllCounterquoteResponse
    message.Counterquote = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Counterquote.push(Counterquote.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCounterquoteResponse {
    const message = { ...baseQueryAllCounterquoteResponse } as QueryAllCounterquoteResponse
    message.Counterquote = []
    if (object.Counterquote !== undefined && object.Counterquote !== null) {
      for (const e of object.Counterquote) {
        message.Counterquote.push(Counterquote.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCounterquoteResponse): unknown {
    const obj: any = {}
    if (message.Counterquote) {
      obj.Counterquote = message.Counterquote.map((e) => (e ? Counterquote.toJSON(e) : undefined))
    } else {
      obj.Counterquote = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCounterquoteResponse>): QueryAllCounterquoteResponse {
    const message = { ...baseQueryAllCounterquoteResponse } as QueryAllCounterquoteResponse
    message.Counterquote = []
    if (object.Counterquote !== undefined && object.Counterquote !== null) {
      for (const e of object.Counterquote) {
        message.Counterquote.push(Counterquote.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetRideRequest: object = { id: '' }

export const QueryGetRideRequest = {
  encode(message: QueryGetRideRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRideRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRideRequest } as QueryGetRideRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRideRequest {
    const message = { ...baseQueryGetRideRequest } as QueryGetRideRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    return message
  },

  toJSON(message: QueryGetRideRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRideRequest>): QueryGetRideRequest {
    const message = { ...baseQueryGetRideRequest } as QueryGetRideRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    return message
  }
}

const baseQueryGetRideResponse: object = {}

export const QueryGetRideResponse = {
  encode(message: QueryGetRideResponse, writer: Writer = Writer.create()): Writer {
    if (message.Ride !== undefined) {
      Ride.encode(message.Ride, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRideResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRideResponse } as QueryGetRideResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Ride = Ride.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRideResponse {
    const message = { ...baseQueryGetRideResponse } as QueryGetRideResponse
    if (object.Ride !== undefined && object.Ride !== null) {
      message.Ride = Ride.fromJSON(object.Ride)
    } else {
      message.Ride = undefined
    }
    return message
  },

  toJSON(message: QueryGetRideResponse): unknown {
    const obj: any = {}
    message.Ride !== undefined && (obj.Ride = message.Ride ? Ride.toJSON(message.Ride) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRideResponse>): QueryGetRideResponse {
    const message = { ...baseQueryGetRideResponse } as QueryGetRideResponse
    if (object.Ride !== undefined && object.Ride !== null) {
      message.Ride = Ride.fromPartial(object.Ride)
    } else {
      message.Ride = undefined
    }
    return message
  }
}

const baseQueryAllRideRequest: object = {}

export const QueryAllRideRequest = {
  encode(message: QueryAllRideRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRideRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRideRequest } as QueryAllRideRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllRideRequest {
    const message = { ...baseQueryAllRideRequest } as QueryAllRideRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRideRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRideRequest>): QueryAllRideRequest {
    const message = { ...baseQueryAllRideRequest } as QueryAllRideRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllRideResponse: object = {}

export const QueryAllRideResponse = {
  encode(message: QueryAllRideResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Ride) {
      Ride.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRideResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRideResponse } as QueryAllRideResponse
    message.Ride = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Ride.push(Ride.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllRideResponse {
    const message = { ...baseQueryAllRideResponse } as QueryAllRideResponse
    message.Ride = []
    if (object.Ride !== undefined && object.Ride !== null) {
      for (const e of object.Ride) {
        message.Ride.push(Ride.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRideResponse): unknown {
    const obj: any = {}
    if (message.Ride) {
      obj.Ride = message.Ride.map((e) => (e ? Ride.toJSON(e) : undefined))
    } else {
      obj.Ride = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRideResponse>): QueryAllRideResponse {
    const message = { ...baseQueryAllRideResponse } as QueryAllRideResponse
    message.Ride = []
    if (object.Ride !== undefined && object.Ride !== null) {
      for (const e of object.Ride) {
        message.Ride.push(Ride.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/**
 * Query defines the gRPC querier service.
 * Query defines the gRPC querier service.
 */
export interface Query {
  /** Queries a counterquote by id. */
  Counterquote(request: QueryGetCounterquoteRequest): Promise<QueryGetCounterquoteResponse>
  /** Queries a list of counterquote items. */
  CounterquoteAll(request: QueryAllCounterquoteRequest): Promise<QueryAllCounterquoteResponse>
  Ride(request: QueryGetRideRequest): Promise<QueryGetRideResponse>
  RideAll(request: QueryAllRideRequest): Promise<QueryAllRideResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Counterquote(request: QueryGetCounterquoteRequest): Promise<QueryGetCounterquoteResponse> {
    const data = QueryGetCounterquoteRequest.encode(request).finish()
    const promise = this.rpc.request('example.drife.drife.Query', 'Counterquote', data)
    return promise.then((data) => QueryGetCounterquoteResponse.decode(new Reader(data)))
  }

  CounterquoteAll(request: QueryAllCounterquoteRequest): Promise<QueryAllCounterquoteResponse> {
    const data = QueryAllCounterquoteRequest.encode(request).finish()
    const promise = this.rpc.request('example.drife.drife.Query', 'CounterquoteAll', data)
    return promise.then((data) => QueryAllCounterquoteResponse.decode(new Reader(data)))
  }

  Ride(request: QueryGetRideRequest): Promise<QueryGetRideResponse> {
    const data = QueryGetRideRequest.encode(request).finish()
    const promise = this.rpc.request('example.drife.drife.Query', 'Ride', data)
    return promise.then((data) => QueryGetRideResponse.decode(new Reader(data)))
  }

  RideAll(request: QueryAllRideRequest): Promise<QueryAllRideResponse> {
    const data = QueryAllRideRequest.encode(request).finish()
    const promise = this.rpc.request('example.drife.drife.Query', 'RideAll', data)
    return promise.then((data) => QueryAllRideResponse.decode(new Reader(data)))
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

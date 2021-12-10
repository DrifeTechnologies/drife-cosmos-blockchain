/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'example.drife.drife'

/** proto/blog/post.proto */

export interface cQ {
  driver: string
  premiumPercent: number
}

export interface Ride {
  rider: string
  rideId: string
  driver: string
  eligibleDrivers: string[]
  initialTime: number
  initialDistance: number
  finalTime: number
  finalDistance: number
  boostPercent: number
  counterquotes: cQ[]
  baseFare: number
  estimatedFare: number
  finalFare: number
  rideState: number
  chosenPremiumPercent: number
  cq: { [key: string]: number }
}

export interface Ride_CqEntry {
  key: string
  value: number
}

export interface MsgCreateRide {
  rider: string
  initialTime: number
  initialDistance: number
  boostPercent: number
  eligibleDrivers: string[]
  rideState: number
}

export interface MsgCounterQuote {
  driver: string
  rideId: number
  premiumPercent: number
}

export interface MsgAcceptRide {
  rider: string
  rideId: number
  driver: string
}

export interface MsgEndRide {
  rider: string
  rideId: number
  finalTime: number
  finalDistance: number
}

const basecQ: object = { driver: '', premiumPercent: 0 }

export const cQ = {
  encode(message: cQ, writer: Writer = Writer.create()): Writer {
    if (message.driver !== '') {
      writer.uint32(10).string(message.driver)
    }
    if (message.premiumPercent !== 0) {
      writer.uint32(16).int64(message.premiumPercent)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): cQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basecQ } as cQ
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.driver = reader.string()
          break
        case 2:
          message.premiumPercent = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): cQ {
    const message = { ...basecQ } as cQ
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = String(object.driver)
    } else {
      message.driver = ''
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = Number(object.premiumPercent)
    } else {
      message.premiumPercent = 0
    }
    return message
  },

  toJSON(message: cQ): unknown {
    const obj: any = {}
    message.driver !== undefined && (obj.driver = message.driver)
    message.premiumPercent !== undefined && (obj.premiumPercent = message.premiumPercent)
    return obj
  },

  fromPartial(object: DeepPartial<cQ>): cQ {
    const message = { ...basecQ } as cQ
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = object.driver
    } else {
      message.driver = ''
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = object.premiumPercent
    } else {
      message.premiumPercent = 0
    }
    return message
  }
}

const baseRide: object = {
  rider: '',
  rideId: '',
  driver: '',
  eligibleDrivers: '',
  initialTime: 0,
  initialDistance: 0,
  finalTime: 0,
  finalDistance: 0,
  boostPercent: 0,
  baseFare: 0,
  estimatedFare: 0,
  finalFare: 0,
  rideState: 0,
  chosenPremiumPercent: 0
}

export const Ride = {
  encode(message: Ride, writer: Writer = Writer.create()): Writer {
    if (message.rider !== '') {
      writer.uint32(10).string(message.rider)
    }
    if (message.rideId !== '') {
      writer.uint32(18).string(message.rideId)
    }
    if (message.driver !== '') {
      writer.uint32(26).string(message.driver)
    }
    for (const v of message.eligibleDrivers) {
      writer.uint32(34).string(v!)
    }
    if (message.initialTime !== 0) {
      writer.uint32(40).int64(message.initialTime)
    }
    if (message.initialDistance !== 0) {
      writer.uint32(48).int64(message.initialDistance)
    }
    if (message.finalTime !== 0) {
      writer.uint32(56).int64(message.finalTime)
    }
    if (message.finalDistance !== 0) {
      writer.uint32(64).int64(message.finalDistance)
    }
    if (message.boostPercent !== 0) {
      writer.uint32(72).int64(message.boostPercent)
    }
    for (const v of message.counterquotes) {
      cQ.encode(v!, writer.uint32(82).fork()).ldelim()
    }
    if (message.baseFare !== 0) {
      writer.uint32(88).int64(message.baseFare)
    }
    if (message.estimatedFare !== 0) {
      writer.uint32(96).int64(message.estimatedFare)
    }
    if (message.finalFare !== 0) {
      writer.uint32(104).int64(message.finalFare)
    }
    if (message.rideState !== 0) {
      writer.uint32(112).int64(message.rideState)
    }
    if (message.chosenPremiumPercent !== 0) {
      writer.uint32(120).int64(message.chosenPremiumPercent)
    }
    Object.entries(message.cq).forEach(([key, value]) => {
      Ride_CqEntry.encode({ key: key as any, value }, writer.uint32(130).fork()).ldelim()
    })
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Ride {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRide } as Ride
    message.eligibleDrivers = []
    message.counterquotes = []
    message.cq = {}
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.rider = reader.string()
          break
        case 2:
          message.rideId = reader.string()
          break
        case 3:
          message.driver = reader.string()
          break
        case 4:
          message.eligibleDrivers.push(reader.string())
          break
        case 5:
          message.initialTime = longToNumber(reader.int64() as Long)
          break
        case 6:
          message.initialDistance = longToNumber(reader.int64() as Long)
          break
        case 7:
          message.finalTime = longToNumber(reader.int64() as Long)
          break
        case 8:
          message.finalDistance = longToNumber(reader.int64() as Long)
          break
        case 9:
          message.boostPercent = longToNumber(reader.int64() as Long)
          break
        case 10:
          message.counterquotes.push(cQ.decode(reader, reader.uint32()))
          break
        case 11:
          message.baseFare = longToNumber(reader.int64() as Long)
          break
        case 12:
          message.estimatedFare = longToNumber(reader.int64() as Long)
          break
        case 13:
          message.finalFare = longToNumber(reader.int64() as Long)
          break
        case 14:
          message.rideState = longToNumber(reader.int64() as Long)
          break
        case 15:
          message.chosenPremiumPercent = longToNumber(reader.int64() as Long)
          break
        case 16:
          const entry16 = Ride_CqEntry.decode(reader, reader.uint32())
          if (entry16.value !== undefined) {
            message.cq[entry16.key] = entry16.value
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Ride {
    const message = { ...baseRide } as Ride
    message.eligibleDrivers = []
    message.counterquotes = []
    message.cq = {}
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = String(object.rider)
    } else {
      message.rider = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = String(object.rideId)
    } else {
      message.rideId = ''
    }
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = String(object.driver)
    } else {
      message.driver = ''
    }
    if (object.eligibleDrivers !== undefined && object.eligibleDrivers !== null) {
      for (const e of object.eligibleDrivers) {
        message.eligibleDrivers.push(String(e))
      }
    }
    if (object.initialTime !== undefined && object.initialTime !== null) {
      message.initialTime = Number(object.initialTime)
    } else {
      message.initialTime = 0
    }
    if (object.initialDistance !== undefined && object.initialDistance !== null) {
      message.initialDistance = Number(object.initialDistance)
    } else {
      message.initialDistance = 0
    }
    if (object.finalTime !== undefined && object.finalTime !== null) {
      message.finalTime = Number(object.finalTime)
    } else {
      message.finalTime = 0
    }
    if (object.finalDistance !== undefined && object.finalDistance !== null) {
      message.finalDistance = Number(object.finalDistance)
    } else {
      message.finalDistance = 0
    }
    if (object.boostPercent !== undefined && object.boostPercent !== null) {
      message.boostPercent = Number(object.boostPercent)
    } else {
      message.boostPercent = 0
    }
    if (object.counterquotes !== undefined && object.counterquotes !== null) {
      for (const e of object.counterquotes) {
        message.counterquotes.push(cQ.fromJSON(e))
      }
    }
    if (object.baseFare !== undefined && object.baseFare !== null) {
      message.baseFare = Number(object.baseFare)
    } else {
      message.baseFare = 0
    }
    if (object.estimatedFare !== undefined && object.estimatedFare !== null) {
      message.estimatedFare = Number(object.estimatedFare)
    } else {
      message.estimatedFare = 0
    }
    if (object.finalFare !== undefined && object.finalFare !== null) {
      message.finalFare = Number(object.finalFare)
    } else {
      message.finalFare = 0
    }
    if (object.rideState !== undefined && object.rideState !== null) {
      message.rideState = Number(object.rideState)
    } else {
      message.rideState = 0
    }
    if (object.chosenPremiumPercent !== undefined && object.chosenPremiumPercent !== null) {
      message.chosenPremiumPercent = Number(object.chosenPremiumPercent)
    } else {
      message.chosenPremiumPercent = 0
    }
    if (object.cq !== undefined && object.cq !== null) {
      Object.entries(object.cq).forEach(([key, value]) => {
        message.cq[key] = Number(value)
      })
    }
    return message
  },

  toJSON(message: Ride): unknown {
    const obj: any = {}
    message.rider !== undefined && (obj.rider = message.rider)
    message.rideId !== undefined && (obj.rideId = message.rideId)
    message.driver !== undefined && (obj.driver = message.driver)
    if (message.eligibleDrivers) {
      obj.eligibleDrivers = message.eligibleDrivers.map((e) => e)
    } else {
      obj.eligibleDrivers = []
    }
    message.initialTime !== undefined && (obj.initialTime = message.initialTime)
    message.initialDistance !== undefined && (obj.initialDistance = message.initialDistance)
    message.finalTime !== undefined && (obj.finalTime = message.finalTime)
    message.finalDistance !== undefined && (obj.finalDistance = message.finalDistance)
    message.boostPercent !== undefined && (obj.boostPercent = message.boostPercent)
    if (message.counterquotes) {
      obj.counterquotes = message.counterquotes.map((e) => (e ? cQ.toJSON(e) : undefined))
    } else {
      obj.counterquotes = []
    }
    message.baseFare !== undefined && (obj.baseFare = message.baseFare)
    message.estimatedFare !== undefined && (obj.estimatedFare = message.estimatedFare)
    message.finalFare !== undefined && (obj.finalFare = message.finalFare)
    message.rideState !== undefined && (obj.rideState = message.rideState)
    message.chosenPremiumPercent !== undefined && (obj.chosenPremiumPercent = message.chosenPremiumPercent)
    obj.cq = {}
    if (message.cq) {
      Object.entries(message.cq).forEach(([k, v]) => {
        obj.cq[k] = v
      })
    }
    return obj
  },

  fromPartial(object: DeepPartial<Ride>): Ride {
    const message = { ...baseRide } as Ride
    message.eligibleDrivers = []
    message.counterquotes = []
    message.cq = {}
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = object.rider
    } else {
      message.rider = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = object.rideId
    } else {
      message.rideId = ''
    }
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = object.driver
    } else {
      message.driver = ''
    }
    if (object.eligibleDrivers !== undefined && object.eligibleDrivers !== null) {
      for (const e of object.eligibleDrivers) {
        message.eligibleDrivers.push(e)
      }
    }
    if (object.initialTime !== undefined && object.initialTime !== null) {
      message.initialTime = object.initialTime
    } else {
      message.initialTime = 0
    }
    if (object.initialDistance !== undefined && object.initialDistance !== null) {
      message.initialDistance = object.initialDistance
    } else {
      message.initialDistance = 0
    }
    if (object.finalTime !== undefined && object.finalTime !== null) {
      message.finalTime = object.finalTime
    } else {
      message.finalTime = 0
    }
    if (object.finalDistance !== undefined && object.finalDistance !== null) {
      message.finalDistance = object.finalDistance
    } else {
      message.finalDistance = 0
    }
    if (object.boostPercent !== undefined && object.boostPercent !== null) {
      message.boostPercent = object.boostPercent
    } else {
      message.boostPercent = 0
    }
    if (object.counterquotes !== undefined && object.counterquotes !== null) {
      for (const e of object.counterquotes) {
        message.counterquotes.push(cQ.fromPartial(e))
      }
    }
    if (object.baseFare !== undefined && object.baseFare !== null) {
      message.baseFare = object.baseFare
    } else {
      message.baseFare = 0
    }
    if (object.estimatedFare !== undefined && object.estimatedFare !== null) {
      message.estimatedFare = object.estimatedFare
    } else {
      message.estimatedFare = 0
    }
    if (object.finalFare !== undefined && object.finalFare !== null) {
      message.finalFare = object.finalFare
    } else {
      message.finalFare = 0
    }
    if (object.rideState !== undefined && object.rideState !== null) {
      message.rideState = object.rideState
    } else {
      message.rideState = 0
    }
    if (object.chosenPremiumPercent !== undefined && object.chosenPremiumPercent !== null) {
      message.chosenPremiumPercent = object.chosenPremiumPercent
    } else {
      message.chosenPremiumPercent = 0
    }
    if (object.cq !== undefined && object.cq !== null) {
      Object.entries(object.cq).forEach(([key, value]) => {
        if (value !== undefined) {
          message.cq[key] = Number(value)
        }
      })
    }
    return message
  }
}

const baseRide_CqEntry: object = { key: '', value: 0 }

export const Ride_CqEntry = {
  encode(message: Ride_CqEntry, writer: Writer = Writer.create()): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Ride_CqEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRide_CqEntry } as Ride_CqEntry
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Ride_CqEntry {
    const message = { ...baseRide_CqEntry } as Ride_CqEntry
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key)
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value)
    } else {
      message.value = 0
    }
    return message
  },

  toJSON(message: Ride_CqEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<Ride_CqEntry>): Ride_CqEntry {
    const message = { ...baseRide_CqEntry } as Ride_CqEntry
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = 0
    }
    return message
  }
}

const baseMsgCreateRide: object = { rider: '', initialTime: 0, initialDistance: 0, boostPercent: 0, eligibleDrivers: '', rideState: 0 }

export const MsgCreateRide = {
  encode(message: MsgCreateRide, writer: Writer = Writer.create()): Writer {
    if (message.rider !== '') {
      writer.uint32(10).string(message.rider)
    }
    if (message.initialTime !== 0) {
      writer.uint32(16).int64(message.initialTime)
    }
    if (message.initialDistance !== 0) {
      writer.uint32(24).int64(message.initialDistance)
    }
    if (message.boostPercent !== 0) {
      writer.uint32(32).int64(message.boostPercent)
    }
    for (const v of message.eligibleDrivers) {
      writer.uint32(42).string(v!)
    }
    if (message.rideState !== 0) {
      writer.uint32(48).int64(message.rideState)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRide {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateRide } as MsgCreateRide
    message.eligibleDrivers = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.rider = reader.string()
          break
        case 2:
          message.initialTime = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.initialDistance = longToNumber(reader.int64() as Long)
          break
        case 4:
          message.boostPercent = longToNumber(reader.int64() as Long)
          break
        case 5:
          message.eligibleDrivers.push(reader.string())
          break
        case 6:
          message.rideState = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateRide {
    const message = { ...baseMsgCreateRide } as MsgCreateRide
    message.eligibleDrivers = []
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = String(object.rider)
    } else {
      message.rider = ''
    }
    if (object.initialTime !== undefined && object.initialTime !== null) {
      message.initialTime = Number(object.initialTime)
    } else {
      message.initialTime = 0
    }
    if (object.initialDistance !== undefined && object.initialDistance !== null) {
      message.initialDistance = Number(object.initialDistance)
    } else {
      message.initialDistance = 0
    }
    if (object.boostPercent !== undefined && object.boostPercent !== null) {
      message.boostPercent = Number(object.boostPercent)
    } else {
      message.boostPercent = 0
    }
    if (object.eligibleDrivers !== undefined && object.eligibleDrivers !== null) {
      for (const e of object.eligibleDrivers) {
        message.eligibleDrivers.push(String(e))
      }
    }
    if (object.rideState !== undefined && object.rideState !== null) {
      message.rideState = Number(object.rideState)
    } else {
      message.rideState = 0
    }
    return message
  },

  toJSON(message: MsgCreateRide): unknown {
    const obj: any = {}
    message.rider !== undefined && (obj.rider = message.rider)
    message.initialTime !== undefined && (obj.initialTime = message.initialTime)
    message.initialDistance !== undefined && (obj.initialDistance = message.initialDistance)
    message.boostPercent !== undefined && (obj.boostPercent = message.boostPercent)
    if (message.eligibleDrivers) {
      obj.eligibleDrivers = message.eligibleDrivers.map((e) => e)
    } else {
      obj.eligibleDrivers = []
    }
    message.rideState !== undefined && (obj.rideState = message.rideState)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateRide>): MsgCreateRide {
    const message = { ...baseMsgCreateRide } as MsgCreateRide
    message.eligibleDrivers = []
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = object.rider
    } else {
      message.rider = ''
    }
    if (object.initialTime !== undefined && object.initialTime !== null) {
      message.initialTime = object.initialTime
    } else {
      message.initialTime = 0
    }
    if (object.initialDistance !== undefined && object.initialDistance !== null) {
      message.initialDistance = object.initialDistance
    } else {
      message.initialDistance = 0
    }
    if (object.boostPercent !== undefined && object.boostPercent !== null) {
      message.boostPercent = object.boostPercent
    } else {
      message.boostPercent = 0
    }
    if (object.eligibleDrivers !== undefined && object.eligibleDrivers !== null) {
      for (const e of object.eligibleDrivers) {
        message.eligibleDrivers.push(e)
      }
    }
    if (object.rideState !== undefined && object.rideState !== null) {
      message.rideState = object.rideState
    } else {
      message.rideState = 0
    }
    return message
  }
}

const baseMsgCounterQuote: object = { driver: '', rideId: 0, premiumPercent: 0 }

export const MsgCounterQuote = {
  encode(message: MsgCounterQuote, writer: Writer = Writer.create()): Writer {
    if (message.driver !== '') {
      writer.uint32(10).string(message.driver)
    }
    if (message.rideId !== 0) {
      writer.uint32(16).int64(message.rideId)
    }
    if (message.premiumPercent !== 0) {
      writer.uint32(24).int64(message.premiumPercent)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCounterQuote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCounterQuote } as MsgCounterQuote
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.driver = reader.string()
          break
        case 2:
          message.rideId = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.premiumPercent = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCounterQuote {
    const message = { ...baseMsgCounterQuote } as MsgCounterQuote
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = String(object.driver)
    } else {
      message.driver = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = Number(object.rideId)
    } else {
      message.rideId = 0
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = Number(object.premiumPercent)
    } else {
      message.premiumPercent = 0
    }
    return message
  },

  toJSON(message: MsgCounterQuote): unknown {
    const obj: any = {}
    message.driver !== undefined && (obj.driver = message.driver)
    message.rideId !== undefined && (obj.rideId = message.rideId)
    message.premiumPercent !== undefined && (obj.premiumPercent = message.premiumPercent)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCounterQuote>): MsgCounterQuote {
    const message = { ...baseMsgCounterQuote } as MsgCounterQuote
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = object.driver
    } else {
      message.driver = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = object.rideId
    } else {
      message.rideId = 0
    }
    if (object.premiumPercent !== undefined && object.premiumPercent !== null) {
      message.premiumPercent = object.premiumPercent
    } else {
      message.premiumPercent = 0
    }
    return message
  }
}

const baseMsgAcceptRide: object = { rider: '', rideId: 0, driver: '' }

export const MsgAcceptRide = {
  encode(message: MsgAcceptRide, writer: Writer = Writer.create()): Writer {
    if (message.rider !== '') {
      writer.uint32(10).string(message.rider)
    }
    if (message.rideId !== 0) {
      writer.uint32(16).int64(message.rideId)
    }
    if (message.driver !== '') {
      writer.uint32(26).string(message.driver)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptRide {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAcceptRide } as MsgAcceptRide
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.rider = reader.string()
          break
        case 2:
          message.rideId = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.driver = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAcceptRide {
    const message = { ...baseMsgAcceptRide } as MsgAcceptRide
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = String(object.rider)
    } else {
      message.rider = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = Number(object.rideId)
    } else {
      message.rideId = 0
    }
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = String(object.driver)
    } else {
      message.driver = ''
    }
    return message
  },

  toJSON(message: MsgAcceptRide): unknown {
    const obj: any = {}
    message.rider !== undefined && (obj.rider = message.rider)
    message.rideId !== undefined && (obj.rideId = message.rideId)
    message.driver !== undefined && (obj.driver = message.driver)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAcceptRide>): MsgAcceptRide {
    const message = { ...baseMsgAcceptRide } as MsgAcceptRide
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = object.rider
    } else {
      message.rider = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = object.rideId
    } else {
      message.rideId = 0
    }
    if (object.driver !== undefined && object.driver !== null) {
      message.driver = object.driver
    } else {
      message.driver = ''
    }
    return message
  }
}

const baseMsgEndRide: object = { rider: '', rideId: 0, finalTime: 0, finalDistance: 0 }

export const MsgEndRide = {
  encode(message: MsgEndRide, writer: Writer = Writer.create()): Writer {
    if (message.rider !== '') {
      writer.uint32(10).string(message.rider)
    }
    if (message.rideId !== 0) {
      writer.uint32(16).int64(message.rideId)
    }
    if (message.finalTime !== 0) {
      writer.uint32(24).int64(message.finalTime)
    }
    if (message.finalDistance !== 0) {
      writer.uint32(32).int64(message.finalDistance)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEndRide {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgEndRide } as MsgEndRide
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.rider = reader.string()
          break
        case 2:
          message.rideId = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.finalTime = longToNumber(reader.int64() as Long)
          break
        case 4:
          message.finalDistance = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgEndRide {
    const message = { ...baseMsgEndRide } as MsgEndRide
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = String(object.rider)
    } else {
      message.rider = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = Number(object.rideId)
    } else {
      message.rideId = 0
    }
    if (object.finalTime !== undefined && object.finalTime !== null) {
      message.finalTime = Number(object.finalTime)
    } else {
      message.finalTime = 0
    }
    if (object.finalDistance !== undefined && object.finalDistance !== null) {
      message.finalDistance = Number(object.finalDistance)
    } else {
      message.finalDistance = 0
    }
    return message
  },

  toJSON(message: MsgEndRide): unknown {
    const obj: any = {}
    message.rider !== undefined && (obj.rider = message.rider)
    message.rideId !== undefined && (obj.rideId = message.rideId)
    message.finalTime !== undefined && (obj.finalTime = message.finalTime)
    message.finalDistance !== undefined && (obj.finalDistance = message.finalDistance)
    return obj
  },

  fromPartial(object: DeepPartial<MsgEndRide>): MsgEndRide {
    const message = { ...baseMsgEndRide } as MsgEndRide
    if (object.rider !== undefined && object.rider !== null) {
      message.rider = object.rider
    } else {
      message.rider = ''
    }
    if (object.rideId !== undefined && object.rideId !== null) {
      message.rideId = object.rideId
    } else {
      message.rideId = 0
    }
    if (object.finalTime !== undefined && object.finalTime !== null) {
      message.finalTime = object.finalTime
    } else {
      message.finalTime = 0
    }
    if (object.finalDistance !== undefined && object.finalDistance !== null) {
      message.finalDistance = object.finalDistance
    } else {
      message.finalDistance = 0
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

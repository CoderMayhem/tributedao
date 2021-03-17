// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TributeContract__proposalsResult {
  value0: Bytes;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: BigInt;
  value5: Address;
  value6: BigInt;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: BigInt,
    value5: Address,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class TributeContract extends ethereum.SmartContract {
  static bind(address: Address): TributeContract {
    return new TributeContract("TributeContract", address);
  }

  getFlag(flags: BigInt, flag: BigInt): boolean {
    let result = super.call("getFlag", "getFlag(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(flags),
      ethereum.Value.fromUnsignedBigInt(flag)
    ]);

    return result[0].toBoolean();
  }

  try_getFlag(flags: BigInt, flag: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("getFlag", "getFlag(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(flags),
      ethereum.Value.fromUnsignedBigInt(flag)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  proposals(param0: Address, param1: Bytes): TributeContract__proposalsResult {
    let result = super.call(
      "proposals",
      "proposals(address,bytes32):(bytes32,address,address,address,uint256,address,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );

    return new TributeContract__proposalsResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBigInt()
    );
  }

  try_proposals(
    param0: Address,
    param1: Bytes
  ): ethereum.CallResult<TributeContract__proposalsResult> {
    let result = super.tryCall(
      "proposals",
      "proposals(address,bytes32):(bytes32,address,address,address,uint256,address,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TributeContract__proposalsResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBigInt()
      )
    );
  }

  setFlag(flags: BigInt, flag: BigInt, value: boolean): BigInt {
    let result = super.call(
      "setFlag",
      "setFlag(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(flags),
        ethereum.Value.fromUnsignedBigInt(flag),
        ethereum.Value.fromBoolean(value)
      ]
    );

    return result[0].toBigInt();
  }

  try_setFlag(
    flags: BigInt,
    flag: BigInt,
    value: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setFlag",
      "setFlag(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(flags),
        ethereum.Value.fromUnsignedBigInt(flag),
        ethereum.Value.fromBoolean(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConfigureDaoCall extends ethereum.Call {
  get inputs(): ConfigureDaoCall__Inputs {
    return new ConfigureDaoCall__Inputs(this);
  }

  get outputs(): ConfigureDaoCall__Outputs {
    return new ConfigureDaoCall__Outputs(this);
  }
}

export class ConfigureDaoCall__Inputs {
  _call: ConfigureDaoCall;

  constructor(call: ConfigureDaoCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddrToMint(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConfigureDaoCall__Outputs {
  _call: ConfigureDaoCall;

  constructor(call: ConfigureDaoCall) {
    this._call = call;
  }
}

export class ProvideTributeCall extends ethereum.Call {
  get inputs(): ProvideTributeCall__Inputs {
    return new ProvideTributeCall__Inputs(this);
  }

  get outputs(): ProvideTributeCall__Outputs {
    return new ProvideTributeCall__Outputs(this);
  }
}

export class ProvideTributeCall__Inputs {
  _call: ProvideTributeCall;

  constructor(call: ProvideTributeCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get applicant(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get tokenToMint(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get requestAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get tokenAddr(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get tributeAmount(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class ProvideTributeCall__Outputs {
  _call: ProvideTributeCall;

  constructor(call: ProvideTributeCall) {
    this._call = call;
  }
}

export class SponsorProposalCall extends ethereum.Call {
  get inputs(): SponsorProposalCall__Inputs {
    return new SponsorProposalCall__Inputs(this);
  }

  get outputs(): SponsorProposalCall__Outputs {
    return new SponsorProposalCall__Outputs(this);
  }
}

export class SponsorProposalCall__Inputs {
  _call: SponsorProposalCall;

  constructor(call: SponsorProposalCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SponsorProposalCall__Outputs {
  _call: SponsorProposalCall;

  constructor(call: SponsorProposalCall) {
    this._call = call;
  }
}

export class CancelProposalCall extends ethereum.Call {
  get inputs(): CancelProposalCall__Inputs {
    return new CancelProposalCall__Inputs(this);
  }

  get outputs(): CancelProposalCall__Outputs {
    return new CancelProposalCall__Outputs(this);
  }
}

export class CancelProposalCall__Inputs {
  _call: CancelProposalCall;

  constructor(call: CancelProposalCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CancelProposalCall__Outputs {
  _call: CancelProposalCall;

  constructor(call: CancelProposalCall) {
    this._call = call;
  }
}

export class ProcessProposalCall extends ethereum.Call {
  get inputs(): ProcessProposalCall__Inputs {
    return new ProcessProposalCall__Inputs(this);
  }

  get outputs(): ProcessProposalCall__Outputs {
    return new ProcessProposalCall__Outputs(this);
  }
}

export class ProcessProposalCall__Inputs {
  _call: ProcessProposalCall;

  constructor(call: ProcessProposalCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ProcessProposalCall__Outputs {
  _call: ProcessProposalCall;

  constructor(call: ProcessProposalCall) {
    this._call = call;
  }
}
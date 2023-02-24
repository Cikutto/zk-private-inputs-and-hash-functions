# Mina zkApp: Zk Private Inputs And Hash Functions

In this tutorial, we will discuss private inputs and hash functions.

With a zkApp, a user's local device generates one or more zero knowledge proofs, which are then verified by the Mina network. Each method in a SnarkyJS smart contract corresponds to constructing a proof.

As such, all inputs to a smart contract are private by default, and never seen by the blockchain, unless the developer chooses to store those values as on-chain state in the zkApp account.

We will build a smart contract with a piece of private state, that can be modified if a user knows the private state.

To follow the same zkApp tutorial, proceed to the Mina Docs
https://docs.minaprotocol.com/zkapps/tutorials/private-inputs-hash-functions

This template uses TypeScript.

## How to build

```sh
npm run build
```

## How to run tests

```sh
npm run test
npm run testw # watch mode
```

## How to run coverage

```sh
npm run coverage
```

## License

[Apache-2.0](LICENSE)

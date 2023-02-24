import { Field, SmartContract, state, State, method, Poseidon } from 'snarkyjs';

export class IncrementSecret extends SmartContract {
  @state(Field) x = State<Field>();

  /*
Note that these inputs to our initState() method are private to whomever initializes the contract.
Nobody looking at the zkApp account on the chain can see or know what values firstSecret or salt actually are.
*/
  @method initState(salt: Field, firstSecret: Field) {
    this.x.set(Poseidon.hash([salt, firstSecret]));
  }

  @method incrementSecret(salt: Field, secret: Field) {
    const x = this.x.get();
    this.x.assertEquals(x);
    Poseidon.hash([salt, secret]).assertEquals(x);
    this.x.set(Poseidon.hash([salt, secret.add(1)]));
  }
}

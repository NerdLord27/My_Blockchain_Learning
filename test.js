// Test the blockchain implementation
const { Block, Blockchain } = require('./BasicBlockchain/Blockchain');

// Create a new blockchain
let myBlockchain = new Blockchain();

console.log('Mining block 1...');
myBlockchain.addBlock(new Block(Date.now(), { amount: 4 }));

console.log('Mining block 2...');
myBlockchain.addBlock(new Block(Date.now(), { amount: 8 }));

console.log('Blockchain valid?', myBlockchain.isChainValid());

// Try to tamper with the chain
console.log('\nTrying to tamper with block 1...');
myBlockchain.chain[1].data = { amount: 100 };
console.log('Blockchain valid after tampering?', myBlockchain.isChainValid());

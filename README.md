# My_Blockchain_Learning
A repository for projects and code related to learning blockchain technologies

## #1 The Basic Blockchain
- A simple Blockchain programmed in JavaScript
- Uses the basic concepts of a blockchain
- A test of fundamentals and a way to visualize concepts

### Running the Test
To run the blockchain test and see it in action:

```bash
# Navigate to the project directory
cd /path/to/BlockchainProgramming/BasicBlockchain

# Run the test script
node test.js
```

This will:
- Create a new blockchain with a genesis block
- Mine two additional blocks
- Verify the chain is valid
- Demonstrate tampering detection by modifying block data and showing validation fails

## #2 The Multi-sig wallet
- A contract that requires M-of-N owners to approve a transaction
- Ensures users cannot double vote
- Enforces access control for specific functions
- Using Solidity and Hardhat to create the contract
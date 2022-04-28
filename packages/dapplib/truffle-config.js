require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember mistake imitate prison fringe slice'; 
let testAccounts = [
"0x1ea154bd982e0dac13dca5cac6ee0689ce81bb4c5a49b0b1f2816fe06c720755",
"0xada2e46a9c35f7f06ade939f0d8d3123596cc6d1df0b6deb5a1c45b1351c75ea",
"0xfa843ec07c0b1551c9c689dc378f84a0a8557f4db90a783570c90abbd05dad35",
"0x0ecf7e57ece560b8c9797a8106e726789e4178ba32a0d511f3d060518fd9ef77",
"0xe03a975163157a65be22745d66ec29f026ce159da94e517fe5345eddcf228737",
"0x232c3140454196ef1fd70557162e51d3925ba0b2da613dea7141b43eb8b0c84f",
"0xfdacf9dbe62cc9aa1037bfeef49438a1ad182b1d40fb08a8287bece98c8e7ab9",
"0xa2884c2e32cbfc011d75c2b3d46379ec0f909b7631776ddd474e5de578a26510",
"0x52f9b9ec6b0187bb7b21f0053c20edbd473551a34a9ff6e98f32b954798bf318",
"0x6b2f39544a4878b5e2e68e18e71df9aa95870327541da8b1d9960a1c75741d69"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


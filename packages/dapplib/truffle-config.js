require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note miss equip hover private bone gather'; 
let testAccounts = [
"0x99c3e62b68e94d31835ff791f71f3f53ec2ac305cb98ed8df4418b2a9195e682",
"0x801b5c76c50e9db389cb56a61a6952fdbc2b911833dcae7c4818292adb0cecfc",
"0x08f123d7a1462b251d68fea457198a11aa2284ef2207885172a6bf6a34c5f808",
"0x7bb463ab6faea47eb1dd70878ff1ec2176c94d66dd02f112f9f97ee21a776609",
"0xdd9d4d1bfd8267f1f238b1273daff5e3776005d8a5dae5b32b20c7499b4cb290",
"0xdea1863f708fae30cd4b776fe26169790d85c2efb5fd1c28aaa3ab07c44c1de2",
"0x09d446b19a4e2dde05522cb36785b4e658687b3f2438c1a2d6f4443c5e599494",
"0x0ba2f83dff2a4ba76bd139f065f20c065982495e15811967d2c2727163ca90f3",
"0x86a59bc240c15d29069d095ab73f42b88f9b415840e24565d35fb1ee1b7a9157",
"0x6b35df44828cb66d92776ac5a28b3dd76ef0ade6e95c737e7e180eef052b2fbc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


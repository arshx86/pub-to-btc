# zpub-address-generator
Creates unused unique BTC pay address from your PUB.

### Logic
Tool generates a new BTC address with **XPUB-LIB** and checks if it's used. If it is, a new unique address will be returned. 
Its highly recommended to save unused Index to make next address creation faster.

## Installation
`npm i @unspentio/xpub-lib axios`

## PUBs
Supports XPUB/YPUB/ZPUB as well as mainnet & testnet. 

### Credits

[xpub-lib](https://github.com/swan-bitcoin/xpub-tool/tree/master/packages/xpub-lib) - [axios](https://github.com/axios/axios)

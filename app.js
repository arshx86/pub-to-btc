const xpubl = require('@unspentio/xpub-lib');
const axios = require('axios');

const x = 'put your zpub/xpub/ypub here, can taken from electrum';
const network = 'mainnet'; // testnet/mainnet

function generateAddress(xpub, network, index) {
    const r = xpubl.addressFromExtPubKey({
        extPubKey: xpub,
        network: network,
        keyIndex: index,
    });
    console.log(`Address: ${r}`);
    return r.address;
}

async function isAddressUsed(address) {
    try {
        const response = await axios.get(`https://blockstream.info/api/address/${address}/txs`);
        const data = response.data;
        return data.n_tx > 0;
    } catch (error) {
        console.error("Error checking address usage:", error);
        return true;
    }
}

async function findNextUnusedAddress(xpub, network) {
    for (let index = 0; ; index++) {
        const address = generateAddress(xpub, network, index);
        const used = await isAddressUsed(address);
        console.log(`Address ${address} at index ${index} is ${used ? 'used' : 'unused'}`);

        if (!used) {
            // save index to db etc.
            console.log(`Next unused address: ${address} at index ${index}`);
            return { address, index };
        }
    }
}


findNextUnusedAddress(x, network);

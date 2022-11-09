import fetch from 'node-fetch';

const KUBER_HOST = process.env.KUBER_HOST;
const KUBER_PORT = process.env.KUBER_PORT;

async function postKuberTx(body: any) {
    const endpoint = `http://${KUBER_HOST}:${KUBER_PORT}/api/v1/tx`

    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    });

    return await response.json();
}

const MY_TX = {
    "selections": [
        "addr_test1qqu40thp36tafevkyntuvusk4qyrp2zmhv5vkpsv0mkm8jp3vrgyu8jf0945asdjgaf679x430qpzvpql4khxy2xljeqa3xjhw",
        "828258205d6c499413c83ee1f22213af9f712322475dfc3afaea9ce547f162040244b32e0082583900f6eece21f7e3dd38b3a2b628c8104684c73fab2a4f17adfc1bd7b4703160d04e1e49796b4ec1b24753af14d58bc0113020fd6d731146fcb21b00000002540be400"
    ],
    "outputs": [
        { "address": "addr_test1qqmwpnc72ts9a7fw2trmc2syfy7khtjgrw9vh2cja3psp4lee858y3kj7qmn3pvfdtfgqjmj99nnypx2eysgx3wpafds78dunz", "value": "1A" }
    ]
};

postKuberTx(MY_TX).then(console.log).catch(console.error);

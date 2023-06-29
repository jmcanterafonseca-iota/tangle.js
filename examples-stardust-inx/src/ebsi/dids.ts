export const dids = {
    rootTrust: {
        did: "did:iota:tst:0x8faff1d7514eeae7fa17f66adb53d514ff85f9eb230f1aa1f9d8e943ebe3c78c",
        privateKeyDidControl: "0xd3cc37b46f5fea8863cd53bd878b5e196ef3a21d4adf6d13180292685398af6c490272beecd09f9aceb7f459b0a6cae46ae5f3e757aca5847af43d32bb48b152",
        publicKeyDidControl: "0x490272beecd09f9aceb7f459b0a6cae46ae5f3e757aca5847af43d32bb48b152",
        privateKeySign: "0x6fa50ffb05e0afe350852f9caac7e9282b3c79a5215be70c6d1cc8e06c4a3d1794299286fee7ac43990d80f68e3ac3942f291095787a43115af4c3c9fe4a53d7"
    },
    esGovernmentTAO: {
        did: "did:iota:tst:0x227d08526f19e1bfd441ff7a0994ce0b2c1ee3000d8aab8e44c58300a2b72e2d",
        privateKeyDidControl: "0xb40071c414b64db86011b7716bfeb719ec4f77adcf17f25b8076fbb5a1fb3698e710576bda504245d2fdce8f81959fffae6be51d692a19d9c63c1b0e4b737d39",
        publicKeyDidControl: "0xe710576bda504245d2fdce8f81959fffae6be51d692a19d9c63c1b0e4b737d39",
        privateKeySign: "0x7bcc4eb58f45320e2895b50d925e3b336e944f886845319fed68a8e3480646d07a8a90ca6069aa538fd94cc066139f409ecb777a7e4729531dba4d8361a4e1ed"
    },
    revenueAgencyTAO: {
        did: "did:iota:tst:0x8f3b066327c83c9c8a2fbf01e005d3407fca9c5853ca947fe4536462aa31600f",
        privateKeySign: "0x8e4c81cc8c6f2f44a72d287521b9e1fae27754755efb573b10014eca6c57cfd86a1b1a17fd41ed2d462625984a0aeb95a0798e23b71bda737d54e6523aba4b5f"
    },
    envAgencyTAO: {
        did: "did:iota:tst:0xb5eab59c42f979923818284ca14b88d4ca3d539a0f7330612416c422de303488",
        privateKeySign: "0x2a3506aa8c55f5fbfc7c077b7ce76f1d931629840b951e21037d60802cc47930e7b2f324ef4e695753ee10dd8f4cd78758141c979041549e5cfc8e4ddb6d2693"
    },
    recyclerTI: {
        did: "did:iota:tst:0x25237db769135c3053065913547cbf6482600a9646d40a978aabc017042f161f",
        privateKeySign: "0xf0d34c4f5b74bc327fbe6646fdf874f6dad9d5425e138078ef654b1144389eae55abe1926a93c39b3d18c005e0372a80a0f860370d9ec180f82f960538809cf4"
    },
    manufacturerLegalEntity: {
        did: "did:iota:tst:0x77eac1ab20a84c5ca1d3020b7eb0c1f2220eb098d0c839b9f3fd69de54807202"
    }
};

export const ebsiDids = {
    rootTrust: {
        did: "did:iota:ebsi:0x2550e39e01e8ce23eaaf35d81548edff55d5a32268128504b9e35e0ca92d488c",
        privateKeyDidControl: "0xf0f20a08e858ad051d74e78e772b41285b6bdce5de72a33ae85cf0d48ad916d84cdc26d4465c2f7add8551b0ab9061bc2187be0ed49e1452fb07fce2d5b803c6",
        publicKeyDidControl: "0x4cdc26d4465c2f7add8551b0ab9061bc2187be0ed49e1452fb07fce2d5b803c6",
        privateKeySign: "0x561bf85108e2981f8adb08a5dc939a128b646c0c0756b626a79c89e3b2128711948b5fece3c51306e656c0ffea1ad80c6c83c3e7d9df63c5cf4a14d1d87e54ec"
    },
    esGovernmentTAO: {
        did: "did:iota:ebsi:0xc0b5233ae63c25e7efaabd5563a3b78f31bfbdfff69043401cd791816c6724a4",
        privateKeyDidControl: "0x0641164310547731d006d49d3123bd3ba5cdbfaeb9478134cc00bc7eb1332d16963d3546390e043a3b3100160efb810b66ec8d3715cae8815aba3a353c7a8a5d",
        publicKeyDidControl: "0x963d3546390e043a3b3100160efb810b66ec8d3715cae8815aba3a353c7a8a5d",
        privateKeySign: "0xfa81281b92ce47bda6f7853c8009a50cb8c67e923640be1fda0ce956d16a8e20ee6a1febb607d757fac073b22f79eb6e59601946e10caf0e5a6c5d22035634ad"
    }
};

export const ebsiDidsJwk = {
    rootTrust: {
        did: "did:iota:tst:0xd0f496159980c9781c7ede6735c21f40756745d385999bb5a80490b347226532",
        privateKeyDidControl: "0xb73b066ca5f416fc1ea74c82fe5a8c7bf9f292f22a18b6b9d1de40582914a20f2d83b0d8c34a4b076a6a8b19be7b480ccb3001da7880aedf0237c3bbe2406837",
        publicKeyDidControl: "0x2d83b0d8c34a4b076a6a8b19be7b480ccb3001da7880aedf0237c3bbe2406837",
        privateKeySign: {
            "use": "sig",
            "alg": "ES256",
            "kty": "EC",
            "x": "OW-K0MS1GJr18QsFimm1DWZYnZlVKTWERYyuWG_UEYo",
            "y": "aA56KmqhYle4RMQd4hdJQqRi5HNrptdHLLN5bqtGor4",
            "crv": "P-256",
            "d": "-HKxayVZ9tNThx-FSGH6BbRMehe9r-pbriUDIzZof18",
            "kid": "QBY2xH1c9FdN-WtlFGXaAC9KFgjOO2ArSayQXIrxU1A"
        }
    },
    esGovernmentTAO: {
        did: "did:iota:tst:0x2c9e4529301918a165c029e57579e24df0a280805d28532a56487dc9aebfb16d",
        privateKeyDidControl: "0xbd6add038c47395e0f57587dad489da25ffe13d590aaab40ad04e6e5a8e87331eafca4643ac70059d0fb614b81a2483528574e0108c5098a10c8e3a70e7732ad",
        publicKeyDidControl: "0xeafca4643ac70059d0fb614b81a2483528574e0108c5098a10c8e3a70e7732ad",
        privateKeySign: {
            "use": "sig",
            "alg": "ES256",
            "kty": "EC",
            "x": "h_yhTOkXfeq3SWshPBw5m_fI9a-OmZLpACI4W2Uz0Nc",
            "y": "NPEkD6rAvkhnmoJTC0vl5amRQ5iv6xm8yKKoCWTqN38",
            "crv": "P-256",
            "d": "7pvlxj3VcpzQu0jT-KUDIvLgOtuzSMOslSxh4dc9r0Y",
            "kid": "b2uKWE5hgur3y0pWlueFJSMF1rjBvysHzv8W-7qO6Zs"
        }
    },
    revenueAgencyTAO: {
        did: "did:iota:tst:0xd790148263a3bd9b1a6d6e158eebeb14fc196d3d01512c246a67fc24781ee4f7",
        privateKeyDidControl: "0x36dd193a9a09f1aefe7b1768f338f0cf2ce39a68902d682de3676764602ad436c6ab84856fb3917a4c3343c77952ea77a4b31c73f848ca59ba02c00a5effdc7c",
        publicKeyDidControl: "0xc6ab84856fb3917a4c3343c77952ea77a4b31c73f848ca59ba02c00a5effdc7c",
        privateKeySign: {
            "use": "sig",
            "alg": "ES256",
            "kty": "EC",
            "x": "NlA5DcoNRMOTUzD3kZqiPBfZzLwXb9zC3NjZALwtOUk",
            "y": "R5OH3aJ3f1sUJGI_pIwy1unp3mujHj6Ra599MjFfnfI",
            "crv": "P-256",
            "d": "gRxBSeUlLZLHdD5tuZYgTFGH2cZAnU4WrSNEYw6VIw8",
            "kid": "Q45Ed0uNsZY6J6OtR09UXd8R4hRmcAHuC7KBv4rrv7s"
        }
    },
    recyclerTI: {
        did: "did:iota:tst:0x6f5d2cfe81c27d33b8977e2b4bdf07b00378174aca1770a17a91c323960b3d2d",
        privateKeyDidControl: "0x6b5101adcd50f15894347ee4bc4bd8db12ebda9776c4ce596a67a16d8af4461a7cc01ee5d95038732227989e6d35acada8cdb9b2f6779f222caf939a9bf57a40",
        publicKeyDidControl: "0x7cc01ee5d95038732227989e6d35acada8cdb9b2f6779f222caf939a9bf57a40",
        privateKeySign: {
            "use": "sig",
            "alg": "EdDSA",
            "crv": "Ed25519",
            "d": "dX2V2IYeZmblfJkef03bG9Wk-DbhsZ1pbqIH2tKcIec",
            "x": "JwrXeFRh7te585WGUXyzLswkJEEiGz-q4TQ3rarZ5Ck",
            "kty": "OKP",
            "kid": "YrLtAMV0Hl31BEtxazzgW5ueiqK0asq961ZHKE9j2GM"
        },
        rawPrivateKeySign: "0x757d95d8861e6666e57c991e7f4ddb1bd5a4f836e1b19d696ea207dad29c21e7"
    },
};

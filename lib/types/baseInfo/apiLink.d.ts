export type API_LINK = {
    time: string;
    info: string;
    pairs: string;
    price: string;
    rpcs: string;
    version: string;
    farmApr: string;
    farmAprLine: string;
    tokenInfo: string;
    poolInfo: string;
    farmInfo: string;
    idoInfo: string;
    idoProjectInfo: string;
    clmmPools: string;
    clmmConfigs: string;
    clmmPositionLine: string;
};
export declare const ENDPOINT = "https://api.raydium.io";
export declare const RAYDIUM_MAINNET: {
    readonly time: "/v2/main/chain/time";
    readonly info: "/v2/main/info";
    readonly pairs: "/v2/main/pairs";
    readonly price: "/v2/main/price";
    readonly rpcs: "/v2/main/rpcs";
    readonly version: "/v2/main/version";
    readonly farmApr: "/v2/main/farm/info";
    readonly farmAprLine: "/v2/main/farm-apr-tv";
    readonly tokenInfo: "/v2/sdk/token/raydium.mainnet.json";
    readonly poolInfo: "/v2/sdk/liquidity/mainnet.json";
    readonly farmInfo: "/v2/sdk/farm-v2/mainnet.json";
    readonly idoInfo: "/v2/main/ido/pools";
    readonly idoProjectInfo: "/v2/main/ido/project/<id>";
    readonly clmmPools: "/v2/ammV3/ammPools";
    readonly clmmConfigs: "/v2/ammV3/ammConfigs";
    readonly clmmPositionLine: "/v2/ammV3/positionLine/<poolId>";
};
//# sourceMappingURL=apiLink.d.ts.map
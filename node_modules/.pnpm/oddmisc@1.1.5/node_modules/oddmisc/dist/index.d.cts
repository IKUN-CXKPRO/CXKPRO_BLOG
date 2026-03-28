declare const VERSION: string;

interface UmamiConfig {
    /** 如: https://umami.example.com/share/abc123 */
    shareUrl: string;
    baseUrl?: string;
    shareId?: string;
}
interface StatsQueryParams {
    path?: string;
    url?: string;
}
interface StatsResult$1 {
    pageviews: number;
    visitors: number;
    _fromCache?: boolean;
}

declare class UmamiClient {
    private config;
    private cacheManager;
    private api;
    constructor(config: UmamiConfig);
    getPageStats(path: string, options?: Partial<StatsQueryParams>): Promise<StatsResult$1>;
    getPageStatsByUrl(url: string, options?: Partial<StatsQueryParams>): Promise<StatsResult$1>;
    getSiteStats(options?: Partial<StatsQueryParams>): Promise<StatsResult$1>;
    clearCache(): void;
    getConfig(): Readonly<UmamiConfig>;
    updateConfig(newConfig: Partial<UmamiConfig>): void;
}
declare function createUmamiClient(config: UmamiConfig): UmamiClient;

declare class CacheManager<T = any> {
    private memoryCache;
    private readonly CACHE_KEY;
    private readonly DEFAULT_TTL;
    constructor(namespace?: string, ttl?: number);
    private isExpired;
    get(key: string): T | null;
    set(key: string, value: T): void;
    clear(): void;
    delete(key: string): void;
}

/**
 * 解析 Umami 分享 URL
 * 支持标准格式和 cloud.umami.is 格式
 */
declare function parseShareUrl(shareUrl: string): {
    apiBase: string;
    shareId: string;
};

interface UmamiIntegrationOptions {
    /** 设为 false 则跳过集成 */
    shareUrl: string | false;
}
declare function umami(options: UmamiIntegrationOptions): {
    name: string;
    hooks: {
        'astro:config:setup'?: undefined;
    };
} | {
    name: string;
    hooks: {
        'astro:config:setup': ({ injectScript }: any) => void;
    };
};

/**
 * 浏览器运行时客户端
 * 注意：此文件会被内联注入到页面，不能有外部依赖
 */
interface UmamiRuntimeConfig {
    shareUrl: string | false;
}
interface StatsResult {
    pageviews: number;
    visitors: number;
    visits?: number;
    _fromCache?: boolean;
}
declare function initUmamiRuntime(config: UmamiRuntimeConfig): void;

export { CacheManager, type UmamiRuntimeConfig as RuntimeConfig, type StatsResult as RuntimeStatsResult, type StatsQueryParams, type StatsResult$1 as StatsResult, UmamiClient, type UmamiConfig, type UmamiIntegrationOptions, VERSION, createUmamiClient, initUmamiRuntime, parseShareUrl, umami };

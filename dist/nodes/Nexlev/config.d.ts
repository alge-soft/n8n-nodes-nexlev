export interface Config {
    baseURL: string;
}
export declare enum Environment {
    DEV = "dev",
    PROD = "prod",
    LOCAL = "local"
}
export declare const ENVIRONMENT = Environment.PROD;
export declare const config: Config;

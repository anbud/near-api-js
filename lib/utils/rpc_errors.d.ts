import { ServerError } from '../generated/rpc_error_types';
export * from '../generated/rpc_error_types';
export declare function parseRpcError(errorObj: Record<string, any>): ServerError;
export declare function formatError(errorClassName: string, errorData: any): string;

/**
 * Cloudflare R2 Image Storage Helper
 * 
 * Supports both public R2 bucket / custom domain URLs and Cloudflare Worker
 * R2Bucket binding for edge serving.
 */

const DEFAULT_R2_BASE_URL =
  process.env.NEXT_PUBLIC_R2_PUBLIC_URL ||
  "https://assets.flyairlogistics.com";

/**
 * Returns the full publicly accessible URL for an asset key in Cloudflare R2.
 * If key already starts with http/https, it is returned as-is.
 */
export function getR2ImageUrl(key: string): string {
  if (!key) return "/images/placeholder-cargo.jpg";
  if (key.startsWith("http://") || key.startsWith("https://")) {
    return key;
  }
  const cleanKey = key.startsWith("/") ? key.slice(1) : key;
  return `${DEFAULT_R2_BASE_URL}/${cleanKey}`;
}

/**
 * Type declaration for Cloudflare R2 Bucket binding in Worker runtime
 */
export interface CloudflareEnv {
  R2_BUCKET?: {
    get: (key: string) => Promise<any>;
    put: (key: string, value: any, options?: any) => Promise<any>;
  };
  DB?: {
    prepare: (query: string) => any;
  };
}


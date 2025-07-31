import { KVNamespace } from "@cloudflare/workers-types";
import { D1Database } from "@cloudflare/workers-types";
import { R2Bucket } from "@cloudflare/workers-types";
// Based on your first screenshot
export interface Bindings {
    KV: KVNamespace;
    DB: D1Database;
    NEXT_INC_CACHE_R2_BUCKET: R2Bucket;
    DEBUG_MODE: string;
    API_VERSION: string;
  }
  
  // Add more types as needed
  export interface MemeConfig {
    debugMode?: boolean;
    apiVersion?: string;
  }
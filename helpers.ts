import type { MemeConfig } from "./types";

export function createMemeConfig(config?: Partial<MemeConfig>): MemeConfig {
  return {
    debugMode: false,
    apiVersion: '1.0.0',
    ...config
  };
}

export function logMeme(message: string, config: MemeConfig) {
  if (config.debugMode) {
    console.log(`[Meme Helper v${config.apiVersion}]: ${message}`);
  }
}
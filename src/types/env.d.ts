declare const __APP_VERSION__: string;

interface ImportMetaEnv {
  VITE_EVENTS_QUEUE_REGION: string,
  VITE_EVENTS_QUEUE_ENDPOINT: string,
  VITE_EVENTS_QUEUE_PATH: string,
  VITE_EVENTS_QUEUE_CREDENTIALS_KEY_ID: string,
  VITE_EVENTS_QUEUE_CREDENTIALS_ACCESS_KEY: string,

  VITE_AVATAR_GENERATION_QUEUE_REGION: string;
  VITE_AVATAR_GENERATION_QUEUE_ENDPOINT: string;
  VITE_AVATAR_GENERATION_QUEUE_PATH: string;
  VITE_AVATAR_GENERATION_QUEUE_CREDENTIALS_KEY_ID: string;
  VITE_AVATAR_GENERATION_QUEUE_CREDENTIALS_ACCESS_KEY: string;

  VITE_AVATAR_BUCKET_BASE_URL: string;
  
  VITE_BACKEND_API_BASE: string,
  VITE_SOLANA_RPC_ENDPOINT: string;
  VITE_SOLANA_WS_ENDPOINT: string;
  VITE_HELIUS_API_KEY?: string;
  VITE_MINIMUM_TOKEN_BALANCE: number;
  VITE_TOKEN_MINT: string;

  VITE_SUPPORT_URL?: string;
  VITE_DOC_URL?: string;

  VITE_BSCSCAN_API_KEY: string;
  VITE_PRIVY_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

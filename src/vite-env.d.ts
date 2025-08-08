/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID?: string;
  readonly VITE_FIREBASE_DB_URL?: string;
  readonly VITE_GOOGLE_SHEET_GET_STARTED_URL: string;
  readonly VITE_GOOGLE_SHEET_SUPPORT_REQUEST_URL: string;
  readonly VITE_GOOGLE_RECAPTCHA_SITE_KEY: string;
  readonly VITE_GOOGLE_SHEET_PARTNERS_URL: string;
  readonly VITE_APPS_SCRIPT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

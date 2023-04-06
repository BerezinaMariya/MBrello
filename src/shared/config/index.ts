import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabase";
import { SENTRY_DSN } from "./sentry";

const IS_DEVTOOLS = import.meta.env.DEV;
const IS_PRODUCTION = import.meta.env.PROD;

export {
  IS_DEVTOOLS,
  IS_PRODUCTION,
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SENTRY_DSN,
};

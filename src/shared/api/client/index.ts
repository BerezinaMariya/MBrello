import { createClient } from "@supabase/supabase-js";

import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/shared/config";

export const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

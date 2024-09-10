import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rqqcfjbqkbxclevmsuyb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxcWNmamJxa2J4Y2xldm1zdXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMDc4OTksImV4cCI6MjA0MDY4Mzg5OX0.gozPhQ0Xj481xrTLjUfwpgbF5snkcc1UZ4JmkBUmEAE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

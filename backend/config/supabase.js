import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Make sure we only use dotenv on the backend
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default supabase;

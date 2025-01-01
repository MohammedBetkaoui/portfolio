import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://laaksrsgehjqnitjhmmg.supabase.co';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhYWtzcnNnZWhqcW5pdGpobW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMTExMjIsImV4cCI6MjA0OTY4NzEyMn0.szRBPPh7QtNl_qm1ZRYKlFTV3953mByruYXNqvl03b0';

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;

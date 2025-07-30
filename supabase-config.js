// Supabase configuration
const SUPABASE_URL = 'https://lkwyrriusxpouxvxkuqt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrd3lycml1c3hwb3V4dnhrdXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MTU1OTksImV4cCI6MjA2OTA5MTU5OX0.jCK3I3GUa3nzaFjzqt1WZeCZav-CNAVwI6znO3nZqO8';
 
// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 
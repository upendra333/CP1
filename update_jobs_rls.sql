-- Update RLS policies for jobs table to allow public read access
-- Drop existing policies first
DROP POLICY IF EXISTS "Allow authenticated users to manage jobs" ON jobs;

-- Create policy to allow public read access to jobs
CREATE POLICY "Allow public read access to jobs" ON jobs
    FOR SELECT USING (true);

-- Create policy to allow authenticated users to manage jobs (insert, update, delete)
CREATE POLICY "Allow authenticated users to manage jobs" ON jobs
    FOR ALL USING (auth.role() = 'authenticated'); 
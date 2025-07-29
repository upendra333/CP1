-- Add new columns to the posts table
ALTER TABLE posts 
ADD COLUMN tag TEXT,
ADD COLUMN blog_page TEXT;

-- Update existing posts to have default values
UPDATE posts 
SET tag = 'news', blog_page = 'nablog' 
WHERE tag IS NULL OR blog_page IS NULL;

-- Make the new columns required for future posts
ALTER TABLE posts 
ALTER COLUMN tag SET NOT NULL,
ALTER COLUMN blog_page SET NOT NULL; 

-- Add country column to existing jobs table
ALTER TABLE jobs ADD COLUMN IF NOT EXISTS country TEXT;

-- Update existing records to have a default country value (you can modify this as needed)
UPDATE jobs SET country = 'USA' WHERE country IS NULL;

-- Make country column NOT NULL after setting default values
ALTER TABLE jobs ALTER COLUMN country SET NOT NULL;

-- Add a comment to document the change
COMMENT ON COLUMN jobs.country IS 'Country where the job is located (Canada, USA, India)';

-- Create contact_submissions table for storing contact form data
CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    project_type TEXT NOT NULL,
    project_size TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated users to read contact submissions" ON contact_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow anyone to insert submissions
CREATE POLICY "Allow anyone to insert contact submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 
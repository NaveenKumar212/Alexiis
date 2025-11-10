/*
  # Prompt-Based Web App Generation Schema

  1. New Tables
    - `generated_apps`
      - `id` (uuid, primary key)
      - `user_prompt` (text) - The original user prompt
      - `app_name` (text) - Generated or user-provided app name
      - `app_description` (text) - Description of the app
      - `app_type` (text) - Type/category of the app
      - `html_code` (text) - Generated HTML code
      - `features` (jsonb) - List of features included
      - `color_scheme` (jsonb) - Color scheme used
      - `status` (text) - draft, published, archived
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `view_count` (integer) - Number of times viewed
      
    - `prompt_history`
      - `id` (uuid, primary key)
      - `prompt` (text) - The user's prompt
      - `generated_app_id` (uuid, foreign key)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public read access for published apps
    - Anyone can create new generated apps
*/

-- Create generated_apps table
CREATE TABLE IF NOT EXISTS generated_apps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_prompt text NOT NULL,
  app_name text NOT NULL,
  app_description text,
  app_type text,
  html_code text NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  color_scheme jsonb DEFAULT '{}'::jsonb,
  status text DEFAULT 'published',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  view_count integer DEFAULT 0
);

-- Create prompt_history table
CREATE TABLE IF NOT EXISTS prompt_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt text NOT NULL,
  generated_app_id uuid REFERENCES generated_apps(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE generated_apps ENABLE ROW LEVEL SECURITY;
ALTER TABLE prompt_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies for generated_apps
CREATE POLICY "Anyone can view published apps"
  ON generated_apps FOR SELECT
  USING (status = 'published');

CREATE POLICY "Anyone can create apps"
  ON generated_apps FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update apps"
  ON generated_apps FOR UPDATE
  USING (true);

-- RLS Policies for prompt_history
CREATE POLICY "Anyone can view prompt history"
  ON prompt_history FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create prompt history"
  ON prompt_history FOR INSERT
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_generated_apps_created_at ON generated_apps(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_generated_apps_status ON generated_apps(status);
CREATE INDEX IF NOT EXISTS idx_generated_apps_type ON generated_apps(app_type);
CREATE INDEX IF NOT EXISTS idx_prompt_history_app_id ON prompt_history(generated_app_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_generated_apps_updated_at ON generated_apps;
CREATE TRIGGER update_generated_apps_updated_at
  BEFORE UPDATE ON generated_apps
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

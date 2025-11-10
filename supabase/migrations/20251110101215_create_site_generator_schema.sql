/*
  # Website Generator Schema

  1. New Tables
    - `generated_sites`
      - `id` (uuid, primary key)
      - `user_id` (uuid, nullable for anonymous users)
      - `title` (text)
      - `description` (text)
      - `template_type` (text) - e.g., 'landing', 'portfolio', 'ecommerce', 'blog', 'saas', 'restaurant'
      - `template_name` (text) - specific template identifier
      - `customizations` (jsonb) - stores all custom settings
      - `generated_code` (text) - the generated HTML/React code
      - `preview_url` (text, nullable)
      - `is_published` (boolean, default false)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `templates`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text)
      - `description` (text)
      - `preview_image` (text)
      - `tags` (text array)
      - `base_config` (jsonb)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Users can view all active templates
    - Users can manage their own generated sites
    - Anonymous users can create sites but not persist them long-term
*/

-- Create generated_sites table
CREATE TABLE IF NOT EXISTS generated_sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  title text NOT NULL,
  description text DEFAULT '',
  template_type text NOT NULL,
  template_name text NOT NULL,
  customizations jsonb DEFAULT '{}'::jsonb,
  generated_code text DEFAULT '',
  preview_url text,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create templates table
CREATE TABLE IF NOT EXISTS templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  preview_image text DEFAULT '',
  tags text[] DEFAULT ARRAY[]::text[],
  base_config jsonb DEFAULT '{}'::jsonb,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE generated_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;

-- Templates policies (public read for active templates)
CREATE POLICY "Anyone can view active templates"
  ON templates FOR SELECT
  USING (is_active = true);

-- Generated sites policies
CREATE POLICY "Users can view own sites"
  ON generated_sites FOR SELECT
  USING (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can create sites"
  ON generated_sites FOR INSERT
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can update own sites"
  ON generated_sites FOR UPDATE
  USING (user_id = auth.uid() OR user_id IS NULL)
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can delete own sites"
  ON generated_sites FOR DELETE
  USING (user_id = auth.uid() OR user_id IS NULL);

-- Insert seed templates
INSERT INTO templates (name, category, description, tags, base_config) VALUES
  ('Modern Landing', 'landing', 'Clean and modern landing page with hero section, features, and CTA', ARRAY['modern', 'business', 'startup'], '{"colorScheme": "blue", "layout": "centered"}'::jsonb),
  ('Creative Portfolio', 'portfolio', 'Showcase your work with a stunning portfolio design', ARRAY['creative', 'design', 'photography'], '{"colorScheme": "dark", "layout": "grid"}'::jsonb),
  ('E-Commerce Store', 'ecommerce', 'Full-featured online store with product catalog', ARRAY['shop', 'retail', 'products'], '{"colorScheme": "green", "layout": "sidebar"}'::jsonb),
  ('SaaS Platform', 'saas', 'Professional SaaS landing page with pricing tiers', ARRAY['software', 'subscription', 'business'], '{"colorScheme": "purple", "layout": "centered"}'::jsonb),
  ('Restaurant Menu', 'restaurant', 'Beautiful restaurant website with menu display', ARRAY['food', 'dining', 'hospitality'], '{"colorScheme": "warm", "layout": "elegant"}'::jsonb),
  ('Blog Platform', 'blog', 'Content-focused blog with article layouts', ARRAY['writing', 'content', 'news'], '{"colorScheme": "neutral", "layout": "classic"}'::jsonb),
  ('Agency Showcase', 'agency', 'Professional agency website with case studies', ARRAY['marketing', 'creative', 'corporate'], '{"colorScheme": "gradient", "layout": "bold"}'::jsonb),
  ('Tech Startup', 'startup', 'Modern tech startup page with product features', ARRAY['technology', 'innovation', 'product'], '{"colorScheme": "cyan", "layout": "dynamic"}'::jsonb)
ON CONFLICT DO NOTHING;

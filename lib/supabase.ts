import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Template = {
  id: string;
  name: string;
  category: string;
  description: string;
  preview_image: string;
  tags: string[];
  base_config: any;
  is_active: boolean;
  created_at: string;
};

export type GeneratedSite = {
  id: string;
  user_id: string | null;
  title: string;
  description: string;
  template_type: string;
  template_name: string;
  customizations: any;
  generated_code: string;
  preview_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};
